import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import Routes from './Routes';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <StatusBar backgroundColor="#56DFB5" />
        <Routes />
      </PaperProvider>
    </NavigationContainer>
  );
}
