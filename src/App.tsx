import React from 'react'
import { ReactQuery } from 'config/react-query'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes/routes-config'
import { theme } from 'config/material-ui'

function App() {
  return (
    <ReactQuery>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routesConfig} />
      </ThemeProvider>
    </ReactQuery>
  )
}

export default App
