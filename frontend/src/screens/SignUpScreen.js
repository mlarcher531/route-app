import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'

const SignUpScreen = ({ navigation }) => {

    return (
        <>
            <Spacer>
                <Text h3>Sign Up Here!</Text>
            </Spacer>
            <Input label="Email" />
            <Input label="Password" />
            <Spacer>
                <Button title="Sign Up" />
            </Spacer>
        </>
    )

}

const styles = StyleSheet.create({})

export default SignUpScreen