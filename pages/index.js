import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={`container full-height-grow`}>
      <Head>
        <title>A Better Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="main-header">
        <a href="/" class="brand-logo">
          {/* <img src="images/logo.png" /> */}
          <div class="brand-logo-name">Breath Works</div>
        </a>
        {/* <nav class="main-nav">
          <ul>
            <li>
              <a href="discover.html">Discovery</a>
            </li>
            <li>
              <a href="join.html">Join</a>
            </li>
          </ul>
        </nav> */}
      </header>
      <section class="home-main-section">
        <div class="img-wrapper">
          <div class="lady-image"></div>
        </div>
        <div class="call-to-action">
          <h1 class="title">Feel Amazing</h1>
          <span class="subtitle">With your mind...</span>
          <a href="/join.html" class="btn">
            Follow your Breath
          </a>
        </div>
      </section>

      <div class="home-page-circle-1"></div>
      <div class="home-page-circle-2"></div>
      <div class="home-page-circle-3"></div>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
