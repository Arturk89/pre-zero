import { createTheme } from '@mui/material/styles'

const palette = {
  primary: {
    light: 'rgb(73, 163, 241)',
    main: 'rgb(26, 115, 232)'
    // dark: '#00242A'
  },
  secondary: {
    light: 'rgb(66, 66, 74)',
    main: 'rgb(52, 71, 103)',
    dark: 'rgb(25, 25, 25)'
  },
  error: {
    light: 'rgb(239, 57, 53)',
    main: 'rgb(224, 67, 63)',
    dark: 'rgb(229, 57, 53)'
  },
  warning: {
    light: 'rgb(255, 467, 38)',
    main: 'rgb(251, 140, 0)'
    // dark: '#A55112'
  },
  success: {
    light: 'rgb(102, 187, 106)',
    main: 'rgb(76, 175, 80)',
    dark: 'rgb(67, 160, 71)'
  }
  // info: {
  //   light: '#33CCFF',
  //   main: '#00c0ff',
  //   dark: '#0086B2'
  // }
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
  // MuiDivider: {
  //   styleOverrides: {
  //     root: {
  //       backgroundColor: 'rgb(255,255,255,0.15)'
  //     }
  //   }
  // },
  // MuiListItemButton: {
  //   styleOverrides: {
  //     root: {
  //       '&.Mui-selected': {
  //         color: '#8bba14'
  //       }
  //     }
  //   }
  // },
  // MuiListItemText: {
  //   styleOverrides: {
  //     primary: {
  //       fontSize: 14,
  //       fontWeight: theme.typography.fontWeightMedium
  //     }
  //   }
  // },
  // MuiListItemIcon: {
  //   styleOverrides: {
  //     root: {
  //       color: 'inherit',
  //       minWidth: 'auto',
  //       '& svg': {
  //         fontSize: 20
  //       }
  //     }
  //   }
  // },
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
