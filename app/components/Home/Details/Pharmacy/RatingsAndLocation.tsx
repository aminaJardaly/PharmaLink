import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function RatingsAndLocation({ rating, location }: { rating: string; location: string }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <MaterialIcons name="star" size={16} color="gold" />
        <Text style={styles.text}>{rating}</Text>
      </View>
      <View style={styles.item}>
        <Ionicons name="location-outline" size={16} color="red" />
        <Text style={styles.text}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
    fontSize: 14,
  },
});
