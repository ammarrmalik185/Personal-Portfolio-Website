import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/globalComponents/Header";
import Footer from "../components/globalComponents/Footer";

function MyApp({ Component, pageProps }) {
  return <div>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
  </div>
}

export default MyApp
