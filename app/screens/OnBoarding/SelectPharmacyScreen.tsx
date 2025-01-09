import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../../components/CustomButton';
import OnboardingComponent from '../../components/onboarding/OnboardingComponent';
import ProgressStepper from '../../components/onboarding/ProgressStepper'; // Import the ProgressStepper
import { getColors } from '../../constants/Colors'; // Import the color constants

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

export default function SelectPharmacyScreen() {
  const router = useRouter();
  const colors = getColors(); // Get the current theme colors

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Progress Stepper */}
      <ProgressStepper totalSteps={4} currentStep={2} />

      {/* Onboarding Component */}
      <View style={styles.onboardingContainer}>
        <OnboardingComponent
          title="Select Pharmacy"
          description="Pick the pharmacy that suits you best. We've got trusted options and reliable options in our network."
          imageSource={require('../../../assets/images/onboarding/pic2.png')} // Replace with your actual image path
        />
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Continue"
          onPress={() => router.push('/screens/OnBoarding/PharmacyManagementScreen')}
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
