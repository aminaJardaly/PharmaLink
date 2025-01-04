import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getColors } from '../../../constants/Colors';

const { width, height } = Dimensions.get('window');

interface OrderCardProps {
  name: string;
  price: string;
  pharmacy: string;
  rating: number;
  distance: string;
}

export default function OrderCard({
  name,
  price,
  pharmacy,
  rating,
  distance,
}: OrderCardProps) {
  const colors = getColors();

  return (
    <View style={[styles.card, { borderColor: colors.borderColor }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.price, { color: colors.primary }]}>{price}</Text>
      </View>

      {/* Divider */}
      <View style={[styles.divider, { backgroundColor: colors.borderColor }]} />

      {/* Details Section */}
      <View style={styles.details}>
        <Text style={[styles.pharmacy, { color: colors.secondaryText }]}>{pharmacy}</Text>
        <View style={styles.infoRow}>
          <View style={[styles.distanceContainer, { backgroundColor: colors.primary + '15' }]}>
            <MaterialIcons name="location-on" size={16} color={colors.primary} />
            <Text style={[styles.distanceText, { color: colors.primary }]}>{distance}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={16} color="#FFD700" />
            <Text style={[styles.ratingText, { color: colors.text }]}>{rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: width * 0.03,
    borderWidth: 1,
    marginVertical: width * 0.02,
    padding: width * 0.04,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  price: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    marginVertical: width * 0.03,
  },
  details: {
    marginTop: width * 0.02,
  },
  pharmacy: {
    fontSize: width * 0.04,
    marginBottom: width * 0.02,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: width * 0.02,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.015,
  },
  distanceText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.035,
    fontWeight: '600',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: width * 0.02,
    fontSize: width * 0.035,
    fontWeight: '600',
  },
});
