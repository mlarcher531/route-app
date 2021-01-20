import { AsyncStorage } from 'react-native'
import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return { ...state, errorMessage: action.payload }
        case 'SET_TOKEN':
            return { errorMessage: '', token: action.payload }
        default:
            return state
    }
}

const signUp = (dispatch) => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password })
            // console.log(response.data)
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'SET_TOKEN', payload: response.data.token })
            navigate('TrackList')
        } catch (err) {
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with Sign Up' })
        }
    }
}

const signIn = (dispatch) => {
    return ({ email, password }) => {

    }
}

const signOut = (dispatch) => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut, signUp },
    { token: null, errorMessage: '' }
)