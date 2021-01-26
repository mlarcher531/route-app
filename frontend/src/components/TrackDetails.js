import React from 'react'
import { Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import TrackListScreen from '../screens/TrackListScreen'
import { getPathLength } from 'geolib'
import Spacer from './Spacer'

const TrackDetails = ({ track }) => {
    
    const startPoint = track.locations[0]
    const endPoint = track.locations.slice(-1)[0]

    const convertTimestamp = (timestamp) => {
        return new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
    }

    const getTotalDistance = () => {
         const coordsList = track.locations.map(location => {
             let obj = { latitude: location.coords.latitude, longitude: location.coords.longitude}
             return obj
         })
         return (getPathLength(coordsList) * 0.000621371192).toFixed(2) + ' ' + 'miles'
    }

    return (
        <>
        <Spacer>
        <Text> Date: {Intl.DateTimeFormat('en-US', {year: '2-digit', month: '2-digit', day: '2-digit'}).format(startPoint.timestamp)}</Text>
        <Text> Start Time: {convertTimestamp(startPoint.timestamp)} </Text>
        <Text> End Time: {convertTimestamp(endPoint.timestamp)} </Text>
        <Text> Route Length: {getTotalDistance()}</Text>
        </Spacer>
        </>
    )

}

export default TrackDetails