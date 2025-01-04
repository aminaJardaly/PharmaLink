import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { getColors } from '../../../constants/Colors'; // Import colors from constants

const { width, height } = Dimensions.get('window'); // Get screen dimensions

interface AuthButtonProps {
  title: string;
  onPress: () => void;
}

export default function AuthButton({ title, onPress }: AuthButtonProps) {
  const colors = getColors(); // Get the current theme colors

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: colors.buttonText }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: height * 0.02, // Responsive padding
    borderRadius: width * 0.03, // Responsive border radius
    alignItems: 'center',
    marginTop: height * 0.02, // Responsive margin
    width: width * 0.9, // 90% of the screen width
    alignSelf: 'center', // Center horizontally
  },
  buttonText: {
    fontSize: width * 0.045, // Responsive font size
    fontWeight: '600',
  },
});
