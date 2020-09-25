import * as Location from 'expo-location';



function callDirectionMatrix(origin: string, destination: string) {
    console.log("https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="
        + origin +
        "&destinations=" + destination + "&key=AIzaSyBV9SwsndxAtlO5aKpUcetk3kTVQlX7pcA")
    return fetch(
        "https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins="
        + origin +
        "&destinations=" + destination + "&key=AIzaSyBV9SwsndxAtlO5aKpUcetk3kTVQlX7pcA")
        .then(x => { console.log(x); return x })
        .then(response => response.json())
        .then(data => console.log(data.rows[0].elements[0].distance.text + ", " + data.rows[0].elements[0].duration.text))
        .catch((e) => "Unable to retrieve data from google services: " + e)
}


function recievingData(e: any) {
    if (e.status == "ok") {
        return e.rows[0].elements[0].duration.value;
    }
    return null;
}

export async function getLocGeocode(): Promise<Location.LocationGeocodedAddress[]> {
    let loc = null;
    try {
        loc = await getLoc();
    }
    catch {
        return Promise.reject();
    }
    return Location.reverseGeocodeAsync({ latitude: loc.coords.latitude, longitude: loc.coords.longitude })
        .then((x) => { console.log(x); return x })
}

export async function getTravelTime(source: Location.LocationGeocodedAddress) {
    // we know it is hard coded
    return getTravelTimeInternal(source,
        {
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
        })
}

async function getTravelTimeInternal(source: Location.LocationGeocodedAddress, dest: Location.LocationGeocodedAddress) {
    let srcAddress = source.name + " " + source.city + " " + source.region + " " + source.postalCode;
    let destAddress = dest.name + " " + dest.city + " " + dest.region + " " + dest.postalCode;
    srcAddress = srcAddress.replace(/ /g, "+");
    destAddress = destAddress.replace(/ /g, "+");

    return callDirectionMatrix(srcAddress, destAddress);
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
export async function getTravel(): Promise<string> {
    return getTravelTime(await getLocGeocode().then(x => x[0]));
}
