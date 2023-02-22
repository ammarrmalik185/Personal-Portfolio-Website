import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/globalComponents/Header";
import Footer from "../components/globalComponents/Footer";
import Head from "next/head";
const staticData = require("../staticData.json")

function MyApp({ Component, pageProps }) {
  return <div>
    <Head>
      <title>{staticData.websiteData.title}</title>
      <meta name="description" content={staticData.websiteData.description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
