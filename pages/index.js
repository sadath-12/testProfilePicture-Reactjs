import AOS from 'aos'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import UploadImg from '../components/UploadImg'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  AOS.init()

  return (
    <>
      <Navbar />
      <Banner />
      <UploadImg />

      <div className="combine_section mt-5 pt-5">
        <Contact />
        <Footer />
      </div>
    </>
  )
}
