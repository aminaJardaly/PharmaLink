import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { getColors } from '../../../constants/Colors'; // Import color theme
import {Feather} from '@expo/vector-icons'; // Import Feather icons
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import {MaterialCommunityIcons} from '@expo/vector-icons'




const { width, height } = Dimensions.get('window'); // For responsive design

export default function BottomNavigationBar() {
  const router = useRouter(); // Navigation hook
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Home */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/HomePageScreen')}
      >
      <Feather name="home" size={width * 0.06} color={colors.iconColor} />
      <Text style={[styles.menuText, { color: colors.iconColor }]}>Home</Text>
      </TouchableOpacity>

      {/* Search */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/SearchScreen')}
      >
      <Ionicons name="search" size={width * 0.06} color={colors.iconColor} />
      <Text style={[styles.menuText, { color: colors.iconColor }]}>Search</Text>
      </TouchableOpacity>

      {/* Scan */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/HomePageScreen')}
      >
      <MaterialCommunityIcons name="data-matrix-scan" size={width * 0.06} color={colors.iconColor} />
      <Text style={[styles.menuText, { color: colors.iconColor }]}>Scan</Text>
      </TouchableOpacity>

      {/* Orders */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/OrdersScreen')}
      >
      <MaterialCommunityIcons name="order-bool-ascending-variant" size={width * 0.06} color={colors.iconColor} />
      <Text style={[styles.menuText, { color: colors.iconColor }]}>Orders</Text>
      </TouchableOpacity>

      {/* Account */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/AccountScreen')}
      >
      <Feather name="user" size={width * 0.06} color={colors.iconColor} />
      <Text style={[styles.menuText, { color: colors.iconColor }]}>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: height * 0.015, // Adjust padding for responsiveness
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: height * 0.015, // Adjust font size for responsiveness
    marginTop: height * 0.01, // Adjust spacing for responsiveness
    fontWeight: '600',
    textAlign: 'center',
  },
});
