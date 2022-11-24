import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.section`
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const CountryImgWrap = styled.div`
    margin-bottom: 30px;
`

const CountryFlag = styled.img`
    max-width: 450px;
`
const CountryInfoColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`

const CountryInfoTitle = styled.div`
    font-size: 30px;
    font-weight: var(--fw-bold); 
    margin: 0px 0px 20px 10px;
`

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

const List = styled.ul`
  margin: 0 40px 25px 10px;
`

const ListItem = styled.li`
  line-height: 1.8;
  font-size: 18px;
`

const BorderCountriesWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const BorderCountriesTitle = styled.div`
    line-height: 1.8;
    font-size: 18px;
    margin: 10px 10px;
`

const BorderItem = styled.div`
    padding: 10px 30px;
    margin: 0 10px 3px 0;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    display: flex;
    align-items: center;
    color: var(--color-text);
    cursor: pointer;
`


export default function CountryDetailContent(props) {
    const {
        countries = [],
        name,
        nativeName,
        flag,
        capital,
        population,
        region,
        subregion,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
    } = props;


    function getCountryNameByCode(border) {
        for (let country of countries) {
            if (country.alpha3Code.includes(border)) {
                return country.name
            }
        }
    }

    const navigate = useNavigate()

    return (
        <Wrapper>
            <CountryImgWrap>
                <CountryFlag src={flag} />
            </CountryImgWrap>
            <CountryInfoColumn>
                <CountryInfoTitle>{name}</CountryInfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native Name:</b> {nativeName}
                        </ListItem>
                        <ListItem>
                            <b>Population</b> {population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub Region:</b> {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital:</b> {capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top Level Domain</b>{' '}
                            {topLevelDomain.map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currency: </b>{' '}
                            {currencies.map((c) => (
                                <span key={c.code}>{c.name} </span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Languages: </b>{' '}
                            {languages.map((l) => (
                                <span key={l.name}>{l.name}{' '}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>
                <BorderCountriesWrap>
                    <BorderCountriesTitle><b>Border Countries:</b></BorderCountriesTitle>
                    {borders.length
                        ?
                        <>
                            {
                                borders.map(border =>
                                    <BorderItem
                                        key={border}
                                        onClick={() => navigate(`/country/${getCountryNameByCode(border)}`)}
                                    >
                                        {getCountryNameByCode(border)}
                                    </BorderItem>
                                )
                            }
                        </>
                        :
                        <BorderCountriesTitle>No borders</BorderCountriesTitle>
                    }
                </BorderCountriesWrap>
            </CountryInfoColumn>
        </Wrapper>
    )
}
