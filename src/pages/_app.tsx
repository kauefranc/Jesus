import { AppProps } from 'next/app'
import { Header } from '../components/Header';
import { GlobalStyle } from '../styles/globalStyles';


function MyApp({ Component, pageProps } : any) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}

export default MyApp
