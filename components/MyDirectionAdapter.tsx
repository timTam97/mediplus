// One stop shop for location / mapview things

import * as Location from 'expo-location';
import { GOOGLE_API_KEY } from '../creds';

export type region = {
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number,
}


export const clinicLocation = {
    latitude: -37.837231,
    longitude: 144.996277,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
}

async function getLocGeocoded(): Promise<Location.LocationGeocodedAddress[]> {
    let loc = null;
    try {
        loc = await getLoc();
    }
    catch {
        return Promise.reject();
    }
    return Location.reverseGeocodeAsync({ latitude: loc.coords.latitude, longitude: loc.coords.longitude })
}

export async function getTravelTime(): Promise<Response> {
    let source = await getLocGeocoded().then(x => x[0])
    // we know it is hard coded
    let dest = {
        "city": "South Yarra",
        "country": "Australia",
        "district": null,
        "isoCountryCode": "AU",
        "name": "670 Chapel",
        "postalCode": "3141",
        "region": "VIC",
        "street": "Malcolm Street",
        "subregion": "Melbourne",
        "timezone": "Australia/Melbourne",
    }
    let srcAddress = source.name + " " + source.city + " " + source.region + " " + source.postalCode;
    let destAddress = dest.name + " " + dest.city + " " + dest.region + " " + dest.postalCode;
    srcAddress = srcAddress.replace(/ /g, "+");
    destAddress = destAddress.replace(/ /g, "+");
    console.log("about to fetch.");
    return fetch(
        "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="
        + srcAddress +
        "&destinations=" + destAddress + "&key=" + GOOGLE_API_KEY)
    // .then(response => response.json())
    // .then(data => console.log(data.rows[0].elements[0].distance.text + ", " + data.rows[0].elements[0].duration.text))
    // .catch((e) => "Unable to retrieve data from google services: " + e)
}


async function getLoc(): Promise<Location.LocationObject> {
    let lastLocation = await Location.getLastKnownPositionAsync({ maxAge: 60000, requiredAccuracy: 10 });
    if (lastLocation != null) {
        return lastLocation;
    }
    return Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation
    })
}
