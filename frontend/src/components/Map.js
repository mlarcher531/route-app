import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {

    const { state: { currentLocation, locations } } = useContext(LocationContext)

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    return (
        <Spacer>
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={25}
                strokeColor='rgba(158,158,255,1.0)'
                fillColor='rgba(158,158,255,0.3)'
            />
            <Polyline 
            coordinates={locations.map(location => location.coords)}
            />
        </MapView>
        </Spacer>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
})

export default Map