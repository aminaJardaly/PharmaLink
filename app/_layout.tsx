import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Stack } from "expo-router";
import { getColors } from './constants/Colors'; // Import colors from constants

export default function Layout() {
  const colors = getColors(); // Get current theme colors

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: colors.background }]}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingBottom: 20, // Add a bottom margin so content doesn't reach the edge
    paddingHorizontal: 10, // Optional horizontal padding for consistency
  },
});
