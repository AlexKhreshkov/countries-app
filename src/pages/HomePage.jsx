import axios from "axios";
import { useState, useEffect } from "react";
import Controls from "../components/Controls";
import CountriesList from "../components/CountriesList";
import CountryCard from "../components/CountryCard";
import Loader from "../components/Loader";
import Main from "../components/Main";
import { ALL_COUNTRIES } from "../config";


export default function HomePage() {

    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(ALL_COUNTRIES)
            .then(response => setCountries(response.data))
            .then(() => setIsLoading(false))
    }, [])


    return (
        <>
            {isLoading
                ?
                <Loader />
                :
                <>
                    <Main>
                        <Controls />
                        <CountriesList>
                            {countries.map((country, index) => {
                                const countryInfo = {
                                    img: country.flags.png,
                                    name: country.name,
                                    info: [
                                        {
                                            title: 'Population',
                                            description: country.population.toLocaleString(),
                                        },
                                        {
                                            title: 'Region',
                                            description: country.region,
                                        },
                                        {
                                            title: 'Capital',
                                            description: country.capital,
                                        },
                                    ]
                                }
                                return <CountryCard
                                    key={index}
                                    {...countryInfo}
                                />
                            }
                            )}
                        </CountriesList>
                    </Main>
                </>
            }
        </>
    )
}
