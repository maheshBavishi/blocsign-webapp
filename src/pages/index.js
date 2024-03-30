import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Homepage from "@/module/home";
import Footer from "@/shared/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BLOCSIGN</title>
        <meta name="description" content="BLOCSIGN Secured Smart Documents" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage/>
      <Footer/>
    </>
  );
}
