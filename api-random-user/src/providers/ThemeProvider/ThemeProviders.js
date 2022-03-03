import React, { useState, useContext, createContext, useCallback, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from "@mui/material";

export const ThemeContext = createContext({});
export const useTheme = () => useContext(ThemeContext);

const ThemeProviders = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

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
                <Box bgcolor='background.default' minHeight="100vh" p={3}>{children}</Box>
            </ThemeContext.Provider >
        </ThemeProvider>
    </>
    );
}

export default ThemeProviders