import React from 'react'
import { Suspense } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { RouterProvider } from 'react-router-dom'
import { routesConfig } from './routes/routes-config'
import { theme } from 'config/material-ui'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Suspense> */}
      <RouterProvider router={routesConfig} />
      {/* </Suspense> */}
    </ThemeProvider>
  )
}

export default App
