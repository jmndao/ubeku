import "../styles/globals.css";
import type { AppProps } from "next/app";
import ThemeProvider from "../context/theme/ThemeContext";
import { GlobalProvider } from "../context/global";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default MyApp;
