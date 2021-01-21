import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, routeName, linkText }) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        textAlign: 'center'
    }
})

export default withNavigation(NavLink)