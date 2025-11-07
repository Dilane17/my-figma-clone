import Image from "next/image";
import styles from "./page.module.scss";
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Data from "./components/Data";
import Organize from "./components/Organize";
import StepsSection from "./components/StepsSetion";
import AboutUsSection from "./components/AboutUsSection";
import Clients from "./components/Clients";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

// app/page.js

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Banner />
        <Header />
        <About />
        <Data />
        <Organize />
        <Clients />
        <StepsSection />
        <AboutUsSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
