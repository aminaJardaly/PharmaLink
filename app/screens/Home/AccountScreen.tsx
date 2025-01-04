import React from 'react';
import { View, StyleSheet } from 'react-native';
import BottomNavigationBar from '../../components/Home/BottomNavigationBar'; // Footer component
import Header from '../../components/Home/Header'; // Header component
import ProfileSection from '../../components/Home/ProfileSection'; // Profile Section
import OptionsSection from '../../components/Home/OptionsSection'; // Options Section
import { getColors } from '../../../constants/Colors'; // Colors
import {AntDesign} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons'; // Import MaterialIcons
import {Feather} from '@expo/vector-icons'; // Import Feather

export default function AccountScreen() {
  const colors = getColors();

  const options = [
    {
      title: 'Personal details',
      icon: <AntDesign name="user" size={20} color={colors.primary} />,
      onPress: () => console.log('Personal details'),
    },
    {
      title: 'Payments',
      icon: <MaterialIcons name="payment" size={20} color={colors.primary} />,
      onPress: () => console.log('Payments'),
    },
    {
      title: 'Settings',
      icon: <AntDesign name="setting" size={20} color={colors.primary} />,
      onPress: () => console.log('Settings'),
    },
    {
      title: 'Support',
      icon: <Feather name="headphones" size={20} color={colors.primary} />,
      onPress: () => console.log('Support'),
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Header />

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <ProfileSection
          imageSource={require('../../../assets/images/Home/profile.jpg')} // Replace with profile image
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
