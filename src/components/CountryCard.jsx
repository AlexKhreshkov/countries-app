import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: var(--colors-ui-base);
    margin: 0px 35px 30px 0;
    border-radius: 20px;
    flex: 0 0 200px;
`

const CardImage = styled.img`
    width: 200px;
    height: 100px;
`

const CardBody = styled.div`
    margin: 10px 0px 10px 15px;
`

const CardTitle = styled.h3`
    font-size: 20px;
    margin: 10px 0;
    font-weight: var(--fw-normal);
`

const CardList = styled.ul``

const CardListItem = styled.li`
    margin-bottom: 5px;
`

export default function CountryCard({ img, name, info = [], onClick }) {
    return (
        <Wrapper>
            <CardImage src={img} alt={name} />
            <CardBody>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardList>
                    {info.map(el => (
                        <CardListItem key={el.title}>
                            <b>{el.title}:</b> {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    )
}
