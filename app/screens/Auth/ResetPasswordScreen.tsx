import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import InputField from '../../components/auth/InputField';
import CustomButton from '../../components/CustomButton';
import AuthLayout from '../../components/auth/AuthLayout';
import { getColors } from '../../../constants/Colors';
import { useRouter } from 'expo-router';


const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

export default function ResetPasswordScreen() {
  const router = useRouter(); // Use router for navigation
  const colors = getColors(); // Get theme colors
  const [email, setEmail] = useState('');

  return (
    <AuthLayout>
      <View style={styles.headerContainer}>
        <Text style={[styles.title, { color: colors.text }]}>Reset Password</Text>

        {/* Logo Section */}
        <Image
          source={require('../../../assets/images/Logo.png')} // Replace with your actual logo path
          style={styles.logo}
        />
      </View>

      <Text style={[styles.description, { color: colors.secondaryText }]}>
        Enter your email address to receive a password reset link.
      </Text>

      {/* Input Field */}
      <InputField
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Button */}
      <CustomButton title="Send Reset Link" onPress={() => router.push('/screens/Auth/LoginScreen')} />
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    marginBottom: height * -0.01, // Space between the logo and description
    marginTop: height * -0.02, // Move the header up
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
});
