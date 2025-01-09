import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Use useRouter for navigation
import Header from '../../../components/Home/Header';
import PharmacyInfo from '../../../components/Home/Details/Pharmacy/PharmacyInfo';
import SearchBar from '../../../components/Home/SearchBar';
import CategoryFilters from '../../../components/Home/Details/Pharmacy/CategoryFilters';
import ProductItem from '../../../components/Home/Details/Pharmacy/ProductItem';
import { getColors } from '../../../constants/Colors';
import BottomNavigationBar from '../../../components/Home/BottomNavigationBar'; // Footer component

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
};

export default function PharmacyDetail() {
  const colors = getColors(); // Get theme colors
  const router = useRouter(); // Initialize router for navigation

  const products: Product[] = [
    { id: '1', name: 'Ibuprofen', price: 1500, category: 'Tablets', image: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Paracetamol', price: 2000, category: 'Tablets', image: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Amoxicillin', price: 3000, category: 'Antibiotics', image: 'https://via.placeholder.com/50' },
    { id: '4', name: 'Cetirizine', price: 1000, category: 'Syrups', image: 'https://via.placeholder.com/50' },
    { id: '5', name: 'Metformin', price: 2500, category: 'Diabetes', image: 'https://via.placeholder.com/50' },
    { id: '6', name: 'Vitamin C', price: 1200, category: 'Vitamins', image: 'https://via.placeholder.com/50' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products dynamically based on selected category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header Section */}
      <Header currentPage="PharmacyDetails" /> 

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Pharmacy Info Section */}
        <PharmacyInfo
          name="Ali Ahmad Pharmacy"
          address="17 Brown Street, Opposite block D, Wuse main express road."
          rating="3.5 ratings"
          location="FCT, Abuja"
        />

        {/* Search Bar */}
        <SearchBar value="" onChangeText={() => {}} />

        {/* Category Filters */}
        <CategoryFilters
          categories={['All', 'Tablets', 'Syrups', 'Antibiotics', 'Diabetes', 'Vitamins']}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Filtered Products */}
        <View style={styles.productList}>
          {filteredProducts.map((product) => (
            <TouchableOpacity
            key={product.id}
            onPress={() =>
                router.push({
                pathname: '/screens/Home/Details/ProductDetails',
                params: {
                    product: JSON.stringify(product), // Pass product object as a JSON string
                },
                })
            }
            >
            <ProductItem name={product.name} price={product.price} image={product.image} />
            </TouchableOpacity>

          ))}
          {filteredProducts.length === 0 && (
            <Text style={[styles.noProducts, { color: colors.secondaryText }]}>
              No products available for the selected category.
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Footer */}
      <BottomNavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20, // Add space at the bottom for better UX
  },
  productList: {
    marginTop: 20,
  },
  noProducts: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
});
