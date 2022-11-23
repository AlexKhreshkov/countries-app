import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'


const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: (--colors-ui-base);
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
`

const Title = styled.a`
    color: var(--color-text);
    font-size: var(--fs-sm);
    text-decoration: none;
    font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.div`
    font-size: var(--fs-sm);
    font-weight: var(--fw-normal);
`

export default function Header() {

    const [theme, setTheme] = useState('ligth')

    useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    function changeTheme() {
        setTheme(theme === 'ligth' ? 'dark' : 'ligth')
    }

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ModeSwitcher onClick={changeTheme}>
                        {
                            theme === 'ligth'
                                ?
                                <IoMoonOutline />
                                :
                                <IoMoon />
                        }
                        <span style={{ marginLeft: '10px' }}>{theme.toUpperCase()} MODE</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
