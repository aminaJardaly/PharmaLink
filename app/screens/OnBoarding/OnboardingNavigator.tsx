import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FindMedicinesScreen from './FindMedicinesScreen';
import SelectPharmacyScreen from './SelectPharmacyScreen';
import PharmacyManagementScreen from './PharmacyManagementScreen';
import GetStartedScreen from './GetStartedScreen';

const Stack = createStackNavigator();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FindMedicines" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FindMedicines" component={FindMedicinesScreen} />
      <Stack.Screen name="SelectPharmacy" component={SelectPharmacyScreen} />
      <Stack.Screen name="PharmacyManagement" component={PharmacyManagementScreen} />
      <Stack.Screen name="GetStarted" component={GetStartedScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;
