import React from 'react'
import "./middle.css"
import styled from 'styled-components'

export default function Middle() {
    const Main = styled.div`
    display:flex;
    height:50px;
    background-color: antiquewhite;
    justify-content:center;
    align-items:center;
    span{
        font-size:24px;
        font-family: 'Courier New', Courier, monospace;
        text-tranfomation:capitalize;
    }
    `;
    return (
        <Main>
            <span>top treding today</span>
        </Main>
    )
}
