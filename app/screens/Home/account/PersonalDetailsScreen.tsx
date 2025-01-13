import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from '../../../components/Home/Header';
import { getColors } from '../../../constants/Colors';

const { width } = Dimensions.get('window');

export default function PersonalDetailsScreen() {
  const colors = getColors();

  // State for the fields
  const [firstName, setFirstName] = useState('Amina');
  const [lastName, setLastName] = useState('Jardali');
  const [nickname, setNickname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('Feb 27, 2002');

  const handleSave = () => {
    console.log('Save clicked');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <Header currentPage="Account Settings" />

      {/* Personal Details Card */}
      <View style={[styles.card, { borderColor: colors.borderColor }]}>
        <Text style={[styles.title, { color: colors.text }]}>Personal Details</Text>
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor={colors.secondaryText}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="Last name"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor={colors.secondaryText}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="Nickname"
          value={nickname}
          onChangeText={setNickname}
          placeholderTextColor={colors.secondaryText}
        />
        <TextInput
          style={[styles.input, { borderColor: colors.borderColor }]}
          placeholder="Date of birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholderTextColor={colors.secondaryText}
        />
        <TouchableOpacity
          onPress={handleSave}
          style={[
            styles.saveButton,
            { backgroundColor: nickname ? colors.primary : colors.borderColor },
          ]}
          disabled={!nickname} // Disable button if nickname is empty
        >
          <Text style={[styles.saveText, { color: colors.buttonText }]}>Save</Text>
        </TouchableOpacity>
      </View>

      {/* Email and Phone Section */}
      <View style={[styles.card, { borderColor: colors.borderColor }]}>
        <View style={styles.infoRow}>
          <View>
            <Text style={[styles.label, { color: colors.secondaryText }]}>
              Email address
            </Text>
            <Text style={[styles.info, { color: colors.text }]}>
              aminajardali@gmail.com
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View>
            <Text style={[styles.label, { color: colors.secondaryText }]}>
              Phone number
            </Text>
            <Text style={[styles.info, { color: colors.text }]}>
              +96170708754
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={[styles.editText, { color: colors.primary }]}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Account Options */}
      <View style={[styles.card, { borderColor: colors.borderColor }]}>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={[styles.optionText, { color: colors.text }]}>
            Change password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={[styles.optionText, { color: colors.text }]}>
            Delete account
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign Out Button */}
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={[styles.signOutText, { color: colors.danger }]}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: width * 0.04,
  },
  card: {
    width: '100%',
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
  title: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginBottom: width * 0.04,
  },
  input: {
    borderWidth: 1,
    borderRadius: width * 0.03,
    padding: width * 0.03,
    marginBottom: width * 0.03,
    fontSize: width * 0.04,
  },
  saveButton: {
    paddingVertical: width * 0.03,
    borderRadius: width * 0.03,
    alignItems: 'center',
  },
  saveText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: width * 0.03,
  },
  label: {
    fontSize: width * 0.035,
    fontWeight: '500',
    marginBottom: width * 0.01,
  },
  info: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  editText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  optionRow: {
    paddingVertical: width * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
  signOutButton: {
    alignSelf: 'center',
    marginTop: width * 0.03,
  },
  signOutText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});
