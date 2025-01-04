import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { getColors } from '../../constants/Colors'; // Import the colors file

const { width, height } = Dimensions.get('window'); // Get screen dimensions

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'default' | 'outlined'; // Add a variant prop
}

export default function CustomButton({ title, onPress, variant = 'default' }: CustomButtonProps) {
  const colors = getColors(); // Get the current theme colors

  // Determine styles based on the variant
  const buttonStyle =
    variant === 'outlined'
      ? [styles.buttonOutlined, { borderColor: colors.primary, backgroundColor: colors.background }]
      : [styles.button, { backgroundColor: colors.primary }];

  const textStyle =
    variant === 'outlined'
      ? [styles.buttonTextOutlined, { color: colors.primary }]
      : [styles.buttonText, { color: colors.buttonText }];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: height * 0.022,
    paddingHorizontal: width * 0.05,
    borderRadius: width * 0.05,
    alignItems: 'center',
    width: width * 0.9,
    marginTop: height * 0.02,
  },
  buttonOutlined: {
    paddingVertical: height * 0.025,
    paddingHorizontal: width * 0.05,
    borderRadius: width * 0.05,
    alignItems: 'center',
    width: width * 0.9,
    marginTop: height * 0.02,
    borderWidth: 2, // Add a border for outlined variant
  },
  buttonText: {
    fontSize: width * 0.045,
    fontWeight: '600',
  },
  buttonTextOutlined: {
    fontSize: width * 0.045,
    fontWeight: '600',
  },
});
