import Head from 'next/head';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import About from '@/app/components/About';
import Projects from '@/app/components/Projects';
import Contact from '@/app/components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mi Portafolio</title>
        <meta name="description" content="Portafolio personal de [Tu Nombre]" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
