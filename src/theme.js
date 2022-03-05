import { createTheme } from '@mui/material/styles';

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

function GetPaddedStyle(){
  const style = { padding: '2em', width: '80%', maxWidth: 1500, margin: 'auto' }

  return style
}


export { GetTheme, GetPaddedStyle }