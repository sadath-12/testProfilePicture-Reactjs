import AOS from 'aos'
import {Navbar, Banner, UploadImg, Contact, Footer} from '../components'

export default function Home() {
  AOS.init()

  return (
    <>
      <Navbar/>
      <Banner/>
      <UploadImg/>

      <div className="combine_section mt-5 pt-5">
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}
