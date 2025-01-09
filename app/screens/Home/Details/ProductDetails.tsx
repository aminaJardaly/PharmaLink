import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // Use useLocalSearchParams for params
import { getColors } from '../../../constants/Colors';
import ProductInfo from '../../../components/Home/Details/Product/ProductInfo';
import Description from '../../../components/Home/Details/Product/Description';
import AddToCart from '../../../components/Home/Details/Product/AddToCart';
import Header from '../../../components/Home/Header';


export default function ProductDetails() {
  const { product } = useLocalSearchParams(); // Access route params
  const router = useRouter();
  const colors = getColors();

  // Parse product JSON string into an object
  const productDetails = product ? JSON.parse(product as string) : {};

  // State for quantity
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Header currentPage="productDetail" /> 
      <ScrollView>
        {/* Product Info Section */}
        <ProductInfo
          image={productDetails.image}
          name={productDetails.name}
          priceLBP={productDetails.price}
          priceUSD={productDetails.price / 15000} // Example conversion rate
          unit="1 Box"
        />

        {/* Product Description Section */}
        <Description
          description="This is a sample description of the product. Include details about the product here."
        />
      </ScrollView>

      {/* Add to Cart Section */}
      <AddToCart
        priceLBP={productDetails.price}
        quantity={quantity}
        setQuantity={setQuantity}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
