import { Dispatch } from "redux";
import axios from 'axios';
import { Country } from "../../types/types";

export const SET_COUNTRY = 'SET_COUNTRY';

export const fetchCountry = (input?: string) => {
    return async (dispatch:Dispatch,getState: Function) => {
        try{
            if(input == undefined){
                input = getState().country.countryInput;
                if(input == ''){
                    throw new Error('Enter a valid country name');
                }
            }
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${input}`);
            const countries: Country[] = response.data.map((country: any)=>{
                return {
                    capital: country.capital,
                    name: country.name,
                    population: country.population,
                    latlng: country.latlng,
                    flag: country.flag
                }
            });
            dispatch({
                type: SET_COUNTRY,
                payload: {
                    countries: countries,
                    input: input
                }
            });
        }catch(err){
            throw err
        }
    }
}