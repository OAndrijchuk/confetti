import { AboutUs, Contacts, Footer, Header, Hero, Reviews } from '@/modules';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
