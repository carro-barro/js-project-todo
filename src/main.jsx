import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Theme } from './Theme.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'

import { App } from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)
