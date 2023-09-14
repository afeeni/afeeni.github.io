import '@mui/material/styles';
import { ThemeProver } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { theme } from '../styles/theme';
import 'tailwindcss/tailwind.css'; 
// import { hydrate } from 'react-dom'


function MyApp({ Component, pageProps}) {
    return (
        <ThemeProvider theme={createTheme(theme)}>
        <Component {...pageProps} />
        </ThemeProvider>
    )
}