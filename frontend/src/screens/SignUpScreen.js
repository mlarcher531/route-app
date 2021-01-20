import React, { useState, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'

const SignUpScreen = ({ navigation }) => {

    const { state, signUp, signIn, signOut } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <View style={styles.container}>
            <Spacer>
                <Text h3>Sign Up Here!</Text>
            </Spacer>
            <Input
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
            />
            <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
            />
            {state.errorMessage
                ? <Text style={styles.errorMessage}>{state.errorMessage}</Text>
                : null}
            <Spacer>
                <Button
                    title="Sign Up"
                    onPress={() => signUp({ email, password })}
                />
            </Spacer>
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 250,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginBottom: 15,
    }
})

export default SignUpScreen