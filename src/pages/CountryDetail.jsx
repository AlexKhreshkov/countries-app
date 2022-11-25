import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IoArrowBack } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import CountryDetailContent from '../components/CountryDetailContent'
import Loader from '../components/Loader'
import Main from '../components/Main'
import { ALL_COUNTRIES, ALL_COUNTRIES_APLHA3CODE, searchByCountry } from '../config'
import { addCountries } from '../store/counrtiesSlice'

export default function CountryDetail() {
  const params = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const fromPage = location.state?.from?.pathname || '/'

  const [country, setCountry] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const countries = useSelector(state => state.countries.countries)
  const dispatch = useDispatch()


  useEffect(() => {

    if (countries.length === 0) {
      axios.get(ALL_COUNTRIES)
        .then(response => dispatch(addCountries(response.data)))
        .then(() => axios.get(searchByCountry(params.name))
          .then(response => setCountry(response.data[0]))
          .then(() => setIsLoading(false)))
    }
    else {
      axios.get(searchByCountry(params.name))
        .then(response => setCountry(response.data[0]))
        .then(() => setIsLoading(false))
    }

  }, [params])


  return (
    <>
      {isLoading
        ?
        <Loader />
        :
        <Main>
          <Button onClick={() => navigate(fromPage, { replace: false })}>
            <IoArrowBack />back
          </Button>
          <CountryDetailContent countries={countries} {...country} />
        </Main>
      }
    </>
  )
}
