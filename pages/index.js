import Head from "next/head";
import Image from "next/image";
import { AgencySelection } from "../sections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agency selection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AgencySelection />
      </main>
    </div>
  );
}
