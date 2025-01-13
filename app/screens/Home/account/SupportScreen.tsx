import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../components/Home/Header';
import OptionRow from '../../../components/Home/OptionRow';
import { getColors } from '../../../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function SupportScreen() {
  const colors = getColors();
  const router = useRouter();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Header currentPage="Get Support" />

      {/* Info Card */}
      <View style={[styles.infoCard, { backgroundColor: colors.primary + '15' }]}>
        <MaterialIcons name="headset-mic" size={48} color={colors.primary} />
        <View style={styles.infoTextContainer}>
          <Text style={[styles.infoTitle, { color: colors.text }]}>
            We're here for you.
          </Text>
          <Text
            style={[styles.infoDescription, { color: colors.secondaryText }]}
            numberOfLines={3} // Restricts the text to 3 lines
            ellipsizeMode="tail" // Adds "..." if text overflows
          >
            Choose one of the options below so we can serve you better. If you
            need further help, our team is here to assist you!
          </Text>
        </View>
      </View>

      {/* Dynamic Option Rows */}
      <OptionRow
        label="Issue with a past order"
        onPress={() => router.push('/screens/Home/account/ChatScreen')}
      />
      <OptionRow
        label="Issue with my account or payment"
        onPress={() => router.push('/screens/Home/account/ChatScreen')}
      />
      <OptionRow
        label="Other Issues"
        onPress={() => router.push('/screens/Home/account/ChatScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoTextContainer: {
    marginLeft: 16,
    flex: 1, // Ensures text container does not overflow outside the card
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoDescription: {
    fontSize: 14,
    lineHeight: 20,
  },
});
