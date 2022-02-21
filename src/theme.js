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


export default GetTheme