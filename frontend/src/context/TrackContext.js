import createDataContext from './createDataContext'

const trackReducer = (state, action)=> {
    switch (action.type) {
        default:
            return state
    }
}


const getTracks = (dispatch) =>{
    return ()=>{

    }
}

const createTrack = (dispatch) =>{
    return (name, locations)=>{
        console.log('saved:', name, locations.length)
    }
}

export const { Context, Provider } = createDataContext(trackReducer, { getTracks, createTrack}, [])