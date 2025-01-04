import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import BottomNavigationBar from '../../components/Home/BottomNavigationBar';
import OrderCard from '../../components/Home/OrderCard'; // New OrderCard component
import { getColors } from '../../../constants/Colors';

const { width, height } = Dimensions.get('window');

export default function OrdersScreen() {
  const colors = getColors();

  const orders = [
    {
      id: '1',
      name: 'Amoxillin',
      price: '$27',
      pharmacy: 'Crimson Blue Pharmacy',
      rating: 3.5,
      distance: '1.7 KM',
    },
    {
      id: '2',
      name: 'Amoxillin',
      price: '$25',
      pharmacy: 'King Pharmacy',
      rating: 4.1,
      distance: '2.6 KM',
    },
    {
      id: '3',
      name: 'Amoxillin',
      price: '$23',
      pharmacy: 'Green Valley Pharmacy',
      rating: 4.0,
      distance: '3.0 KM',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar value="" onChangeText={() => {}} />

      {/* Results Header */}
      <Text style={[styles.resultsText, { color: colors.text }]}>All results ({orders.length})</Text>

      {/* Order Cards List */}
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <OrderCard
            name={item.name}
            price={item.price}
            pharmacy={item.pharmacy}
            rating={item.rating}
            distance={item.distance}
          />
        )}
        contentContainerStyle={styles.list}
      />

      {/* Footer */}
      <BottomNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultsText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    paddingHorizontal: width * 0.05,
    marginVertical: width * 0.02,
  },
  list: {
    paddingBottom: height * 0.1, // Add padding for the BottomNavigationBar
  },
});
