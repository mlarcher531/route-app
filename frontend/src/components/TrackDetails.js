import React from 'react'
import { Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import TrackListScreen from '../screens/TrackListScreen'

const TrackDetails = ({ track }) => {
    
    const startPoint = track.locations[0]
    const endPoint = track.locations.slice(-1)[0]

    console.log('START', startPoint, 'ENDDDD', endPoint)
    const convertTimestamp = (timestamp) => {
        return new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)
    }

    return (
        <>
        <Text> Date: {Intl.DateTimeFormat('en-US', {year: '2-digit', month: '2-digit', day: '2-digit'}).format(startPoint.timestamp)}</Text>
        <Text> Start Time: {convertTimestamp(startPoint.timestamp)} </Text>
        <Text> End Time: {convertTimestamp(endPoint.timestamp)} </Text>
        </>
    )

}

export default TrackDetails