import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import Header from '../../../components/Home/Header';
import { getColors } from '../../../constants/Colors';

const { width } = Dimensions.get('window');

export default function PaymentsScreen() {
  const colors = getColors();

  const balances = [
    {
      type: 'LBP Cash Balance',
      amount: 'LBP 0',
      flag: '🇱🇧',
      history: 'Cash History',
    },
    {
      type: 'USD Cash Balance',
      amount: 'USD 0',
      flag: '🇱🇧',
      history: 'Cash History',
    },
  ];

  const paymentMethods = [
    {
      type: 'Visa',
      details: 'Ending with 3243',
      expiry: 'Expires 09/2027',
    },
    {
      type: 'Visa',
      details: 'Ending with 3243',
      expiry: 'Expires 09/2026',
    },
    {
      type: 'Cash',
      details: 'Pay cash on delivery',
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Header currentPage="Payments" />

      {/* Balances Section */}
      <FlatList
        data={balances}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: colors.primary }]}>
            <View style={styles.cardHeader}>
              <Text style={[styles.cardTitle, { color: colors.buttonText }]}>
                {item.type}
              </Text>
              <Text style={[styles.cardFlag, { color: colors.buttonText }]}>
                {item.flag}
              </Text>
            </View>
            <Text style={[styles.cardAmount, { color: colors.buttonText }]}>
              {item.amount}
            </Text>
            <TouchableOpacity>
              <Text style={[styles.cardLink, { color: colors.buttonText }]}>
                {item.history}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.cardButton, { backgroundColor: colors.buttonText }]}
            >
              <Text style={[styles.cardButtonText, { color: colors.primary }]}>
                + Top up
              </Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.balanceList}
        showsHorizontalScrollIndicator={false}
      />

      {/* Payment Methods Section */}
      <View style={[styles.paymentCard, { borderColor: colors.borderColor }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Payment Methods
        </Text>
        {paymentMethods.map((method, index) => (
          <View key={index} style={styles.methodRow}>
            <View style={styles.methodInfo}>
              <Text style={[styles.methodType, { color: colors.text }]}>
                {method.type}
              </Text>
              <Text
                style={[styles.methodDetails, { color: colors.secondaryText }]}
              >
                {method.details}
              </Text>
            </View>
            {method.expiry && (
              <Text style={[styles.expiry, { color: colors.secondaryText }]}>
                {method.expiry}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Add New Card Button */}
      <TouchableOpacity
        style={[styles.addButton, { backgroundColor: colors.primary }]}
      >
        <Text style={[styles.buttonText, { color: colors.buttonText }]}>
          Add new card
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  balanceList: {
    paddingHorizontal: width * 0.05,
    paddingBottom: width * 0.02, // Minimal space between cards and payment methods
  },
  card: {
    width: width * 0.75, // Card width (75% of screen)
    height: width * 0.45, // Card height
    borderRadius: width * 0.03,
    marginHorizontal: width * 0.02,
    padding: width * 0.04,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  cardFlag: {
    fontSize: width * 0.05,
  },
  cardAmount: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginVertical: width * 0.02,
  },
  cardLink: {
    fontSize: width * 0.035,
    textDecorationLine: 'underline',
  },
  cardButton: {
    paddingVertical: width * 0.03,
    borderRadius: width * 0.02,
    alignItems: 'center',
  },
  cardButtonText: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
  },
  paymentCard: {
    marginHorizontal: width * 0.05,
    borderRadius: width * 0.03,
    borderWidth: 1,
    padding: width * 0.04,
    marginBottom: width * 0.5,
  },
  sectionTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: width * 0.03,
  },
  methodRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.03,
  },
  methodInfo: {
    flex: 1,
  },
  methodType: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
  },
  methodDetails: {
    fontSize: width * 0.03,
    marginTop: width * 0.01,
  },
  expiry: {
    fontSize: width * 0.03,
  },
  addButton: {
    marginHorizontal: width * 0.05,
    paddingVertical: width * 0.04,
    borderRadius: width * 0.03,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});
