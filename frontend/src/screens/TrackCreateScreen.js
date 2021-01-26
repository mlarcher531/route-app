import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import TrackForm from '../components/TrackForm'

// import '../_mockLocation'

const TrackCreateScreen = ({ isFocused }) => {

    const { state: {recording}, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])

    const [err] = useLocation(isFocused || recording, callback)


    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create A Track</Text>
            <Map />
            {err ? <Text style={styles.error}>Please Enable Location Services</Text> : null}
            <TrackForm />
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

export default withNavigationFocus(TrackCreateScreen)