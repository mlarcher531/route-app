import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext'
import MapView, { Polyline } from 'react-native-maps'
import TrackDetails from '../components/TrackDetails'
import Spacer from '../components/Spacer'

const TrackDetailScreen = ({ navigation }) => {

    const { state } = useContext(TrackContext)
    const _id = navigation.getParam('_id')

    const track = state.find(track => track._id === _id)
    const initialCoords = track.locations[0].coords

    return (
        <>
            <Text style={styles.title}>{track.name}</Text>
            <Spacer>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                    ...initialCoords
                }}
            >
                <Polyline coordinates={track.locations.map((location) => location.coords)} />
            </MapView>
            </Spacer>
            <TrackDetails track={track} />
        </>
    )

}

TrackDetailScreen.navigationOptions = {
    title: `Details`
}

const styles = StyleSheet.create({
    map: {
        height: 300,
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        textTransform: 'capitalize'
    }
})

export default TrackDetailScreen