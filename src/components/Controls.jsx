import React, { useState } from 'react'
import Search from './Search'


export default function Controls() {

    const [search, setSearch] = useState()

    return (
        <Search
            search={search}
            setSearch={setSearch}
        />
    )
}
