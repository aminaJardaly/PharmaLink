import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { getColors } from '../../../../../constants/Colors';

const { width } = Dimensions.get('window');

export default function ProductInfo({
  image,
  name,
  priceLBP,
  priceUSD,
  unit,
}: {
  image: string;
  name: string;
  priceLBP: number;
  priceUSD: number;
  unit: string;
}) {
  const colors = getColors();

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.priceRow}>
          <Text style={[styles.priceLBP, { color: colors.text }]}>
            LBP {priceLBP.toLocaleString()}
          </Text>
          <Text style={[styles.priceUSD, { color: colors.secondaryText }]}>
            USD {priceUSD.toFixed(3)}
          </Text>
        </View>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.unit, { color: colors.secondaryText }]}>
          {unit}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: width * 0.8,
    height: width * 0.5,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  details: {
    alignItems: 'center',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 8,
  },
  priceLBP: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceUSD: {
    fontSize: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  unit: {
    fontSize: 14,
  },
});
