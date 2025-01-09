import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Import FontAwesome5
import { getColors } from '../../constants/Colors'; // Colors

const { width, height } = Dimensions.get('window');

interface ProfileSectionProps {
  imageSource: any; // Path to profile image
  name: string;
  email: string;
  onEditPress: () => void; // Callback for edit button press
}

export default function ProfileSection({
  imageSource,
  name,
  email,
  onEditPress,
}: ProfileSectionProps) {
  const colors = getColors();

  return (
    <View style={styles.profileContainer}>
      <View style={styles.imageWrapper}>
        <Image source={imageSource} style={styles.profileImage} />
        <TouchableOpacity
          style={[styles.editIcon, { backgroundColor: colors.primary }]}
          onPress={onEditPress}
        >
          <FontAwesome5 name="edit" size={width * 0.04} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
      <Text style={[styles.profileName, { color: colors.text }]}>{name}</Text>
      <Text style={[styles.profileEmail, { color: colors.secondaryText }]}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  imageWrapper: {
    position: 'relative',
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: width * 0.15,
  },
  editIcon: {
    position: 'absolute',
    top: -width * 0.02, // Slightly outside the top-right corner
    right: -width * 0.02,
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  profileName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: height * 0.02,
  },
  profileEmail: {
    fontSize: width * 0.04,
    marginTop: height * 0.005,
  },
});
