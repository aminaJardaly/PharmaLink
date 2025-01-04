import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface ProgressStepperProps {
  totalSteps: number;
  currentStep: number; // Starts from 1
}

export default function ProgressStepper({ totalSteps, currentStep }: ProgressStepperProps) {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalSteps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.step,
            index + 1 === currentStep ? styles.activeStep : styles.inactiveStep,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, // Spacing between the stepper and other components
  },
  step: {
    width: width * 0.04, // Scales with screen width
    height: width * 0.04,
    borderRadius: width * 0.02, // Makes it circular
    marginHorizontal: 5, // Spacing between dots
  },
  activeStep: {
    backgroundColor: '#009688', // Active step color
  },
  inactiveStep: {
    backgroundColor: '#ccc', // Inactive step color
  },
});
