/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import MyStack from './src/navigation/StackNavigation'
import { KeyboardAvoidingView, SafeAreaView, ScrollView } from 'react-native'
import FlashMessage from 'react-native-flash-message'

function App(): React.JSX.Element {
  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1, paddingBottom: 12 }}>
        <MyStack />
      </SafeAreaView>

      <FlashMessage position="top" />
    </KeyboardAvoidingView>
  )
}

export default App