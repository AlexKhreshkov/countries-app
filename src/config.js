export const BASE_URL = 'https://restcountries.com/v2/'

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region,alpha3Code'

export const ALL_COUNTRIES_APLHA3CODE = BASE_URL + 'all?fields=name,alpha3Code'

export function searchByCountry(name) {
    return BASE_URL + `name/${name}`
}

export function searchCountryByCode(code) {
    return BASE_URL + `alpha/${code}`
}