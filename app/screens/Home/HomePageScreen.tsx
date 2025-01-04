import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import PharmacyCard from '../../components/Home/PharmacyCard';
import BottomNavigationBar from '../../components/Home/BottomNavigationBar';
import DealsAndNewsSection from '../../components/Home/DealsAndNewsSection';
import { getColors } from '../../../constants/Colors'; // Import color theme

export default function HomeScreen() {
  const colors = getColors(); // Get the current theme colors

  const pharmacies = [
    {
      id: '1',
      name: 'Crimson Blue Pharmacy',
      address: '17 Brown Street, Opposite block D, Wuse main express road',
      rating: '3.5',
      hours: { days: 'Mon - Fri', time: '9:00AM - 6:00PM' },
    },
    {
      id: '2',
      name: 'Crimson Blue Pharmacy',
      address: '17 Brown Street, Opposite block D, Wuse main express road',
      rating: '3.5',
      hours: { days: 'Mon - Fri', time: '9:00AM - 6:00PM' },
    },
    {
      id: '3',
      name: 'Crimson Blue Pharmacy',
      address: '17 Brown Street, Opposite block D, Wuse main express road',
      rating: '3.5',
      hours: { days: 'Mon - Fri', time: '9:00AM - 6:00PM' },
    },
    {
      id: '4',
      name: 'Crimson Blue Pharmacy',
      address: '17 Brown Street, Opposite block D, Wuse main express road',
      rating: '3.5',
      hours: { days: 'Mon - Fri', time: '9:00AM - 6:00PM' },
    },
    // Add more pharmacies here...
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header />
      <SearchBar value="" onChangeText={() => {}} />
      <DealsAndNewsSection />
      <FlatList
        data={pharmacies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PharmacyCard
            name={item.name}
            address={item.address}
            rating={item.rating}
            hours={item.hours}
          />
        )}
        contentContainerStyle={styles.list}
      />
      <BottomNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 80, // Space for the bottom navigation bar
  },
});
