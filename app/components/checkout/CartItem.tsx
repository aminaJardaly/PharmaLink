import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { getColors } from '../../constants/Colors';

export default function CartItem({
  name,
  price,
  image,
  quantity,
  onIncrease,
  onDecrease,
}: {
  name: string;
  price: string;
  image: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  const colors = getColors();

  return (
    <View style={[styles.container, { borderColor: colors.borderColor }]}>
      {/* Product Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.price, { color: colors.primary }]}>{price}</Text>
      </View>

      {/* Quantity Controls */}
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={onDecrease}>
          <Text style={[styles.controlButton, { color: colors.primary }]}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.quantityText, { color: colors.text }]}>{quantity}</Text>
        <TouchableOpacity onPress={onIncrease}>
          <Text style={[styles.controlButton, { color: colors.primary }]}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
