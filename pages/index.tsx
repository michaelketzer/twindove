import About from "../sections/about";
import Head from "next/head";
import Hero from "../sections/hero";
import NavBar from "../sections/navbar";
import { ReactElement } from "react";
import Services from "../sections/services";
import Why from "../sections/why";

export default function Home(): ReactElement {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="title"
          content="Twindove - Agribusiness Solution in Nigeria"
        />
        <meta
          name="description"
          content="Twindove Nigeria operate and provide services, solutions in transport, logistics, warehousing and related Agricbusiness."
        />

        <title>Twindove - Agribusiness Solutions</title>
      </Head>
      <header>
        <NavBar />
        <Hero />
      </header>

      <About />
      <Services />
      <Why />

      <style jsx>{`
        header {
          background-image: url(/hero1.webp);
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
