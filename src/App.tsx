import React from 'react'
import { ApplicationWrapper } from './components/common/app-layout'
import { AppBarHeader } from './components/header/app-bar.component'
import { Sidebar } from './components/navigator/sidebar-component'
import { Box, Button, AppBar, Link } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import Example from './components/table/table-main'

const drawerWidth = 220

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
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            <Sidebar
              PaperProps={{ style: { width: drawerWidth } }}
              sx={{ display: { sm: 'block', xs: 'none' } }}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <AppBarHeader />
            <Box sx={{ height: '30px' }}></Box>
            <Box
              sx={{
                width: '100%',
                flex: 1,
                background: 'rgba(1, 35, 40, 1)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  padding: '8px 24px 24px 24px',
                  height: '100%'
                }}
              >
                <Example />
              </Box>
            </Box>
          </Box>
        </Box>
      </ApplicationWrapper>
    </ThemeProvider>
  )
}

export default App
