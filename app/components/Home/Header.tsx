import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; // Import icons
import { useRouter } from 'expo-router'; // Router for navigation
import { getColors } from '../../constants/Colors'; // Import color theme

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function Header({ currentPage }: { currentPage: string }) {
  const colors = getColors();
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState('Home'); // Default location
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Dropdown visibility

  const locations = ['Home', 'Work', 'Other']; // Location options

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setIsDropdownVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Breadcrumb Navigation */}
      {!['home', 'scan', 'account', 'order','search'].includes(currentPage) && (
        <TouchableOpacity onPress={() => router.back()} style={styles.breadcrumbArrow}>
          <MaterialIcons name="arrow-back" size={width * 0.06} color={colors.primary} />
        </TouchableOpacity>
      )}

      {/* Dropdown for Location Selection */}
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
          <Text style={[styles.title, { color: colors.text }]}>{selectedLocation}</Text>
          <MaterialIcons
            name={isDropdownVisible ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={width * 0.06}
            color={colors.iconColor}
          />
        </TouchableOpacity>
        {isDropdownVisible && (
          <Modal transparent animationType="fade">
            <TouchableWithoutFeedback onPress={() => setIsDropdownVisible(false)}>
              <View style={styles.modalOverlay} />
            </TouchableWithoutFeedback>
            <View style={[styles.dropdown, { backgroundColor: colors.background }]}>
              <FlatList
                data={locations}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.dropdownItem}
                    onPress={() => handleLocationSelect(item)}
                  >
                    <Text style={[styles.dropdownText, { color: colors.text }]}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </Modal>
        )}
      </View>

      {/* Notification Icon */}
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <FontAwesome name="bell" size={width * 0.05} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width * 0.05, // 5% horizontal padding
    paddingVertical: height * 0.02, // 2% vertical padding
  },
  breadcrumbArrow: {
    marginRight: width * 0.03,
  },
  dropdownContainer: {
    flex: 1,
    marginLeft: width * 0.02, // Space from breadcrumb
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: width * 0.05, // 5% of screen width for title font size
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dropdown: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.05,
    width: '40%',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  dropdownItem: {
    padding: height * 0.015,
  },
  dropdownText: {
    fontSize: width * 0.04,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width * 0.03, // Responsive gap between icons
  },
});
