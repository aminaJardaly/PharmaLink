import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Animated } from 'react-native';
import { getColors } from '../../constants/Colors';

const { width, height } = Dimensions.get('window');

const DealsAndNewsSection = () => {
  const colors = getColors();
  const scrollX = useRef(new Animated.Value(0)).current;

  const dealsAndNews = [
    { id: '1', title: 'Deal 1', description: '50% off on all medicines!' },
    { id: '2', title: 'News 1', description: 'Pharmacy open 24/7!' },
    { id: '3', title: 'Deal 2', description: 'Buy 1 Get 1 Free!' },
    { id: '4', title: 'News 2', description: 'New branch opening soon!' },
    { id: '5', title: 'Deal 3', description: '20% off for seniors!' },
  ];

  useEffect(() => {
    const autoScroll = setInterval(() => {
      flatListRef?.current?.scrollToOffset({
        offset: ((currentIndex + 1) % dealsAndNews.length) * width,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(autoScroll);
  }, []);

  const flatListRef = useRef<FlatList>(null);
  let currentIndex = 0;

  const onScroll = (event: any) => {
    currentIndex = Math.round(event.nativeEvent.contentOffset.x / width);
  };

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={dealsAndNews}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onMomentumScrollEnd={onScroll}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              {
                backgroundColor: colors.primary, // Use the main color for the background
                borderColor: colors.borderColor,
              },
            ]}
          >
            <Text style={[styles.title, { color: colors.background }]}>{item.title}</Text>
            <Text style={[styles.description, { color: colors.background }]}>
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: height * 0.01, // Responsive vertical margin
    height: height * 0.2, // Responsive height for the section
  },
  card: {
    width: width * 0.9, // Card width as 90% of screen width
    marginHorizontal: width * 0.05, // Horizontal margin
    borderRadius: width * 0.03, // Responsive border radius
    padding: width * 0.05, // Responsive padding
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: height * 0.005 },
    shadowOpacity: 0.2,
    shadowRadius: width * 0.03, // Responsive shadow radius
  },
  title: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: 'bold',
    marginBottom: height * 0.01, // Responsive margin
  },
  description: {
    fontSize: width * 0.04, // Responsive font size
    textAlign: 'center',
  },
});

export default DealsAndNewsSection;