import React, { useContext } from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import { NavigationEvents } from 'react-navigation'


const TrackListScreen = ({ navigation }) => {

    const { state, getTracks } = useContext(TrackContext)

    return (
        <>
            <NavigationEvents onWillFocus={getTracks} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem bottomDivider >
                                <ListItem.Content>
                                    <ListItem.Title>
                                        {item.name}
                                    </ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )

}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({})

export default TrackListScreen