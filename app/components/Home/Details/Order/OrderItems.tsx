import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { getColors } from '../../../../constants/Colors';

const { width } = Dimensions.get('window');

export default function OrderItems({ items }: { items: any[] }) {
  const colors = getColors();

  return (
    <View style={styles.wrapper}>
      <Text style={[styles.title, { color: colors.text }]}>Your Order</Text>
      {items.map((item, index) => (
        <View
          key={index}
          style={[styles.card, { borderColor: colors.borderColor }]}
        >
          {/* Product Image */}
          <Image source={{ uri: item.image }} style={styles.image} />

          {/* Product Details */}
          <View style={styles.details}>
            <Text style={[styles.name, { color: colors.text }]}>{item.name}</Text>
            <Text style={[styles.quantity, { color: colors.secondaryText }]}>
              {item.quantity}x {item.size}
            </Text>
          </View>

          {/* Price */}
          <Text style={[styles.price, { color: colors.primary }]}>
            {item.price}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 16,
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: width * 0.03,
    padding: width * 0.03,
    marginBottom: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 14,
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
