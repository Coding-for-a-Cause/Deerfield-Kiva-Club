import "../styles/styles.scss"
import "../styles/leadership.scss"
import "../styles/home.scss";
import "../styles/loans.scss";
import "../styles/table.scss";
import { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>
}
