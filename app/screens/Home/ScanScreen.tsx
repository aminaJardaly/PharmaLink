import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getColors } from '../../constants/Colors';
import BottomNavigationBar from '../../components/Home/BottomNavigationBar';
import Header from '../../components/Home/Header';


const { width, height } = Dimensions.get('window');

export default function ScanScreen() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const scanAnimation = useRef(new Animated.Value(0)).current;
  const colors = getColors();
  const navigation = useNavigation();

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
      startScanAnimation();
    }
  };

  const startScanAnimation = () => {
    setIsScanning(true);
    scanAnimation.setValue(0);

    const upDownAnimation = Animated.sequence([
      Animated.timing(scanAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(scanAnimation, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]);

    Animated.loop(upDownAnimation, { iterations: 3 }).start(() => {
      setIsScanning(false);
    });
  };

  const animatedStyle = {
    top: scanAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, height * 0.4],
    }),
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: colors.text }]}>Scan Doctor Note</Text>
      </View> */}
      <Header currentPage="scan" /> 

      <View style={styles.imageContainer}>
        {imageUri ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            {isScanning && (
              <Animated.View style={[styles.scanOverlay, animatedStyle]} />
            )}
          </View>
        ) : (
          <Text style={[styles.placeholderText, { color: colors.secondaryText }]}>No image selected</Text>
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.controlButton} onPress={pickImage}>
          <EvilIcons name="camera" size={32} color={colors.text} />
          <Text style={[styles.controlText, { color: colors.text }]}>Capture</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <BottomNavigationBar />
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
  imageWrapper: {
    position: 'relative',
    width: width * 0.8,
    height: height * 0.4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  scanOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 5,
    backgroundColor: 'rgba(0, 150, 255, 0.5)',
  },
  placeholderText: {
    fontSize: width * 0.04,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center', // Centers items horizontally
    alignItems: 'center',
    paddingVertical: height * 0.02,
    paddingRight:height * 0.01,
  },
  controlButton: {
    alignItems: 'center',
  },
  controlText: {
    marginTop: height * 0.005,
    fontSize: width * 0.035,
  },
});
