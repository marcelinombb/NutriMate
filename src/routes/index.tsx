import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../pages/Login';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen
              name='Login'
              component={Login}
              options={{
                headerShown: false
              }}
          />

          <Stack.Screen
              name='Home'
              component={Home}
              options={{
                  headerShown: false
              }}
          />
      </Stack.Navigator>
  )
}

export default Routes