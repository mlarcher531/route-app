import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'

const TrackForm = () => {

    const { state: { name, recording, locations }, startRecording, stopRecording, changeTrackName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()

    console.log('locations:', locations.length)
    return (
        <>
            <Spacer>
                <Input
                    placeholder={'Enter Name'}
                    onChangeText={changeTrackName}
                    value={name}
                />
            </Spacer>
            {recording
                ? <Button title={'Stop'} onPress={stopRecording} />
                : <Button title={'Start Recording'} onPress={startRecording}
                />}
                <Spacer />
            {!recording && locations.length
            ? <Button title={'Save Route'} onPress={saveTrack} />
            :null}
        </>
    )

}

export default TrackForm