import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Header from '../components/header'
import {Main} from '../components/main'
import {Footer} from '../components/footer'

const GlobalStyle = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,100&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Roboto', sans-serif;
}
`

export default function index() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
