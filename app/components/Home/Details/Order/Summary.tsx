import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { getColors } from '../../../../constants/Colors';

const { width } = Dimensions.get('window');

export default function Summary({
  subtotal,
  delivery,
}: {
  subtotal: string;
  delivery: string;
}) {
  const colors = getColors();

  return (
    <View style={[styles.card, { borderColor: colors.borderColor }]}>
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.secondaryText }]}>
          Subtotal
        </Text>
        <Text style={[styles.value, { color: colors.text }]}>{subtotal}</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.label, { color: colors.secondaryText }]}>
          Delivery charge
        </Text>
        <Text style={[styles.value, { color: colors.text }]}>{delivery}</Text>
      </View>
      <View style={[styles.divider, { backgroundColor: colors.borderColor }]} />
      <View style={styles.row}>
        <Text style={[styles.totalLabel, { color: colors.text }]}>Total</Text>
        <Text style={[styles.totalValue, { color: colors.primary }]}>
          {parseFloat(subtotal.replace(/[^0-9.-]+/g, '')) +
            parseFloat(delivery.replace(/[^0-9.-]+/g, ''))}
        </Text>
      </View>
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
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  value: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    marginVertical: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
