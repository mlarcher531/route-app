import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

// import '../_mockLocation'

const TrackCreateScreen = () => {

    const { addLocation } = useContext(LocationContext)

    const [err] = useLocation(addLocation)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create A Track</Text>
            <Map />
            {err ? <Text style={styles.error}>Please Enable Location Services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
    }
})

export default TrackCreateScreen