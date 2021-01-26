import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return { ...state, currentLocation: action.payload }
        case 'START_RECORDING':
            return { ...state, recording: true }
        case 'TRACK_LOCATION':
            return { ...state, locations: [...state.locations, action.payload] }
        case 'STOP_RECORDING':
            return { ...state, recording: false }
        case 'CHANGE_NAME':
            return { ...state, name: action.payload }
        case 'RESET':
            return { ...state, name: '', locations: [] }
        default:
            return state
    }
}


const changeTrackName = (dispatch) => {
    return (name) => {
        dispatch({ type: 'CHANGE_NAME', payload: name })
    }
}

const startRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'START_RECORDING' })

    }
}

const stopRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'STOP_RECORDING' })
    }
}

const addLocation = (dispatch) => {
    return (location, recording) => {
        dispatch({ type: 'ADD_LOCATION', payload: location })
        if (recording) {
            dispatch({ type: 'TRACK_LOCATION', payload: location })
        }
    }
}

const reset = (dispatch) => {
    return () => {
        dispatch({ type: 'RESET' })
    }
}


export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation, changeTrackName, reset },
    { recording: false, locations: [], currentLocation: null, name: '' }
)