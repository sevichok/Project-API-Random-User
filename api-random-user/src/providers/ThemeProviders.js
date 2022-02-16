import React, { useState, useContext, createContext, useCallback } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const ThemeContext = createContext({});
export const useTheme = () => useContext(ThemeContext);

const ThemeProviders = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });
    const lightTheme = createTheme({
        palette: {
            mode: 'light',
        },
    });

    return (<>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider >
        </ThemeProvider>
    </>
    );
}

export default ThemeProviders

    // const [mode, setMode] = useState('light');
    // const colorMode = () => ({
    //     toggleColorMode: () => {
    //         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    //     },
    // });