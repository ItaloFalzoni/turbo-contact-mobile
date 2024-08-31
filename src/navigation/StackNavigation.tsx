import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Signin from '../screens/Signin'

import Contacts from '../screens/Contacts'
import AddContact from '../screens/AddContact'

import Settings from '../screens/Settings'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="Signin"
          component={Signin}
        />

        <Stack.Screen
          name="Home"
          component={Contacts}
        />

        <Stack.Screen
          name="AddContact"
          component={AddContact}
        />

        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation