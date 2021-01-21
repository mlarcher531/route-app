import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'

const AccountScreen = () => {

    const { signOut } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text style={styles.text}>AccountScreen</Text>
            <Spacer>
                <Button
                    title={"Sign Out"}
                    onPress={signOut}
                />
            </Spacer>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    },
    text:{
        textAlign: 'center',
        fontSize: 25,
    }
})

export default AccountScreen