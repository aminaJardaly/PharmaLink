import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; // Import icons
import InputField from '../../components/auth/InputField';
import CustomButton from '../../components/CustomButton';
import AuthLayout from '../../components/auth/AuthLayout';
import { useRouter } from 'expo-router';
import { getColors } from '../../constants/Colors';

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

export default function LoginScreen() {
  const router = useRouter(); // Use router for navigation
  const colors = getColors(); // Get the current theme colors
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    
    <AuthLayout>
      <Text style={[styles.title, { color: colors.text }]}>Welcome to PharmaLink</Text>

      {/* Logo Section */}
      <Image
        source={require('../../../assets/images/Logo.png')} // Replace with your actual logo path
        style={styles.logo}
      />

      {/* Input Fields */}
      <InputField
        label="Username"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <InputField
        label="Password"
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => router.push('/screens/Auth/ResetPasswordScreen')}>
        <Text style={[styles.forgotPassword, { color: colors.linkColor }]}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      {/* Login Button */}
      <CustomButton title="Login" onPress={() => router.push('/screens/Home/HomePageScreen')} />

      <Text style={[styles.orText, { color: colors.secondaryText }]}>Or login with</Text>

      {/* Social Media Buttons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Login with Email')}>
          <MaterialCommunityIcons name="email" size={32} color={colors.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Login with Apple')}>
          <FontAwesome name="apple" size={32} color={colors.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => console.log('Login with Facebook')}
        >
          <AntDesign name="facebook-square" size={32} color={colors.facebookColor} />
        </TouchableOpacity>
      </View>

      {/* Register Section */}
      <TouchableOpacity onPress={() => router.push('/screens/Auth/SignupScreen')}>
        <Text style={[styles.registerText, { color: colors.text }]}>
          Don’t have an account yet?{' '}
          <Text style={[styles.link, { color: colors.linkColor }]}>Register here</Text>
        </Text>
      </TouchableOpacity>
    </AuthLayout>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: width * 0.06, // Responsive font size
    fontWeight: 'bold',
    marginBottom: height * 0.02, // Dynamic spacing
    textAlign: 'center',
  },
  logo: {
    width: width * 0.4, // 40% of screen width
    height: width * 0.4, // Maintain square dimensions
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: height * 0.03, // Spacing between logo and input fields
  },
  forgotPassword: {
    alignSelf: 'flex-start', // Align to the left
    marginTop: height * 0.01, // Dynamic margin
    marginBottom: height * 0.02, // Dynamic margin
    fontSize: width * 0.035, // Responsive font size
  },
  orText: {
    fontSize: width * 0.035, // Responsive font size
    marginVertical: height * 0.015, // Dynamic vertical margin
    textAlign: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02, // Dynamic margin
    marginBottom: height * 0.03, // Dynamic margin
  },
  iconButton: {
    marginHorizontal: width * 0.05, // Dynamic spacing between icons
  },
  registerText: {
    marginTop: height * 0.02, // Dynamic margin
    fontSize: width * 0.035, // Responsive font size
    textAlign: 'center',
  },
  link: {
    fontWeight: '600',
  },
});
