import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';

import Routes from './Routes';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <ThemeProvider theme={light}>
          <StatusBar backgroundColor={light.primary.default} />
          <Routes />
        </ThemeProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
