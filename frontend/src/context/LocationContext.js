import createDataContext from './createDataContext'

const locationReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_LOCATION':
            return {...state, currentLocation: action.payload}
        default:
            return state
    }
}

const startRecording = (dispatch) => {
    return () =>{
        
    }
}

const stopRecording = (dispatch) => {
    return () =>{
        
    }
}

const addLocation = (dispatch) => {
    return (location) =>{
        console.log('this is tracking')
        dispatch({ type: 'ADD_LOCATION', payload: location})
    }
}


export const { Context, Provider } = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation },
    {recording: false, locations: [], currentLocation: null}
)