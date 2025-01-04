import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardTypeOptions, // Import KeyboardTypeOptions type
} from 'react-native';
import { getColors } from '../../../constants/Colors'; // Import color theme
import { MaterialIcons } from '@expo/vector-icons'; // Import icons for show/hide functionality

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

interface InputFieldProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?: KeyboardTypeOptions; // Use KeyboardTypeOptions instead of string
}

export default function InputField({
  label,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  keyboardType = 'default', // Default to 'default' keyboard type
}: InputFieldProps) {
  const colors = getColors();
  const [labelPosition] = useState(new Animated.Value(20)); // Start hidden inside the input field
  const [labelOpacity] = useState(new Animated.Value(0)); // Start fully transparent
  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry); // Toggle password visibility

  const handleFocus = () => {
    if (value.length > 0) {
      animateLabel(-12, 1); // Show label on the border if there is input
    }
  };

  const handleBlur = () => {
    if (value.length === 0) {
      animateLabel(20, 0); // Hide label if the input is empty
    }
  };

  const handleChangeText = (text: string) => {
    onChangeText(text);
    if (text.length > 0) {
      animateLabel(-12, 1); // Show label on the border when typing starts
    } else {
      animateLabel(20, 0); // Hide label when input is cleared
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const animateLabel = (position: number, opacity: number) => {
    Animated.parallel([
      Animated.timing(labelPosition, {
        toValue: position,
        duration: 150,
        useNativeDriver: false,
      }),
      Animated.timing(labelOpacity, {
        toValue: opacity,
        duration: 150,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Animated.Text
          style={[
            styles.label,
            {
              top: labelPosition,
              opacity: labelOpacity,
              color: colors.primary,
              backgroundColor: colors.background,
            },
          ]}
        >
          {label}
        </Animated.Text>
        <View>
          <TextInput
            style={[
              styles.input,
              {
                borderColor: value.length > 0 ? colors.primary : colors.borderColor,
                color: colors.text,
                backgroundColor: colors.background,
                paddingRight: width * 0.15, // Adjust for toggle button
              },
            ]}
            placeholder={placeholder}
            placeholderTextColor={colors.placeholderText}
            secureTextEntry={!isPasswordVisible && secureTextEntry}
            value={value}
            onChangeText={handleChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            keyboardType={keyboardType} // Pass keyboardType to TextInput
          />
          {secureTextEntry && (
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={togglePasswordVisibility}
            >
              <MaterialIcons
                name={isPasswordVisible ? 'visibility' : 'visibility-off'}
                size={24}
                color={colors.primary}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: height * 0.02, // Dynamic margin between fields
    position: 'relative',
    width: '100%',
  },
  input: {
    borderWidth: 1.5,
    borderRadius: width * 0.03,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.04,
    fontSize: width * 0.045,
    width: width * 0.85, // 85% of screen width
    alignSelf: 'center',
  },
  label: {
    position: 'absolute',
    left: width * 0.04,
    zIndex: 1,
    paddingHorizontal: 5,
    fontSize: width * 0.035,
  },
  toggleButton: {
    position: 'absolute',
    right: width * 0.06,
    top: '50%',
    transform: [{ translateY: -12 }],
  },
});
