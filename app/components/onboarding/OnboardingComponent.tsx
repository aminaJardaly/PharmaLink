import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

interface OnboardingComponentProps {
  title: string;
  description: string;
  imageSource: any; // Accept the image source
}

export default function OnboardingComponent({ title, description, imageSource }: OnboardingComponentProps) {
  return (
    <View style={styles.container}>
      {/* Title and Description */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </View>

      {/* Image */}
      <Image source={imageSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Center horizontally
    marginBottom: height * 0.03, // Margin between this component and other elements
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: height * 0.02, // Spacing between text and image
  },
  title: {
    fontSize: width * 0.06, // Scales with screen width
    fontWeight: 'bold',
    marginBottom: height * 0.01, // 1% of screen height for spacing
  },
  subtitle: {
    fontSize: width * 0.045, // Scales with screen width
    textAlign: 'center',
    color: '#666',
  },
  image: {
    width: width * 0.7, // 70% of screen width
    height: height * 0.3, // 30% of screen height
    resizeMode: 'contain',
  },
});
