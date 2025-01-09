import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getColors } from '../../../../constants/Colors';

export default function Description({ description }: { description: string }) {
  const colors = getColors();

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Details</Text>
      <Text style={[styles.text, { color: colors.secondaryText }]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
  },
});
