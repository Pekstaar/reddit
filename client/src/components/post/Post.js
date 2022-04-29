import React from 'react'
import Styled from "styled-components";
import Posts from '../posts/Posts';
export default function Post() {
    const Main = Styled.div`
    margin-top:20px;
    display:flex;
    justify-content:center;
    `
    return (
        <Main>
            <Posts />
        </Main>
    )
}
