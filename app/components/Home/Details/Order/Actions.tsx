import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { getColors } from '../../../../constants/Colors';

const { width } = Dimensions.get('window');

export default function Actions() {
  const colors = getColors();

  return (
    <View style={[styles.card, { borderColor: colors.borderColor }]}>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.background }]}
        >
          <Text style={[styles.text, { color: colors.primary }]}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.primary }]}
        >
          <Text style={[styles.text, { color: colors.buttonText }]}>Reorder</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.divider, { backgroundColor: colors.borderColor }]} />
      <TouchableOpacity
        style={[styles.rateButton, { borderColor: colors.primary }]}
      >
        <Text style={[styles.text, { color: colors.primary }]}>
          Rate your order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: width * 0.03,
    borderWidth: 1,
    marginVertical: width * 0.02,
    padding: width * 0.04,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  rateButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    borderWidth: 1,
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    marginVertical: 16,
  },
});
