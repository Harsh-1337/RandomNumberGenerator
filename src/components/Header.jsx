import React from "react";
import styled from "styled-components";

const MyHeader = styled.div`
    display:flex;
     justify-content: center;
     align-items:center;
     height:10vh;
  background-color:#E9EFC0;
  h1{
      margin:0;
      color:#4E944F;
      font-family:'Kanit', sans-serif;
      font-size:3rem;
  }
`

const Header = () =>{

    return <>
     <MyHeader>
         <h1>Random Number Generator</h1>
     </MyHeader>
    </>
}
export default Header;