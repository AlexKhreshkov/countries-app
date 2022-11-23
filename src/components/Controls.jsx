import React, { useState } from 'react'
import styled from 'styled-components'
import { CustomSelect } from './CustomSelect'
import Search from './Search'

const options = [
    { value: 'all', label: 'ALL' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' },
]

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export default function Controls({ search, region, setSearch, setRegion }) {


    return (
        <Wrapper>
            <Search
                search={search}
                setSearch={setSearch}
            />
            <CustomSelect
                options={options}
                placeholder="Search by region"
                isSearchable={false}
                value={region}
                onChange={setRegion}
            />
        </Wrapper>
    )
}
