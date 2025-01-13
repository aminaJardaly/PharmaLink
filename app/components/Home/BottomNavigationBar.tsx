import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { useRouter, usePathname } from 'expo-router'; // Import `usePathname` for current route
import { getColors } from '../../constants/Colors'; // Import color theme
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'; // Import icons

const { width, height } = Dimensions.get('window'); // For responsive design

export default function BottomNavigationBar() {
  const router = useRouter(); // Navigation hook
  const pathname = usePathname(); // Get the current path
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Home */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/HomePageScreen')}
      >
        <Feather
          name="home"
          size={width * 0.06}
          color={pathname === '/screens/Home/HomePageScreen' ? colors.primary : colors.iconColor}
        />
        <Text
          style={[
            styles.menuText,
            { color: pathname === '/screens/Home/HomePageScreen' ? colors.primary : colors.iconColor },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      {/* Search */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/SearchScreen')}
      >
        <Ionicons
          name="search"
          size={width * 0.06}
          color={pathname === '/screens/Home/SearchScreen' ? colors.primary : colors.iconColor}
        />
        <Text
          style={[
            styles.menuText,
            { color: pathname === '/screens/Home/SearchScreen' ? colors.primary : colors.iconColor },
          ]}
        >
          Search
        </Text>
      </TouchableOpacity>

      {/* Scan */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/ScanScreen')}
      >
        <MaterialCommunityIcons
          name="data-matrix-scan"
          size={width * 0.06}
          color={pathname === '/screens/Home/ScanScreen' ? colors.primary : colors.iconColor}
        />
        <Text
          style={[
            styles.menuText,
            { color: pathname === '/screens/Home/ScanScreen' ? colors.primary : colors.iconColor },
          ]}
        >
          Scan
        </Text>
      </TouchableOpacity>

      {/* Orders */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/OrdersScreen')}
      >
        <MaterialCommunityIcons
          name="order-bool-ascending-variant"
          size={width * 0.06}
          color={pathname === '/screens/Home/OrdersScreen' ? colors.primary : colors.iconColor}
        />
        <Text
          style={[
            styles.menuText,
            { color: pathname === '/screens/Home/OrdersScreen' ? colors.primary : colors.iconColor },
          ]}
        >
          Orders
        </Text>
      </TouchableOpacity>

      {/* Account */}
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => router.push('/screens/Home/account/AccountScreen')}
      >
        <Feather
          name="user"
          size={width * 0.06}
          color={pathname === '/screens/Home/account/AccountScreen' ? colors.primary : colors.iconColor}
        />
        <Text
          style={[
            styles.menuText,
            { color: pathname === '/screens/Home/account/AccountScreen' ? colors.primary : colors.iconColor },
          ]}
        >
          Account
        </Text>
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
