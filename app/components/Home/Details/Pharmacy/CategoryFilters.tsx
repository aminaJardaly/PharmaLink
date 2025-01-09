import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { getColors } from '../../../../constants/Colors';

export default function CategoryFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
}: {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}) {
  const colors = getColors(); // Get theme colors

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.category,
            { backgroundColor: colors.background }, // Default background color
            selectedCategory === category && { backgroundColor: colors.primary }, // Selected category background color
          ]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text
            style={[
              styles.text,
              { color: colors.text }, // Default text color
              selectedCategory === category && { color: colors.buttonText }, // Selected category text color
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  category: {
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});
