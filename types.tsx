export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Appointments: undefined;
  Book: undefined;
  Medication: undefined;
  User: undefined;
};
export type Services = "General" | "X-Ray" | "OB/GYN" | "Cardio" | "Pathology" | "Orthopedics"

export type AvaliableClinicsParamList = {
  type: string;
}

export type HomeParamList = {
  Home: undefined;
}

export type AppointmentsParamList = {
  Appointments: undefined;
  Upcoming: undefined;
  VirtualQueue: undefined;
}

export type BookParamList = {
  Book: undefined,
  AvaliableClinics: {
    service: Services
  },
  Calendar: undefined,
}

export type MedicationParamList = {
  Medication: undefined;
}

export type UserParamList = {
  User: undefined;
  HealthInsights: undefined;
}