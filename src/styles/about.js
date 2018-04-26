import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: rgba(49,82,229,.9);
`;

export const Close = styled.img`
  text-shadow: 0 0 10px rgba(0,0,0,.5);
  margin: 2rem;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateZ(0);
  transition: transform .25s ease-out;
  backface-visibility: hidden;
  :focus,
  :hover {
    transform: scale(1.025);
  }
`

export const Block = styled.div`
  padding: 6rem 2rem 2rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }
  p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
  a {
    color: inherit;
    :focus,
    :hover {
      opacity: 0.6;
    }
  }
  ul {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    li {
      margin: 0.25rem 0;
    }
  }

  @media (min-width: 52em) {
    flex-direction: row;
  }
`

export const Left = styled.div`
  max-width: 50em;
  margin: 0;

  @media (min-width: 52em) {
    margin-right: 2rem;
  }
`

export const Right = styled.div`
max-width: 50em;
margin: 0;

@media (min-width: 52em) {
  margin-left: 2rem;
}`
