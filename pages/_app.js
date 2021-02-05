import Layout from '../components/Layout'
import '../styles/globals.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeContext'

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
          <Component {...pageProps} />
    </Layout>



  )
}

export default MyApp
