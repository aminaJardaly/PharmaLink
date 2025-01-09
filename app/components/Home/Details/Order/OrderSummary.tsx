import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getColors } from '../../../../constants/Colors';

const { width } = Dimensions.get('window');

export default function OrderSummary({ order }: { order: any }) {
  const colors = getColors();

  return (
    <View style={[styles.card, { borderColor: colors.borderColor }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image source={{ uri: order.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={[styles.name, { color: colors.text }]}>{order.name}</Text>
          <Text style={[styles.detail, { color: colors.secondaryText }]}>
            Delivered on: {order.date}
          </Text>
        </View>
      </View>

      {/* Divider */}
      <View style={[styles.divider, { backgroundColor: colors.borderColor }]} />

      {/* Details Section */}
      <View style={styles.details}>
        <View style={styles.row}>
          <MaterialIcons name="location-on" size={20} color={colors.primary} />
          <Text style={[styles.detail, { color: colors.secondaryText }]}>{order.address}</Text>
        </View>
        <View style={styles.row}>
          <MaterialIcons name="person" size={20} color={colors.primary} />
          <Text style={[styles.detail, { color: colors.secondaryText }]}>{order.customer}</Text>
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
    alignItems: 'center',
    marginBottom: width * 0.03,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: width * 0.035,
  },
  divider: {
    height: 1,
    marginVertical: width * 0.03,
  },
  details: {
    marginTop: width * 0.02,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.02,
  },
});
