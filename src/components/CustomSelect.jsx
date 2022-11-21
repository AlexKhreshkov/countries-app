import React from 'react'
import styled from 'styled-components'
import Select  from 'react-select/dist/declarations/src/Select'

export const CustomSelect = styled(Select).attrs({
    styles: {
        control: (provided) => ({
            ...provided,
            background: var(--colors-ui-base)
        }),
        option: () => ({

        }),
    },

})
