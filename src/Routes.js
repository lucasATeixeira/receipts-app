import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './Screens/Welcome';
import Home from './Screens/Home';

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
          name="Escolha o tipo da receita"
          component={Home}
          options={{
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
      </Navigator>
    </>
  );
}
