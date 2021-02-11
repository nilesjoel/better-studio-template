import Head from "next/head";

import Link from "next/link";
import styles from "../styles/ArtExampleCard.module.css";
import axios from "axios";

let pinataUrl = `https://gateway.pinata.cloud/ipfs/`;

export default function ArtExampleCard(props) {
  console.log(props);
  const { pinataData } = props;
  return (
    <div className={`container full-height-grow`}>
      <Head>
        <title>A Better Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="main-header">
        <a href="/" className="brand-logo">
          {/* <img src="images/logo.png" /> */}
          <div className="brand-logo-name">Breath Works</div>
        </a>
        <nav className="main-nav">
          <ul>
            <li>
              <Link href="/artConcept">Art Concept</Link>
            </li>
            <li>
              <Link href="/join">Join</Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className="home-main-section">
        {/* <div className="img-wrapper">
          <div className="lady-image"></div>
        </div>
        <div className="call-to-action">
          <h1 className="title">Feel Amazing</h1>
          <span className="subtitle">With your mind..</span>
          <a href="/join.html" className="btn">
            Follow your Breath
          </a>
        </div> */}
      </section>

      <section>
        {pinataData.map((item) => (
          <img
            src={pinataUrl + item.ipfs_pin_hash}
            alt={item.metadata.name}
            layout="intrinsic"
            width={"100%"}
            // height={500}
          />
        ))}
      </section>
      <div className="home-page-circle-1"></div>
      <div className="home-page-circle-2"></div>
      <div className="home-page-circle-3"></div>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

ArtExampleCard.getInitialProps = async (ctx) => {
  console.log(`${process.env.PINATA_SECRET}`);
  const res = await fetch("https://c3419.sse.codesandbox.io/dailyFocus");

  const json = await res.json();
  console.log("HERE", json);

  const config = {
    headers: {
      Authorization: `Bearer ${process.env.PINATA_SECRET}`,
      "Content-Type": "application/json"
    }
  };
  const v = {
    folio: {
      folio: "aldrich%",
      op: "like"
    }
  };
  console.log(config);
  let pinataData = {};
  try {
    console.log(`${process.env.pinata_api_secret}`);
    console.log(config);
    const res = await axios.get(
      // `https://api.pinata.cloud/data/pinList?status=pinned&metadata[name]=blogPost`,
      "https://api.pinata.cloud/data/pinList?status=pinned&metadata[keyvalues]=" +
        '{ "folio" : { "value" : "Aldrich", "op" : "eq"}}',
      config
    );
    pinataData = res.data.rows;
  } catch (error) {
    throw error;
  }

  return { pinataData };
  // return { stars: json };
};
