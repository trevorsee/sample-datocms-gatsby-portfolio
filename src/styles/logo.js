import React from 'react'
import styled from 'styled-components'

export const Logo = styled.div`
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  position: fixed;
  color: white;
  font-weight: 900;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  backface-visibility: hidden;
  width: 100vw;
  text-align: center;

  :focus,
  :hover {
    transform: scale(1.025);
  }

  @media (min-width: 40em) {
    text-align: left;
    font-size: 2rem;
    width: auto;
  }
`
