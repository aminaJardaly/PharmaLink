import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../../../components/Home/Header';
import CardWithOptions from '../../../components/Home/CardWithOptions';
import { getColors } from '../../../constants/Colors';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

export default function SettingsScreen() {
  const colors = getColors();

  const PharmaCashOptions = [
    { label: 'LBP Balance', value: 'LBP 0', icon: <FontAwesome5 name="flag" size={20} color={colors.primary} /> },
    { label: 'USD Balance', value: 'USD 0.00', icon: <FontAwesome5 name="flag-usa" size={20} color={colors.primary} /> },
  ];

  const promotionsOptions = [
    { label: 'Credits', value: 'LBP 9,750', icon: <MaterialIcons name="credit-card" size={20} color={colors.primary} /> },
    { label: 'Add Promo Code', icon: <MaterialIcons name="add" size={20} color={colors.primary} /> },
    { label: 'Store Rewards', icon: <MaterialIcons name="stars" size={20} color={colors.primary} /> },
  ];

  const accountDetailsOptions = [
    { label: 'Notifications', icon: <MaterialIcons name="notifications" size={20} color={colors.primary} /> },
    { label: 'Addresses', icon: <MaterialIcons name="location-on" size={20} color={colors.primary} /> },
    { label: 'Favorites', icon: <MaterialIcons name="favorite" size={20} color={colors.primary} /> },
    { label: 'Preferences', icon: <MaterialIcons name="settings" size={20} color={colors.primary} /> },
    { label: 'Refer a friend', icon: <MaterialIcons name="person-add" size={20} color={colors.primary} /> },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Header currentPage="Settings" />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cards with Options */}
        <CardWithOptions title="Promotions" options={promotionsOptions} />
        <CardWithOptions title="Account Details" options={accountDetailsOptions} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});
