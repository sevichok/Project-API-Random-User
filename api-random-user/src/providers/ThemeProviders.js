import React, { useState, useContext, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


export const ColorModeContext = createContext({ toggleColorMode: () => { } });
export const useModeContext = () => useContext(ColorModeContext);

const ToggleColorMode = ({ children }) => {

    const [check, setCheck] = useState(true);
    const colorMode = () => ({
        toggleColorMode: () => {
            setCheck(!check);
        },
        theme: "light"| "dark",
    });

    const mode = (check ? "light" : "dark");

    const theme = createTheme({
        palette: {
            mode,
        },
    });

    return (<>
        <ColorModeContext.Provider value={theme}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    </>
    );
}

export default ToggleColorMode

    // const [mode, setMode] = useState('light');
    // const colorMode = () => ({
    //     toggleColorMode: () => {
    //         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    //     },
    // });