import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { getColors } from '../../constants/Colors'; // Colors
import {Feather} from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

interface OptionsSectionProps {
  options: { title: string; icon: JSX.Element; onPress: () => void }[]; // Icon is JSX.Element
}

export default function OptionsSection({ options }: OptionsSectionProps) {
  const colors = getColors();

  return (
    <View style={[styles.cardContainer, { backgroundColor: colors.background }]}>
      <View style={styles.optionsContainer}>
        {options.map((item, index) => (
          <View key={index}>
            <TouchableOpacity style={styles.optionRow} onPress={item.onPress}>
              <View
                style={[
                  styles.iconWrapper,
                  { backgroundColor: colors.primary + '20' },
                ]}
              >
                {item.icon}
              </View>
              <Text style={[styles.optionTitle, { color: colors.text }]}>
                {item.title}
              </Text>
              <Feather
                name="chevron-right"
                size={20}
                color={colors.iconColor}
              />
            </TouchableOpacity>
            {index !== options.length - 1 && ( // Conditionally render divider
              <View style={styles.divider} />
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: width * 0.05,
    marginTop: height * 0.03,
    borderRadius: width * 0.03,
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.03,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  optionsContainer: {
    marginTop: height * 0.01,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.01,
  },
  iconWrapper: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.03,
  },
  optionTitle: {
    flex: 1,
    fontSize: width * 0.045,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: height * 0.01,
  },
});
