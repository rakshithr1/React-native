import { Dispatch } from "redux";
import axios from 'axios';
import config from '../../config';
import { Capital } from "../../types/types";

export const SET_CAPITAL = 'SET_CAPITAL';

export const fetchCapital = (capital: string) => {
    return async(dispatch:Dispatch) => {
        try{
            const response = await axios.get(`http://api.weatherstack.com/current?access_key=${config.API_KEY}&query=${capital}`);
            const capitalObj: Capital = response.data.current;
            dispatch({
                type: SET_CAPITAL,
                payload: {
                    temperature: capitalObj.temperature,
                    weather_icons : capitalObj.weather_icons,
                    wind_speed: capitalObj.wind_speed,
                    precip: capitalObj.precip
                }
            })
        }catch(err){
            throw err
        }
    }
}