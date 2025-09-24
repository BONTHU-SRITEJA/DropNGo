import { supabase, createBooking, Booking, LuggageItem } from '@/lib/supabase';

export interface BookingDetails {
  pickupLocation: string;
  deliveryLocation: string;
  storageHours: number;
  luggageItems: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
  }>;
  luggagePhotos: string[];
  totalItems: number;
  breakdown: {
    storage: number;
    delivery: number;
    total: number;
    hours: number;
  };
}

export interface Porter {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  licenseNumber: string;
  vehicleNumber: string;
  vehicleType: string;
  rating: number;
  totalDeliveries: number;
  joinDate: string;
  verificationStatus: string;
  location?: { latitude: number; longitude: number };
}

const MOCK_PORTERS: Porter[] = [
  {
    id: 'porter1',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    address: '123 Main Street, Andheri West, Mumbai',
    licenseNumber: 'MH1420210045678',
    vehicleNumber: 'MH12AB1234',
    vehicleType: 'Motorcycle',
    rating: 4.8,
    totalDeliveries: 156,
    joinDate: 'December 2024',
    verificationStatus: 'verified',
    location: { latitude: 19.1196, longitude: 72.8469 },
  },
  // Add more mock porters here if needed
];

export const generateBookingNumber = (): string => {
  const prefix = 'DN';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `${prefix}${timestamp}${random}`;
};

export const generateOTP = (): string => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export const calculateDeliveryTime = (pickupTime: Date, storageHours: number): Date => {
  const deliveryTime = new Date(pickupTime);
  deliveryTime.setHours(deliveryTime.getHours() + storageHours + 1); // +1 hour processing
  return deliveryTime;
};

export const assignRandomPorter = (): Porter => {
  const randomIndex = Math.floor(Math.random() * MOCK_PORTERS.length);
  return MOCK_PORTERS[randomIndex];
};

export const processBooking = async (
  userId: string,
  bookingDetails: BookingDetails
): Promise<{ booking: Booking; porter: Porter }> => {
  try {
    const bookingNumber = generateBookingNumber();
    const otp = generateOTP();
    const pickupTime = new Date();
    const deliveryTime = calculateDeliveryTime(pickupTime, bookingDetails.storageHours);

    // Single pricing maintained here
    const bookingData: Partial<Booking> = {
      booking_number: bookingNumber,
      user_id: userId,
      service_type: 'pickup', // fixed service type since self-service removed
      pickup_location: bookingDetails.pickupLocation,
      delivery_location: bookingDetails.deliveryLocation,
      storage_hours: bookingDetails.storageHours,
      status: 'pending',
      total_amount: bookingDetails.breakdown.total,
      storage_fee: bookingDetails.breakdown.storage,
      delivery_fee: bookingDetails.breakdown.delivery,
      pickup_time: pickupTime.toISOString(),
      delivery_time: deliveryTime.toISOString(),
      otp: otp,
    };

    const luggageItemsData: Partial<LuggageItem>[] = bookingDetails.luggageItems.map(item => ({
      luggage_size: item.id as 'small' | 'medium' | 'large' | 'extra-large',
      quantity: item.quantity,
      price_per_hour: item.price,
      total_price: item.price * item.quantity * bookingDetails.storageHours,
    }));

    // Create booking with items and photos
    const booking = await createBooking(bookingData, luggageItemsData, bookingDetails.luggagePhotos);

    // Assign random porter
    const porter = assignRandomPorter();

    // Update booking with porter details & confirm
    await supabase
      .from('bookings')
      .update({
        porter_id: porter.id,
        status: 'confirmed',
        updated_at: new Date().toISOString(),
      })
      .eq('id', booking.id);

    return { booking, porter };
  } catch (error) {
    console.error('Error processing booking:', error);
    throw error;
  }
};

// Other functions unchanged or remove self-service/pickup references if any

export const getBookingsByUser = async (userId: string): Promise<Booking[]> => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        luggage_items(*),
        luggage_photos(*)
      `)
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    throw error;
  }
};

export const updateBookingStatus = async (
  bookingId: string,
  status: Booking['status'],
  additionalData?: Partial<Booking>
): Promise<void> => {
  try {
    const updateData = {
      status,
      updated_at: new Date().toISOString(),
      ...additionalData,
    };

    const { error } = await supabase
      .from('bookings')
      .update(updateData)
      .eq('id', bookingId);

    if (error) throw error;
  } catch (error) {
    console.error('Error updating booking status:', error);
    throw error;
  }
};
