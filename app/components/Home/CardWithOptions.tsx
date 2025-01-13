import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { getColors } from '../../constants/Colors';

const { width } = Dimensions.get('window');

export default function CardWithOptions({
  title,
  options,
}: {
  title: string;
  options: { label: string; value?: string; icon?: React.ReactNode; onPress?: () => void }[];
}) {
  const colors = getColors();

  return (
    <View style={[styles.card, { backgroundColor: colors.cardBackground, borderColor: colors.borderColor }]}>
      <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionRow,
            index === options.length - 1 && { borderBottomWidth: 0 }, // Remove separator for the last row
          ]}
          onPress={option.onPress}
        >
          {option.icon && <View style={styles.icon}>{option.icon}</View>}
          <Text style={[styles.label, { color: colors.text }]}>{option.label}</Text>
          {option.value && (
            <Text style={[styles.value, { color: colors.secondaryText }]}>{option.value}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: width * 0.03,
    borderWidth: 1,
    marginVertical: width * 0.03,
    padding: width * 0.05,
  },
  title: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: width * 0.04,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  icon: {
    marginRight: width * 0.03,
  },
  label: {
    fontSize: width * 0.04,
    flex: 1,
  },
  value: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});
