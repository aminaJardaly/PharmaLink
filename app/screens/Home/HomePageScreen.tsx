import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from '../../components/Home/Header';
import SearchBar from '../../components/Home/SearchBar';
import PharmacyCard from '../../components/Home/PharmacyCard';
import BottomNavigationBar from '../../components/Home/BottomNavigationBar';
import DealsAndNewsSection from '../../components/Home/DealsAndNewsSection';
import { getColors } from '../../constants/Colors'; // Import color theme
import { useRouter } from 'expo-router'; // Import useRouter for navigation

export default function HomeScreen() {
  const colors = getColors(); // Get the current theme colors
  const router = useRouter(); // Initialize router for navigation

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
      name: 'Blue Cross Pharmacy',
      address: '23 Green Avenue, Near Block C, Downtown',
      rating: '4.0',
      hours: { days: 'Mon - Sat', time: '8:00AM - 7:00PM' },
    },
    {
      id: '3',
      name: 'Health First Pharmacy',
      address: '10 Main Street, City Center',
      rating: '4.2',
      hours: { days: 'Daily', time: '8:00AM - 8:00PM' },
    },
    {
      id: '4',
      name: 'Prime Care Pharmacy',
      address: '12 Hilltop Lane, East Side',
      rating: '3.8',
      hours: { days: 'Mon - Fri', time: '9:00AM - 5:00PM' },
    },
    // Add more pharmacies here...
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header currentPage="home" /> 
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
            onPress={() =>
              router.push({
                pathname: '/screens/Home/Details/PharmacyDetails',
                params: {
                  id: item.id,
                  name: item.name,
                  address: item.address,
                  rating: item.rating,
                  hours: `${item.hours.days}, ${item.hours.time}`,
                },
              })
            }
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
