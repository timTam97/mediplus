import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              Home: 'home',
            },
          },
          Appointments: {
            screens: {
              Appointments: 'appointments',
            },
          },
          Book: {
            screens: {
              BookScreen: 'book',
            },
          },
          Medication: {
            screens: {
              MedicationScreen: 'medications',
            },
          },
          User: {
            screens: {
              UserScreen: 'user',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
