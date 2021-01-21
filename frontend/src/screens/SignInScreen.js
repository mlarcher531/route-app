import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignInScreen = ({ navigation }) => {

    const { state, signIn } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <AuthForm
                headerText={'Sign in to Tracker!'}
                errorMessage={state.errorMessage}
                buttonText={"Sign In"}
                onSubmit={signIn}
            />
            <NavLink
                routeName={'SignUp'}
                linkText={"Don't Have an Account? Sign Up Instead"}
            />
        </View>
    )
}

SignInScreen.navigationOptions = () => {
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

export default SignInScreen