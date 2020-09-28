import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {getTravelTime} from "./components/MyDirectionAdapter"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import * as Location from 'expo-location';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {
  useFonts,
  Lato_100Thin,
  Lato_100Thin_Italic,
  Lato_300Light,
  Lato_300Light_Italic,
  Lato_400Regular,
  Lato_400Regular_Italic,
  Lato_700Bold,
  Lato_700Bold_Italic,
  Lato_900Black,
  Lato_900Black_Italic,
} from '@expo-google-fonts/lato';

export default function App() {
  let ok = "potato";
  Location.requestPermissionsAsync().then(() => console.log("we have location perms. from app."));
  getTravelTime()
    .then((data) => data.json())
    .then((data) => {console.log(data); return data})
    .then((data) => console.log(data.rows[0].elements[0].distance.text))
  let [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_100Thin_Italic,
    Lato_300Light,
    Lato_300Light_Italic,
    Lato_400Regular,
    Lato_400Regular_Italic,
    Lato_700Bold,
    Lato_700Bold_Italic,
    Lato_900Black,
    Lato_900Black_Italic,
  });
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
