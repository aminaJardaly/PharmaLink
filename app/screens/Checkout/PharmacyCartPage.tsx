import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  FlatList,
  Dimensions,
} from 'react-native';
import { getColors } from '../../constants/Colors';
import { useRouter } from 'expo-router';
import CartItem from '../../components/checkout/CartItem'; // Import CartItem component

const { width } = Dimensions.get('window');

export default function PharmacyCartPage() {
  const colors = getColors();
  const router = useRouter();

  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Ibuprofen',
      price: 'LBP 150,000',
      image: 'https://via.placeholder.com/50',
      quantity: 1,
    },
    {
      id: '2',
      name: 'Paracetamol',
      price: 'LBP 200,000',
      image: 'https://via.placeholder.com/50',
      quantity: 2,
    },
    {
      id: '3',
      name: 'Vitamin C',
      price: 'LBP 120,000',
      image: 'https://via.placeholder.com/50',
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleCheckout = () => {
    console.log('Proceed to checkout');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={[styles.backText, { color: colors.primary }]}>Back to store</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: colors.text }]}>My Cart</Text>
      </View>

      {/* Cart Items Section */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            onIncrease={() => handleQuantityChange(item.id, 1)}
            onDecrease={() => handleQuantityChange(item.id, -1)}
          />
        )}
        contentContainerStyle={styles.cartList}
      />

      {/* No Cutlery Toggle */}
      <View style={styles.cutleryToggle}>
        <Switch value={false} onValueChange={() => {}} />
        <Text style={[styles.cutleryText, { color: colors.text }]}>Please do not send cutlery</Text>
      </View>

      {/* Checkout Section */}
      <View style={styles.checkoutContainer}>
        <TouchableOpacity
          style={[styles.checkoutButton, { backgroundColor: colors.primary }]}
          onPress={handleCheckout}
        >
          <Text style={[styles.checkoutText, { color: colors.buttonText }]}>Go to checkout</Text>
          <Text style={[styles.checkoutTotal, { color: colors.buttonText }]}>LBP 470,000</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  backText: {
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartList: {
    paddingHorizontal: 16,
  },
  cutleryToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  cutleryText: {
    marginLeft: 8,
    fontSize: 14,
  },
  checkoutContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  checkoutButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
  },
  checkoutText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutTotal: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
