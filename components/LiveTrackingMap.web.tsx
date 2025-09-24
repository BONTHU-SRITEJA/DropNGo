import React from "react";
import { View, Text, Modal, StyleSheet } from "react-native";

export default function LiveTrackingMap({ visible }: { visible: boolean }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.text}>Map placeholder for Web</Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#eee" },
  text: { color: "#666", fontSize: 18 },
});
