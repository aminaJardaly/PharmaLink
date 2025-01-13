import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { getColors } from '../../constants/Colors';

const { width } = Dimensions.get('window');

export default function OptionRow({
  label,
  onPress,
  showArrow = true,
}: {
  label: string;
  onPress: () => void;
  showArrow?: boolean;
}) {
  const colors = getColors();

  return (
    <TouchableOpacity style={styles.optionRow} onPress={onPress}>
      <Text style={[styles.optionText, { color: colors.text }]}>{label}</Text>
      {showArrow && (
        <MaterialIcons name="keyboard-arrow-right" size={24} color={colors.primary} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: width * 0.04,
    paddingHorizontal: width * 0.05,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    fontSize: width * 0.04,
  },
});
