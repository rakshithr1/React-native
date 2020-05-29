import { CapitalState } from "../../types/types"
import { SET_CAPITAL } from "../action/capitalActions"

const initialState: CapitalState = {
    capital: {
        temperature: 0,
        weather_icons : [''],
        wind_speed: 0 ,
        precip: 0
    }
}

export const capitalReducer = (state = initialState,action: any):CapitalState =>{
    switch(action.type){
        case SET_CAPITAL: return {
            ...state,capital: action.payload
        }
        default: return state
    }
}