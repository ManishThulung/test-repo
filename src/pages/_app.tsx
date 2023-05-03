import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { inter, open_sans } from "@/utils/fonts";

function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} ${open_sans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default App;

