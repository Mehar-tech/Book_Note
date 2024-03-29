// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LibraryDetailsScreen from './components/LibraryDetailsScreen';
import LibraryListScreen from './components/LibraryListScreen';


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LibraryList" component={LibraryListScreen} />
        <Stack.Screen name="LibraryDetails" component={LibraryDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//Added a commented line in subBranch2

//Added a commented line in SubBranch1