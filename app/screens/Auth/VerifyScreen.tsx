import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import InputField from '../../components/auth/InputField';
import CustomButton from '../../components/CustomButton';
import AuthLayout from '../../components/auth/AuthLayout';
import { getColors } from '../../constants/Colors';
import { useRouter } from 'expo-router';


const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

export default function VerifyScreen() {
  const router = useRouter(); // Use router for navigation  
  const colors = getColors(); // Get theme colors
  const [verificationCode, setVerificationCode] = useState('');

  return (
    <AuthLayout>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Verify Your Account</Text>

        {/* Logo Section */}
        <Image
          source={require('../../../assets/images/Logo.png')} // Replace with your actual logo path
          style={styles.logo}
        />
      </View>

      <Text style={[styles.description, { color: colors.secondaryText }]}>
        Enter the verification code sent to your email or phone number.
      </Text>

      {/* Input Field */}
      <InputField
        label="Verification Code"
        placeholder="Enter code"
        value={verificationCode}
        onChangeText={setVerificationCode}
      />

      {/* Verify Button */}
      <CustomButton title="Verify" onPress={() => router.push('/screens/Auth/LoginScreen')} />
      {/* Resend Code */}
      <TouchableOpacity>
        <Text style={[styles.resendText, { color: colors.linkColor }]}>Didn’t receive a code? Resend</Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: height * 0.02, // Space between the logo and description
    marginTop: height * 0.01, // Move the header up
  },
  title: {
    fontSize: width * 0.06, // Responsive font size
    fontWeight: 'bold',
    marginBottom: height * 0.01, // Reduced spacing below the title
    textAlign: 'center',
  },
  logo: {
    width: width * 0.4, // 40% of screen width
    height: width * 0.4, // Maintain square dimensions
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: height * 0.03, // Spacing between logo and input fields
  },
  description: {
    fontSize: width * 0.035, // Responsive font size
    textAlign: 'center',
    marginBottom: height * 0.03, // Dynamic margin below the description
  },
  resendText: {
    marginTop: height * 0.02, // Dynamic margin
    fontSize: width * 0.035, // Responsive font size
    textAlign: 'center',
    fontWeight: '600',
  },
});
