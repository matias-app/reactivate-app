import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import OnboardingScreen from './screens/onboarding/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stacks from '../global/stacks';
import LoginScreen from './screens/Login/LoginScreen';
import MainScreen from './screens/Main/MainScreen';
import ActivityOneScreen from './screens/activities/ActivityOneScreen';
import ActivitySecondScreen from './screens/activities/ActivitySecondScreen';
import ActivityThirdScreen from './screens/activities/ActivityThirdScreen';
import ActivityFourthScreen from './screens/activities/ActivityFourthScreen';

const Stack = createNativeStackNavigator();

const settings = {
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'pop'
}

export default function Core()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Stacks.OnBoarding}
          component={OnboardingScreen}
          options={settings}
        />
        <Stack.Screen
          name={Stacks.Login}
          component={LoginScreen}
          options={settings}
        />
        <Stack.Screen
          name={Stacks.Main}
          component={MainScreen}
          options={settings}
        />
        <Stack.Screen
          name={Stacks.ActivityOne}
          component={ActivityOneScreen}
          options={settings}
        />
            <Stack.Screen
          name={Stacks.ActivitySecond}
          component={ActivitySecondScreen}
          options={settings}
        />
            <Stack.Screen
          name={Stacks.ActivityThird}
          component={ActivityThirdScreen}
          options={settings}
        />
            <Stack.Screen
          name={Stacks.ActivityFourth}
          component={ActivityFourthScreen}
          options={settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}