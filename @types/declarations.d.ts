import { BottomNavigation } from "react-native-material-ui";

declare namespace JSX {
    interface IntrinsicElements {
        BottomNavigation: BottomNavigation
    }
  }

declare global {
    namespace NodeJS {
      interface Global {
         weeklySteps: number;
         distanceText: string;
         timeVal: number;
      } 
    }
  }