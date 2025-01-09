import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getColors } from '../../../../constants/Colors';

export default function AddToCart({
  priceLBP,
  quantity,
  setQuantity,
}: {
  priceLBP: number;
  quantity: number;
  setQuantity: (value: number) => void;
}) {
  const colors = getColors();

  return (
    <View style={styles.container}>
      {/* Quantity Selector */}
      <View style={styles.quantitySelector}>
        <TouchableOpacity
          onPress={() => setQuantity(Math.max(1, quantity - 1))}
          style={[styles.button, { borderColor: colors.borderColor }]}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>-</Text>
        </TouchableOpacity>
        <Text style={[styles.quantityText, { color: colors.text }]}>{quantity}</Text>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={[styles.button, { borderColor: colors.borderColor }]}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Add to Cart Button */}
      <TouchableOpacity style={[styles.addButton, { backgroundColor: colors.primary }]}>
        <Text style={[styles.addButtonText, { color: colors.buttonText }]}>
          Add LBP {(priceLBP * quantity).toLocaleString()}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center', // Centers the text horizontally
    justifyContent: 'center', // Centers the text vertically
    width: 40, // Optional: Fixed size for consistency
    height: 40, // Optional: Fixed size for consistency
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 20, // Increased spacing for better appearance
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 12,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
