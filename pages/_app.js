import {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/main.css'
import 'aos/dist/aos.css'

function MyApp({Component, pageProps}) {

  // Lazy import bootstrap
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
