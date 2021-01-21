import * as Location from 'expo-location'

const tenMeterWithDegrees = 0.0001

const getLocation = (increment) => {
    return {
        timestamp: 8675309,
        coords:{
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: -95.42318052904865 + increment * tenMeterWithDegrees,
            latitude: 29.701408478968254 + increment * tenMeterWithDegrees,
        }
    }
}

let counter = 0
setInterval(()=> {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    })
    counter++
}, 1000)