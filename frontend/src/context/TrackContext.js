import createDataContext from './createDataContext'
import trackerApi from '../api/tracker'


const trackReducer = (state, action)=> {
    switch (action.type) {
        case 'GET_TRACKS':
            return action.payload
        default:
            return state
    }
}


const getTracks = (dispatch) =>{
    return async ()=>{
        const response = await trackerApi.get('/tracks')
        dispatch({ type: 'GET_TRACKS', payload: response.data })
    }
}

const createTrack = (dispatch) =>{
    return async (name, locations)=>{
        await trackerApi.post('tracks', { name, locations})
    }
}

export const { Context, Provider } = createDataContext(trackReducer, { getTracks, createTrack}, [])