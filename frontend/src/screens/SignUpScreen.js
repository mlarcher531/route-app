import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'

const SignUpScreen = ( {navigation}) => {

    return (
        <>
            <Text>SignUpScreen</Text>
            <Button
            title={'Go To SignIn'}
            onPress={()=> navigation.navigate('SignIn')}
            />
            <Button
            title={'Go To MainFlow'}
            onPress={()=> navigation.navigate('mainFlow')}
            />
        </>
    )

}

const styles = StyleSheet.create({})

export default SignUpScreen