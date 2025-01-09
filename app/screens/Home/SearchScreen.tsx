import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import BottomNavigationBar from '../../components/Home/BottomNavigationBar'; // Use your existing component
import SearchBar from '../../components/Home/SearchBar'; // Use your existing component
import Header from '../../components/Home/Header'; // Use the Header component
import { getColors } from '../../constants/Colors'; // Get color constants

const { width, height } = Dimensions.get('window');

export default function SearchScreen() {
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header Component */}
      <Header currentPage="search" /> 

      {/* Search Bar */}
      <SearchBar value="" onChangeText={() => {}} />

      {/* Illustration and Message */}
      <View style={styles.middleContent}>
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../../assets/images/Home/search.png')} // Replace with your actual image path
            style={styles.illustration}
            resizeMode="contain"
          />
          <Text style={[styles.message, { color: colors.secondaryText }]}>
            Search for any drugs or pharmacy by simply typing the name in the search box.
          </Text>
        </View>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  middleContent: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  illustrationContainer: {
    alignItems: 'center',
  },
  illustration: {
    width: width * 0.5,
    height: width * 0.5,
  },
  message: {
    fontSize: width * 0.04,
    textAlign: 'center',
    marginTop: height * 0.02,
    paddingHorizontal: width * 0.1,
  },
});
