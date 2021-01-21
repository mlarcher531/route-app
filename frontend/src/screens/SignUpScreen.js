import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignUpScreen = ({ navigation }) => {

    const { state, signUp, signIn, signOut } = useContext(AuthContext)

    return (
        <View style={styles.container}>
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