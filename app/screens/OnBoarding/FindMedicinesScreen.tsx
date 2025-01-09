import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import OnboardingComponent from '../../components/onboarding/OnboardingComponent';
import ProgressStepper from '../../components/onboarding/ProgressStepper'; // Import the ProgressStepper
import { getColors } from '../../constants/Colors'; // Import colors from constants

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

export default function FindMedicinesScreen() {
  const router = useRouter();
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Progress Stepper */}
      <ProgressStepper totalSteps={4} currentStep={1} />

      {/* Onboarding Component */}
      <View style={styles.onboardingContainer}>
        <OnboardingComponent
          title="Find Medicines"
          description="Easily find your prescribed medicines from a variety of registered pharmacies, no matter where you are."
          imageSource={require('../../../assets/images/onboarding/pic1.png')} // Add your actual image in the assets folder
        />
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Continue"
          onPress={() => router.push('/screens/OnBoarding/SelectPharmacyScreen')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', // Space content evenly
    alignItems: 'center', // Center horizontally
    paddingHorizontal: width * 0.05, // 5% horizontal padding
    paddingVertical: height * 0.03, // Add vertical padding
  },
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center', // Center content vertically within this section
    alignItems: 'center', // Center content horizontally
    marginVertical: height * 0.02, // Add vertical spacing around the component
  },
  buttonContainer: {
    marginBottom: height * 0.04, // Add more space at the bottom for the button
    width: '100%',
    alignItems: 'center',
  },
});
