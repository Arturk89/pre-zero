import { createTheme } from '@mui/material/styles'

const palette = {
  primary: {
    light: '#335C63',
    main: '#01343c',
    dark: '#00242A'
  },
  error: {
    light: '#FF8078',
    main: '#FF6157',
    dark: '#B2433C'
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
    light: '#33CCFF',
    main: '#00c0ff',
    dark: '#0086B2'
  }
}

const typography = {
  h5: {
    fontWeight: 500,
    fontSize: 26,
    letterSpacing: 0.5
  }
}

const shape = {
  borderRadius: 8
}

const mixins = {
  toolbar: {
    minHeight: 48
  }
}

const theme = createTheme({
  palette,
  typography,
  shape,
  mixins
})

const components = {
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
    defaultProps: {
      disableRipple: true
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
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

const themeOverride = {
  ...theme,
  ...components
}

export { themeOverride as theme }
