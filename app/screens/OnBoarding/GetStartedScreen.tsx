import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import OnboardingComponent from '../../components/onboarding/OnboardingComponent';
import ProgressStepper from '../../components/onboarding/ProgressStepper'; // Import the ProgressStepper
import { getColors } from '../../../constants/Colors'; // Import color constants

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

export default function GetStartedScreen() {
  const router = useRouter(); // Use router for navigation
  const colors = getColors(); // Get the current theme colors

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Progress Stepper */}
      <ProgressStepper totalSteps={4} currentStep={4} />

      {/* Onboarding Component */}
      <View style={styles.onboardingContainer}>
        <OnboardingComponent
          title="Get Started"
          description="Join PharmaLink today and enjoy convenient access to pharmacies across different locations. Start now!"
          imageSource={require('../../../assets/images/onboarding/pic4.png')} // Replace with your actual image path
        />
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
      <CustomButton title="Login to existing account" onPress={() => router.push('../Auth/LoginScreen')} />
        <View style={styles.spacing} />
        <CustomButton
          title="Register new account"
          variant="outlined"
          onPress={() => router.push('../Auth/SignupScreen')}
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
    marginBottom: height * 0.04, // Add more space at the bottom for the buttons
    width: '100%',
    alignItems: 'center',
  },
  spacing: {
    height: height * 0.02, // Space between the two buttons
  },
});
