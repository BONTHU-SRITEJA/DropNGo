import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

interface Props {
  visible: boolean;
  onClose: () => void;
  booking: {
    id: string;
    status: string;
    pickupTime: string;
    deliveryTime: string;
    porterName: string;
    porterPhone: string;
    porterRating: number;
    currentLocation: string;
    pickupLocation: { latitude: number; longitude: number };
    deliveryLocation: { latitude: number; longitude: number };
  };
}

export default function BookingDetailsModal({ visible, onClose, booking }: Props) {
  if (!booking) return null;

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Booking #{booking.id}</Text>

        <View style={styles.section}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.value}>{booking.status}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Pickup Time</Text>
          <Text style={styles.value}>{booking.pickupTime}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Delivery Time</Text>
          <Text style={styles.value}>{booking.deliveryTime}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Porter</Text>
          <Text style={styles.value}>
            {booking.porterName} ({booking.porterRating}⭐)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>{booking.porterPhone}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>Current Location</Text>
          <Text style={styles.value}>{booking.currentLocation}</Text>
        </View>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>Close</Text>
        </TouchableOpacity>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  section: { marginBottom: 15 },
  label: { fontSize: 14, color: '#6B7280' },
  value: { fontSize: 16, fontWeight: '600', color: '#111827' },
  closeButton: {
    marginTop: 30,
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
