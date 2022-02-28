import React, {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ThemeContext = createContext({ toggleTheme: () => {}, theme: {} });
export const useTheme = () => useContext(ThemeContext);

type ThemeProps = "light" | "dark";

const ThemeProviders: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ThemeProps>(
    (localStorage.getItem("theme") ?? "light") as ThemeProps
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const theme = createTheme({
    palette: {
      mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Box bgcolor="background.default" minHeight="100vh" p={3}>
            {children}
          </Box>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default ThemeProviders;