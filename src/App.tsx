import React, { Suspense } from 'react'
import { ApplicationWrapper } from './components/common/app-layout'
import { AppBarHeader } from './components/header/app-bar.component'
import { Sidebar } from './components/sidebar/sidebar-component'
import { Box, Button, AppBar, Link, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Example from './components/table/table-main'
import { RouterProvider, Routes } from 'react-router-dom'
import { routesConfig } from './routes/routes-config'

const drawerWidth = 220

let theme = createTheme({
  palette: {
    primary: {
      light: '#335C63',
      main: '#01343c',
      dark: '#00242A'
    },
    error: {
      light: '#C74834',
      main: '#BA1B02',
      dark: '#821201'
    },
    warning: {
      light: '#F08F47',
      main: '#ED741A',
      dark: '#A55112'
    },
    success: {
      light: '#A2C743',
      main: '#8BBA14',
      dark: '#61820E'
    },
    info: {
      light: '#527DC7',
      main: '#275DBA',
      dark: '#1B4182'
    }
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  mixins: {
    toolbar: {
      minHeight: 48
    }
  }
})

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#081627'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        contained: {
          boxShadow: 'none',
          '&:active': {
            boxShadow: 'none'
          }
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        // root: {
        //   marginLeft: theme.spacing(1)
        // },
        indicator: {
          height: 3,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 3,
          backgroundColor: theme.palette.common.white
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          // margin: '0 16px',
          minWidth: 0,
          padding: 0,
          [theme.breakpoints.up('md')]: {
            padding: 0,
            minWidth: 0
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: theme.spacing(1)
        }
      }
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255,255,255,0.15)'
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: '#8bba14'
          }
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: 14,
          fontWeight: theme.typography.fontWeightMedium
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: 'inherit',
          minWidth: 'auto',
          // marginRight: theme.spacing(2),
          '& svg': {
            fontSize: 20
          }
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: 32,
          height: 32
        }
      }
    }
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense>
        <RouterProvider router={routesConfig} />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
