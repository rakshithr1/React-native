import Country from "../../screens/Country"
import { SET_COUNTRY } from "../action/countryActions"
import { CountryState } from "../../types/types"

const initialState: CountryState = {
    countries: [],
    countryInput: ''
}

export const countryReducer = (state = initialState,action: any) : CountryState =>{
    switch(action.type){
        case SET_COUNTRY: return {
            countryInput: action.payload.input,
            countries: [...action.payload.countries]
        }
        default: return state
    }
}