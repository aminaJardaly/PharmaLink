import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import { getColors } from '../../../constants/Colors'; // Import color constants

const { width, height } = Dimensions.get('window');

export default function ScanScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const colors = getColors();
  const navigation = useNavigation(); // Initialize navigation

  const pickImage = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Denied', 'Camera access is required to scan.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: colors.text }]}>
          Scan Doctor Note
        </Text>
      </View>

      {/* Display Image */}
      <View style={styles.imageContainer}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Text style={[styles.placeholderText, { color: colors.secondaryText }]}>
            No image selected
          </Text>
        )}
      </View>

      {/* Footer Controls */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.controlButton} onPress={pickImage}>
          <MaterialIcons name="camera-alt" size={32} color={colors.text} />
          <Text style={[styles.controlText, { color: colors.text }]}>Capture</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: height * 0.05,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  backButton: {
    marginRight: width * 0.02,
  },
  headerText: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  placeholderText: {
    fontSize: width * 0.04,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },
  controlButton: {
    alignItems: 'center',
  },
  controlText: {
    marginTop: height * 0.005,
    fontSize: width * 0.035,
  },
});
