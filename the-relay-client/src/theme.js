import { createTheme } from '@mui/material/styles';

// Utility file for common themes and styles

// Theme of the app
function GetTheme(){
    const theme = createTheme({
        palette: {
          primary: {
            main: '#03a9f4',
          },
          secondary: {
            main: '#f44336',
          },
        },
      });
    return theme
}

// Style for most full-page components
function GetPaddedStyle(){
  const style = { padding: '1em', width: '80%', maxWidth: 1500, margin: 'auto' }

  return style
}

export { GetTheme, GetPaddedStyle }