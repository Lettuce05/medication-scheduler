import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Device from 'expo-device';
import { useFonts } from 'expo-font';
import colors from './assets/colors/colors';
import MedicationDetail from './components/MedicationDetail';
import Medication from './components/Medication';
import Schedule from './components/Schedule';
import Profile from './components/Profile';
import MedicationIcon from './assets/images/Medication';
import Calendar from './assets/images/Calendar';
import User from './assets/images/User';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddMedication from './components/AddMedication';
import fontStyles from './assets/font_styles/fontStyles';

const MedicationStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MedicationStackScreen = () => {
  return (
    <MedicationStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <MedicationStack.Screen name="Medication" component={Medication} />
      <MedicationStack.Screen name="MedicationDetail" component={MedicationDetail}/>
      <MedicationStack.Screen name="AddMedication" component={AddMedication}/>
    </MedicationStack.Navigator>
  )
}
export default function App() {
  let [fontsLoaded] = useFonts({
    'VisueltPro-Bold': require('./assets/fonts/VisueltPro-Bold.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
  });

  
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.primary_900,
          tabBarInactiveTintColor: colors.dark_800,
          tabBarLabelStyle: styles.tabBarLabel
        }}
        
      >
        <Tab.Screen 
          name="MedicationScreen" 
          component={MedicationStackScreen} 
          options={{
            tabBarIcon: ({color}) => <MedicationIcon fill={color} height={24} width={24}/>,
            tabBarLabel: "Medication"
          }} 
        />
        <Tab.Screen 
          name="ScheduleScreen" 
          component={Schedule} 
          options={{
            tabBarIcon: ({color}) => <Calendar fill={color} height={24} width={24}/>,
            tabBarLabel: "Schedule"
          }} 
        />
        <Tab.Screen 
          name="ProfileScreen" 
          component={Profile} 
          options={{
            tabBarIcon: ({color}) => <User fill={color} height={24} width={24}/>,
            tabBarLabel: "Me"
          }}
        />
      </Tab.Navigator>
    )
    
  }
  
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarStyle: {
    height: Device.osName === 'iOS' ? 90 : 60,
    paddingBottom: Device.osName === 'iOS' ? 40 : 10,
    borderTopColor: colors.dark_300,
    borderTopWidth: 1
  },
  tabBarLabel: {
    ...fontStyles.Tiny
  }
});
