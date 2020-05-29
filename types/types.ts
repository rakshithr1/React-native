export interface Country{
    capital: string,
    name: string,
    population: number
    latlng: number[]
    flag: string
}

export interface Capital {
    temperature: number
    weather_icons : string[]
    wind_speed: number  
    precip: number
}

export interface CountryState {
    countries: Country[],
    countryInput: string
}
export interface CapitalState {
    capital: Capital
}
export interface RootState {
    country: CountryState,
    capital: CapitalState
}