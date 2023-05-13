import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: rgb(185, 223, 152);
  font-family: 'Fredericka the Great', cursive;

  & > h1 {
    font-size: 3rem;
  }

  
  & > p {
    font-size: 2rem;
  }

  & a {
    color:rgb(73, 97, 51)
  }
  
  & a:hover {
    color:rgb(124, 55, 147)
  }
`

function Header() {
  return (
    <>
      <StyledHeader>
      <h1>Is it in season?</h1>
      <p><Link to="/">Home</Link></p>
      </StyledHeader>
    </>
  )
}

export default Header;