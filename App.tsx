import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import * as Location from 'expo-location';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXUmsXC1r1mg5uuh7G5jamafcWul9YRSM",
  authDomain: "mediplus-1f427.firebaseapp.com",
  databaseURL: "https://mediplus-1f427.firebaseio.com",
  projectId: "mediplus-1f427",
  storageBucket: "mediplus-1f427.appspot.com",
  messagingSenderId: "1065801771983",
  appId: "1:1065801771983:web:c0b4d908a9e67ee5bac0ba",
  measurementId: "G-BVEF0GB2R2"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
