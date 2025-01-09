import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../../components/Home/Header';
import OrderSummary from '../../../components/Home/Details/Order/OrderSummary';
import Actions from '../../../components/Home/Details/Order/Actions';
import OrderItems from '../../../components/Home/Details/Order/OrderItems';
import Summary from '../../../components/Home/Details/Order/Summary';
import BottomNavigationBar from '@/app/components/Home/BottomNavigationBar';
import { getColors } from '../../../constants/Colors';


export default function OrderDetails() {
  const order = {
    name: 'Crimson Blue Pharmacy',
    image: 'https://via.placeholder.com/50',
    date: 'Monday, Jan 1, 2:00 PM',
    address: '123 Main Street, Downtown, 2nd Floor',
    customer: 'John Doe',
    items: [
      {
        name: 'Ibuprofen 200mg',
        quantity: 2,
        size: '20 tablets',
        price: 'LBP 150,000',
        image: 'https://via.placeholder.com/40',
      },
      {
        name: 'Paracetamol 500mg',
        quantity: 1,
        size: '10 tablets',
        price: 'LBP 50,000',
        image: 'https://via.placeholder.com/40',
      },
      {
        name: 'Vitamin C 1000mg',
        quantity: 1,
        size: '30 tablets',
        price: 'LBP 300,000',
        image: 'https://via.placeholder.com/40',
      },
    ],
    subtotal: 'LBP 500,000',
    delivery: 'LBP 30,000',
  };
  const colors = getColors();
  

  return (

      <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header currentPage="OrderDetails" /> 
      <ScrollView>
        <OrderSummary order={order} />
        <Actions />
        <OrderItems items={order.items} />
        <Summary subtotal={order.subtotal} delivery={order.delivery} />
      </ScrollView>
      <BottomNavigationBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
