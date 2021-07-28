import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react/navigation-react';
import {createStackNavigator} from '@react/navigation-stack';


import HomeScreen from './screens/HomeScreen';
import IssLocation from './screens/IssLocation';
import Meteors from './screens/Meteors';

const Stack= createStackNavigator();

 function App  () {
   
  <NavigationContainer>

    <StackNavigator intialName='Home' screenOptions={{headerShown=false}}>

<StackNavigator name='Home' component={HomeScreen}/>
<StackNavigator name='IssLocation' component={IssLocation}/>
<StackNavigator name='Meteors' component={Meteors}/>
  
</StackNavigator>

  
  </NavigationContainer>

}


export default App;
