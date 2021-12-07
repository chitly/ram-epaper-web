import { ThemeProvider } from "styled-components";
import Theme, { GlobalStyle } from "../components/Theme";
import './App.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme} style={{ height: "100%" }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
