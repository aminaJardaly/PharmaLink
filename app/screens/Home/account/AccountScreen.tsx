import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigationBar from '../../../components/Home/BottomNavigationBar'; // Footer component
import Header from '../../../components/Home/Header'; // Header component
import ProfileSection from '../../../components/Home/ProfileSection'; // Profile Section
import OptionsSection from '../../../components/Home/OptionsSection'; // Options Section
import { getColors } from '../../../constants/Colors'; // Colors
import {AntDesign} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons'; // Import MaterialIcons
import {Feather} from '@expo/vector-icons'; // Import Feather
import { useRouter } from 'expo-router'; // Add this import to handle navigation


export default function AccountScreen() {
  const colors = getColors();
  const router = useRouter();

  const options = [
    {
      title: 'Personal details',
      icon: <AntDesign name="user" size={20} color={colors.primary} />,
      onPress: () => router.push('./PersonalDetailsScreen'), // Navigate to PersonalDetailsScreen
    },
    {
      title: 'Payments',
      icon: <MaterialIcons name="payment" size={20} color={colors.primary} />,
      onPress: () => router.push('./PaymentsScreen'), // Navigate to PaymentsScreen
    },
    {
      title: 'Settings',
      icon: <AntDesign name="setting" size={20} color={colors.primary} />,
      onPress: () => router.push('./SettingsScreen'), // Navigate to SettingsScreen
    },
    {
      title: 'Support',
      icon: <Feather name="headphones" size={20} color={colors.primary} />,
      onPress: () => router.push('./SupportScreen'), // Navigate to SupportScreen
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Header currentPage="account" /> 

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <ProfileSection
          imageSource={require('../../../../assets/images/Home/profile1.jpg')} // Replace with profile image
          name="Sanni Muiz"
          email="muizsanni99@gmail.com"
          onEditPress={() => console.log('Edit Profile')}
        />
      </View>

      {/* Options Section */}
      <OptionsSection options={options} />

      {/* Footer */}
      <BottomNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  profileContainer: {
    marginTop: -50, // Move the ProfileSection up
  },
});
