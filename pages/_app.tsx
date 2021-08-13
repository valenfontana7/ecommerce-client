import type { AppProps } from "next/app";
import IndexPage from "../components/Head";
import Header from "../components/Header";
import "../styles/main.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <IndexPage />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
