import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import Map from '../components/Map'
import { requestPermissionsAsync } from 'expo-location'

const TrackCreateScreen = () => {

    const [err, setErr] = useState(null)

    
    const startWatching = async () => {
        try {
            const { granted } = await requestPermissionsAsync();
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (error) {
            setErr(error);
        }
    };

    useEffect(()=>{
        startWatching()
    },[])
    
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text h3>Create A Track</Text>
            <Map />
            {err ? <Text style={styles.error}>Please Enable Location Services</Text> : null}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    error:{
        color: 'red',
        textAlign: 'center',
        fontSize: 15,
    }
})

export default TrackCreateScreen