import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  Alert,
} from 'react-native';
import { MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; // Import icons
import InputField from '../../components/auth/InputField';
import CustomButton from '../../components/CustomButton';
import AuthLayout from '../../components/auth/AuthLayout';
import { useRouter } from 'expo-router';
import { getColors } from '../../constants/Colors';

const { width, height } = Dimensions.get('window'); // Get screen dimensions for responsiveness

export default function SignupScreen() {
  const router = useRouter(); // Use router for navigation
  const colors = getColors();
  const [activeTab, setActiveTab] = useState('email'); // State for active tab
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validatePhoneNumber = (number: string) => {
    const phoneRegex = /^70 \d{6}$/; // Regex to match "70 708754" format
    return phoneRegex.test(number);
  };

  const handleSignup = () => {
    if (activeTab === 'phone' && !validatePhoneNumber(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number in the format "70 708754".');
      return;
    }
    router.push({
      pathname: '/screens/Auth/VerifyScreen',
      params: {
        method: activeTab,
        value: activeTab === 'email' ? email : phone,
      },
    });
  };

  return (
    <AuthLayout>
      <Text style={[styles.title, { color: colors.text }]}>Create an Account</Text>

      {/* Logo Section */}
      <Image
        source={require('../../../assets/images/Logo.png')} // Replace with your actual logo path
        style={styles.logo}
      />

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'email' ? { borderBottomColor: colors.primary } : null,
          ]}
          onPress={() => setActiveTab('email')}
        >
          <Text style={[styles.tabText, activeTab === 'email' ? { color: colors.primary } : { color: colors.secondaryText }]}>
            Email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'phone' ? { borderBottomColor: colors.primary } : null,
          ]}
          onPress={() => setActiveTab('phone')}
        >
          <Text style={[styles.tabText, activeTab === 'phone' ? { color: colors.primary } : { color: colors.secondaryText }]}>
            Phone
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {activeTab === 'email' ? (
        <View>
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <InputField
            label="Confirm Password"
            placeholder="Confirm your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      ) : (
        <View>
          <InputField
            label="Phone Number"
            placeholder="Enter your phone number"
            value={phone}
            onChangeText={(text) => {
              // Allow only digits and space
              if (/^\d{0,2}( \d{0,6})?$/.test(text)) {
                setPhone(text);
              }
            }}
            keyboardType="phone-pad" // Set numeric keyboard for phone input
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <InputField
            label="Confirm Password"
            placeholder="Confirm your password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      )}

      {/* Sign Up Button */}
      <CustomButton title="Sign Up" onPress={handleSignup} />

      {/* Social Media Buttons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Login with Email')}>
          <MaterialCommunityIcons name="email" size={32} color={colors.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Login with Apple')}>
          <FontAwesome name="apple" size={32} color={colors.iconColor} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Login with Facebook')}>
          <AntDesign name="facebook-square" size={32} color={colors.facebookColor} />
        </TouchableOpacity>
      </View>

      {/* Navigate to Login */}
      <TouchableOpacity onPress={() => router.push('/screens/Auth/LoginScreen')}>
        <Text style={[styles.loginText, { color: colors.text }]}>
          Already have an account?{' '}
          <Text style={[styles.link, { color: colors.linkColor }]}>Login here</Text>
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
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: height * 0.02,
    marginTop: -height * 0.03,
  },
  tab: {
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
    marginHorizontal: width * 0.03,
  },
  tabText: {
    fontSize: width * 0.04,
    fontWeight: '600',
  },
  loginText: {
    marginTop: height * 0.02,
    fontSize: width * 0.035,
    textAlign: 'center',
  },
  link: {
    fontWeight: '600',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
  },
  iconButton: {
    marginHorizontal: width * 0.05,
  },
});
