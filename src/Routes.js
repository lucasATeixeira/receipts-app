import React, { useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ThemeContext } from 'styled-components';

import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import Receipts from './Screens/Receipts';
import Receipt from './Screens/Receipt';

import SettingsButton from './components/SettingsButton';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const [loading, setLoading] = useState(true);

  const theme = useContext(ThemeContext);

  if (loading) {
    return <Welcome setLoading={setLoading} />;
  }

  return (
    <>
      <Navigator initialRouteName="Welcome">
        <Screen
          name="Home"
          component={Home}
          options={{
            title: 'Escolha uma categoria',
            headerStyle: {
              backgroundColor: theme.primary.default,
              height: 75,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            },
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#eeee',
            },
          }}
        />
        <Screen
          name="Receipts"
          component={Receipts}
          options={({ route }) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: theme.primary.default,
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#eeee',
            },
            headerRight: () => (
              <SettingsButton
                options={[
                  {
                    name: 'Editar Categoria',
                    icon: 'pencil',
                    action: () => {},
                  },
                  {
                    name: 'Excluir Categoria',
                    icon: 'trash-can-outline',
                    action: () => {},
                  },
                ]}
              />
            ),
          })}
        />
        <Screen
          name="Receipt"
          component={Receipt}
          options={{
            title: '',
            headerBackTitleStyle: {
              color: '#fff',
              backgroundColor: '#fff',
            },
            headerTransparent: true,
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#eeee',
            },
            headerRight: () => (
              <SettingsButton
                options={[
                  {
                    name: 'Editar Receita',
                    icon: 'pencil',
                    action: () => {},
                  },
                  {
                    name: 'Excluir Receita',
                    icon: 'trash-can-outline',
                    action: () => {},
                  },
                ]}
              />
            ),
          }}
        />
      </Navigator>
    </>
  );
}
