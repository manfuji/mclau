import Head from "next/head";
import Image from "next/image";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import Slides from "../components/Slides";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bravo Foods</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="w-100 h-100">
        <div className="mb-1">
          <Slides />
        </div>
        <HeroImage />
      </main>
    </div>
  );
}
