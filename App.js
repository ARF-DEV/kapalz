import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screen/Home'

const CoreStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <CoreStack.Navigator>
        <CoreStack.Screen component={Home} name='Home'/>
      </CoreStack.Navigator>
    </NavigationContainer>
  );
}