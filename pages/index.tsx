import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'
import Header from '../app/containers/header'
import Footer from '../app/containers/footer'
import Main from '../app/containers/main'
import About from '../app/containers/about'
import Technologies from '../app/containers/technologies'
import Steps from '../app/containers/steps'
import Faq from '../app/containers/faq'
import Review from '../app/containers/review'
import Gallery from '../app/containers/gallery'
import Contact from '../app/containers/contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Main />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Technologies />
        </section>
        <section>
          <Steps />
        </section>
        <section>
          <Faq />
        </section>
        <section>
          <Review />
        </section>
        <section>
          <Gallery />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
