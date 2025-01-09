import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getColors } from '../../constants/Colors'; // Import color theme


const { width, height } = Dimensions.get('window'); // Get screen dimensions

// Define prop types for SearchBar
interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchBar({ value, onChangeText }: SearchBarProps) {
  const colors = getColors();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <MaterialIcons name="search" size={width * 0.06} color={colors.placeholderText} />
      <TextInput
        style={[styles.input, { color: colors.text }]}
        placeholder="Search"
        placeholderTextColor={colors.placeholderText}
        value={value}
        onChangeText={onChangeText}
        keyboardType="default" // Specify keyboard type
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: width * 0.02, // Dynamic border radius
    height: height * 0.05, // Increase height for the search bar
    paddingHorizontal: width * 0.04, // Responsive padding
    marginHorizontal: width * 0.05, // 5% of screen width for horizontal margin
    marginVertical: height * 0.02, // Vertical margin
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    marginLeft: width * 0.03, // Space between icon and input
    flex: 1,
    fontSize: width * 0.04, // Responsive font size
  },
});
