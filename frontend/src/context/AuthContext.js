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
        case 'CLEAR_ERROR':
            return { ...state, errorMessage: '' }
        case 'SIGN_OUT':
            return { token: null, errorMessage: '' }
        default:
            return state
    }
}


const tryLocalSignIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token){
        dispatch({type: 'SET_TOKEN', payload: token})
        navigate('TrackList')
    } else {
        navigate('SignUp')
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'CLEAR_ERROR' })
    console.log('i ran')
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
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signin', { email, password })
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'SET_TOKEN', payload: response.data.token })
            navigate('TrackList')
        } catch (err) {
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with Sign In' })
        }
    }
}

const signOut = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token')
        dispatch({ type: 'SIGN_OUT' })
        navigate('loginFlow')
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signIn, signOut, signUp, clearErrorMessage, tryLocalSignIn },
    { token: null, errorMessage: '' }
)