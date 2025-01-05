import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getColors } from '../../../../../constants/Colors';

export default function ProductItem({
  name,
  price,
  image,
}: {
  name: string;
  price: number;
  image: string;
}) {
  const [quantity, setQuantity] = useState(0);
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background, borderColor: colors.borderColor }]}>
      {/* Product Image */}
      <Image source={{ uri: image }} style={styles.image} />

      {/* Product Details */}
      <View style={styles.details}>
        <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
        <Text style={[styles.price, { color: colors.primary }]}>${price}</Text>
      </View>

      {/* Quantity Controls */}
      <View style={styles.controls}>
        <TouchableOpacity onPress={() => setQuantity(Math.max(0, quantity - 1))}>
          <Text style={[styles.controlButton, { color: colors.primary }]}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.quantity, { color: colors.text }]}>{quantity}</Text>
        <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
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
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 50, // Adjust width for the product image
    height: 50, // Adjust height for the product image
    borderRadius: 5, // Rounded corners for the image
    marginRight: 10, // Space between image and details
  },
  details: {
    flex: 1, // Take up remaining space
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    marginTop: 4,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    fontSize: 18,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
    fontWeight: '500',
  },
});
