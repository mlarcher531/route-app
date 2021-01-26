import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import { Button } from 'react-native-elements'
import Spacer from '../components/Spacer'
import { SafeAreaView } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

const AccountScreen = () => {

    const { signOut } = useContext(AuthContext)

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
                <Text style={styles.text}>AccountScreen</Text>
                <Spacer>
                    <Button
                        title={"Sign Out"}
                        onPress={signOut}
                    />
                </Spacer>
        </SafeAreaView>
    )

}

AccountScreen.navigationOptions = {
    title: 'Account',
    tabBarIcon: <FontAwesome name="gear" size={20} />
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 25,
    }
})

export default AccountScreen