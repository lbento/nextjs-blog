import '../styles/global.css'
import '@adyen/adyen-web/dist/adyen.css';
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
  }

  export default App;