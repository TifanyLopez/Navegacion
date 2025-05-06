import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AntDesign from '@expo/vector-icons/AntDesign';


import Settings from './Screens/Settings';
import Home from './Screens/Home';
import Users from './Screens/Users';
import DetailHome from './Screens/DetailHome';
import AnotherDetailHome from './Screens/AnotherDetailsHome';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';



const DetailsHomeNavigator = createStackNavigator();

function StackDetailsHome(){
  return(
  <DetailsHomeNavigator.Navigator
  initialRouteName='Home'>
  <DetailsHomeNavigator.Screen
    name="Home"
    component={Home}>
    </DetailsHomeNavigator.Screen>  
    <DetailsHomeNavigator.Screen
    name="DetailHome"
    component={DetailHome}>
    </DetailsHomeNavigator.Screen>  
    <DetailsHomeNavigator.Screen
      name="AnotherDetailHome"
      component={AnotherDetailHome}>
      </DetailsHomeNavigator.Screen>
      </DetailsHomeNavigator.Navigator>

  )
}

const Drawer = createDrawerNavigator();
function DrawerNavigate(){
    return( <Drawer.Navigator
initialRouteName="User"> 
        <Drawer.Screen name="User"
component={Users} />
        <Drawer.Screen name="DetailHome"
component={Home} />
        <Drawer.Screen name="OtroDetalle"
component={AnotherDetailHome} />  
    </Drawer.Navigator>
    );
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{  
        tabBarActiveTintColor: 'purple', 
      }}
    >
      <Tab.Screen name='HomeScreen' component={StackDetailsHome} 
        options={{
          tabBarLabel:'HomeScreen',
          tabBarIcon: ({color, size})=> (
            <AntDesign name="home" size={30} color={color} />
          ),
          headerShown:false,
        }}
      />
      <Tab.Screen
        name='Settings' component={Settings} 
        options={{
          tabBarLabel:'Settings',
          tabBarIcon: ({ color, size})=> (
            <AntDesign name="setting" size={30} color={color} /> 
          ),
        }}
      />
      <Tab.Screen
        name='Drawer' component={Users} 
        options={{
          tabBarLabel:'DrawerNavigate',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={30} color="black" /> 
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navegacion() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
