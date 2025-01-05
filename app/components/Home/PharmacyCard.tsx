import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getColors } from '../../../constants/Colors';

const { width } = Dimensions.get('window'); // Get screen width for responsiveness

// Define prop types for PharmacyCard
interface PharmacyCardProps {
  name: string;
  address: string;
  rating: string;
  hours: {
    days: string;
    time: string;
  };
  onPress: () => void; // Add onPress prop for navigation
}

export default function PharmacyCard({ name, address, rating, hours, onPress }: PharmacyCardProps) {
  const colors = getColors();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: colors.background, borderColor: colors.borderColor }]}
      onPress={onPress} // Trigger navigation on press
    >
      <Image
        source={require('../../../assets/images/Home/pharmacy.jpg')} // Replace with your image path
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={16} color="#FFD700" />
          <Text style={[styles.rating, { color: colors.text }]}>{rating}</Text>
        </View>
        <View style={styles.hoursContainer}>
          <Text style={[styles.hours, { color: colors.text }]}>{hours.days.toUpperCase()}</Text>
          <Text style={[styles.hours, { color: colors.text }]}>OPEN FROM: {hours.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: width * 0.03, // Vertical margin based on screen width
    marginHorizontal: width * 0.05, // Horizontal margin based on screen width
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1, // Add border
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '90%', // Card width relative to the screen
    alignSelf: 'center', // Center the card
  },
  image: {
    width: '100%',
    height: width * 0.4, // Image height proportional to screen width
  },
  content: {
    padding: width * 0.04, // Padding proportional to screen width
  },
  name: {
    fontSize: width * 0.045, // Font size proportional to screen width
    fontWeight: 'bold',
    marginBottom: width * 0.02,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.02,
  },
  rating: {
    marginLeft: width * 0.02,
    fontSize: width * 0.04, // Font size proportional to screen width
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hours: {
    fontSize: width * 0.035, // Font size proportional to screen width
    fontWeight: '600',
  },
});
