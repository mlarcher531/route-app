import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'

const SignUpScreen = ({ navigation }) => {

    const { state, signUp, clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents onWillBlur={clearErrorMessage} />
            <AuthForm
                headerText={'Sign up for Tracker!'}
                errorMessage={state.errorMessage}
                buttonText={"Sign Up"}
                onSubmit={signUp}
            />
            <NavLink
                routeName={'SignIn'}
                linkText={"Already Have an Account? Sign In Instead"}
            />
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
    }
})

export default SignUpScreen