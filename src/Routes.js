import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Screens/Welcome';
import Home from './Screens/Home';
import Receipts from './Screens/Receipts';

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  const [loading, setLoading] = useState(true);

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
              backgroundColor: '#56DFB5',
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
            title: route.params.type,
            headerStyle: {
              backgroundColor: '#56DFB5',
            },
            headerBackTitleStyle: {
              color: '#FFF',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#eeee',
            },
          })}
        />
      </Navigator>
    </>
  );
}
