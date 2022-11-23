import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const LoaderContent = styled.div`
    margin-top: 200px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 3px dashed black;
    animation: rotate 2s infinite linear;

    @keyframes rotate {
    from {
        transform: rotate(0deg) scale(1);
    }
    to {
        transform: rotate(360deg) scale(1.4);
    }
}
`

export default function Loader() {
    return (
        <Wrapper>
            <LoaderContent />
        </Wrapper>
    )
}
