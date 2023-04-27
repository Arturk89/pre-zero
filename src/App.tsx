import React from 'react'
import { ApplicationWrapper } from './components/common/app-layout'
import { AppBarHeader } from './components/header/app-bar.component'
import { Sidebar } from './components/navigator/sidebar-component'
import { Box, CssBaseline, useMediaQuery } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const drawerWidth = 256

let theme = createTheme({
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3'
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
        root: {
          marginLeft: theme.spacing(1)
        },
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
          margin: '0 16px',
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
          marginRight: theme.spacing(2),
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
      <ApplicationWrapper>
        <Box sx={{ display: 'flex', height: '100%' }}>
          {/* <CssBaseline /> */}
          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              sx={{ display: { sm: 'block', xs: 'none' } }}
            />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <AppBarHeader />
            <Box sx={{ width: '100%', flex: 1, background: '#f4f7fb' }}>
              <Box
                sx={{
                  padding: '24px',
                  height: '100%'
                }}>
                <Box sx={{ border: '1px solid black', height: '100%' }}>aa</Box>
              </Box>
            </Box>
            {/* <Box component="main" sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}>
            <Content />
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: '#eaeff1' }}>
            <Copyright />
          </Box> */}
          </Box>
        </Box>
      </ApplicationWrapper>
    </ThemeProvider>
  )
}

export default App
