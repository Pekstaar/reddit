import React from 'react'
import styled from 'styled-components';
import Styled from "styled-components";
import "./nav.css"
export default function Nav() {
    const Main = styled.div`
display:flex;
height:80px;
justify-content:center;
align-items:center;
justify-content:space-between;
padding-left:10px;
padding-right:10px;
span{
font-size:30px;
text-transform:capitalize;
};
input{
    width:400px;
    padding:5px;
    border-radius:10px;
}
    `;
    const Nav = styled.div`
    button{
     border-radius:10px;
    padding:5px;
    width: 100px; 
    font-weight:bold;
    }
    `
    return (
        <Main>
            <span className='head'>reddit</span>
            <input placeholder='search' />
            <Nav className='Nav'>
                <button className="btn-primary">login</button> <button className='btn-success'>login</button>
            </Nav>
        </Main>
    )
}
