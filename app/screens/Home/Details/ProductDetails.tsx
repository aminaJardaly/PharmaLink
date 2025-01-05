import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { getColors } from '../../../../constants/Colors';

export default function ProductDetails({ route }: any) {
  const { product } = route.params; // Access product details from the route
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        {/* Product Image */}
        <Image source={{ uri: product.image }} style={styles.image} />

        {/* Product Details */}
        <View style={styles.details}>
          <Text style={[styles.name, { color: colors.text }]}>{product.name}</Text>
          <Text style={[styles.price, { color: colors.primary }]}>
            LBP {product.price.toLocaleString()}
          </Text>
          <Text style={[styles.category, { color: colors.secondaryText }]}>
            Category: {product.category}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  details: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  category: {
    fontSize: 16,
  },
});
