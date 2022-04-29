import React from 'react'
import img from "../../lap1.jpg"
import styled from 'styled-components'
export default function Posts() {

    const Main = styled.div`
    width:100vh;
    height:60vh;
    background-color:white;
    div{
        marging-top:20px;
    }
    button{
        padding:5px;
        background-color:gray;
        border-radius:10px;
    }
    `
    const Img = styled.div`
    margin-top:20px;
    display:flex;
    flex-direction:column;
    img{
        border-radius:20px;
    }
    margin-bottom:10px;
    `;
    const Last = styled.div`
    display:flex;
    justify-content:space-between;
    button{
        width:80px;
        border:radius:10px;
    };
    span{
        font-size:24px;
    }
    `;
    return (
        <Main>
            <Img>
                <Last><span>post by</span> <button>join</button></Last>
                <img src={img}
                    height={300} width={400} alt="photo"
                />
            </Img>
            <button>comment</button>

        </Main>
    )
}
