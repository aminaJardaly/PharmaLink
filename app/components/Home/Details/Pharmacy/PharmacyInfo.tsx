import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { getColors } from '../../../../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get screen width for responsiveness

export default function PharmacyInfo({
  name,
  address,
  rating,
  location,
}: {
  name: string;
  address: string;
  rating: string;
  location: string;
}) {
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Pharmacy Image */}
      <Image
        source={require('../../../../../assets/images/Home/pharmacy.jpg')} // Replace with your pharmacy image
        style={styles.image}
      />

      {/* Pharmacy Details */}
      <View style={styles.infoContainer}>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.address, { color: colors.secondaryText }]}>{address}</Text>

        <View style={styles.metaContainer}>
          {/* Rating Section */}
          <View style={styles.metaItem}>
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={[styles.metaText, { color: colors.text }]}>{rating}</Text>
          </View>

          {/* Location Section */}
          <View style={styles.metaItem}>
            <MaterialIcons name="location-on" size={16} color={colors.primary} />
            <Text style={[styles.metaText, { color: colors.text }]}>{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 1, // Add border width
    borderColor: '#E0E0E0', // Add border color (adjust as needed for theme)
    backgroundColor: '#FFFFFF', // Set background explicitly
  },
  image: {
    width: '100%',
    height: width * 0.5, // Image height proportional to screen width
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 16,
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
  },
  metaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    marginLeft: 6,
    fontSize: 14,
  },
});

