import { Ionicons, FontAwesome, MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import Home from '../screens/Home';
import Upcoming from '../screens/Upcoming';
import Book from '../screens/Book';
import Medication from '../screens/Medication';
import User from '../screens/User';
import VirtualQueue from "../screens/VirtualQueue"

import { BottomTabParamList, HomeParamList, AppointmentsParamList, BookParamList, MedicationParamList, UserParamList } from '../types';
import AvaliableClinics from '../screens/AvaliableClinics';
import Calendar from '../screens/Calendar'
import HealthInsights from '../screens/HealthInsights';
import Appointment from '../screens/Appointment';
const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="ios-home" color={color} size={25} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Appointments"
        component={AppointmentsNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="heartbeat" color={color} size={25} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Book"
        component={BookNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="add-circle" color={color} size={25} style={{ marginBottom: -3 }} />,
        }}
      />
      <BottomTab.Screen
        name="Medication"
        component={MedicationNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="pill" color={color} size={25} style={{ marginBottom: -3 }} />,
        }}
      />
      
      <BottomTab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" color={color} size={25} style={{ marginBottom: -3 }} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const HomeStack = createStackNavigator<HomeParamList>();
function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Home' }}
      />
    </HomeStack.Navigator>
  );
}

const AppointmentsStack = createStackNavigator<AppointmentsParamList>();
function AppointmentsNavigator() {
  return (
    <AppointmentsStack.Navigator>
      <AppointmentsStack.Screen
        name="Appointments"
        component={Appointment}
        options={{ headerTitle: 'Appointments' }}
      />
      <AppointmentsStack.Screen
        name="VirtualQueue"
        component={VirtualQueue}
      // options={{ headerTitle: 'Appointments' }}
      />
    </AppointmentsStack.Navigator>
  );
}

const BookStack = createStackNavigator<BookParamList>();
function BookNavigator() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen
        name="Book"
        component={Book}
        options={{ headerTitle: 'Book' }}
      />
      <BookStack.Screen
        name="AvaliableClinics"
        component={AvaliableClinics}
        options={{ headerTitle: 'Avaliable Clinics' }}
      />
      <BookStack.Screen
        name="Calendar"
        component={Calendar}
        options={({ route }) => ({ title: route.params.place + " Availability" })}
      />
    </BookStack.Navigator>
  );
}

const MedicationStack = createStackNavigator<MedicationParamList>();
function MedicationNavigator() {
  return (
    <MedicationStack.Navigator>
      <MedicationStack.Screen
        name="Medication"
        component={Medication}
        options={{ headerTitle: 'Medication' }}
      />
    </MedicationStack.Navigator>
  );
}

const UserStack = createStackNavigator<UserParamList>();
function UserNavigator() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="User"
        component={User}
        options={{ headerTitle: 'User' }}
      />
      <UserStack.Screen
        name="HealthInsights"
        component={HealthInsights}
        options={{ headerTitle: 'Health Insights' }}
      />
    </UserStack.Navigator>
  );
}

const CalendarStack = createStackNavigator<UserParamList>();
  function CalendarNavigator() {
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen
        name="User"
        component={User}
        options={{ headerTitle: 'Calendar' }}
      />
    </CalendarStack.Navigator>
  );
}

