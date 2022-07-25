import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Demo from './demos/04-smoke-with-effects';

const basePath = process.env.NODE_ENV === 'production' ? '/r3f-spaceship' : '';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Build a 3D spaceship 🚀</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <Demo showControls={false} />
        </div>

        <h1 className={styles.title}>Build a 3D spaceship 🚀</h1>

        <p className={styles.description}>
          Follow the links below for a step-by-step guide to create the this
        </p>

        <div className={styles.row}>
          <a href={`${basePath}/01_3d-concepts`} className={styles.card}>
            <h2>01. 🤓 &rarr;</h2>
            <p>Basic 3D programming concepts.</p>
          </a>

          <a href={`${basePath}/02_r3f`} className={styles.card}>
            <h2>02. 🚀 &rarr;</h2>
            <p>3D in React with @react-three/fiber</p>
          </a>

          <a href={`${basePath}/03_stars`} className={styles.card}>
            <h2>03. 💫 &rarr;</h2>
            <p>Animate stars in our scene</p>
          </a>

          <a href={`${basePath}/04_smoke`} className={styles.card}>
            <h2>04. 💨 &rarr;</h2>
            <p>Add particle smoke to our rocket</p>
          </a>

          <div className={styles.card}>
            <h2>Resources</h2>
            <ul>
              <li>
                <a target="_blank" rel="noreferrer" href="https://threejs.org/">
                  three.js
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/pmndrs/react-three-fiber"
                >
                  @react-three/fiber
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://threejs-journey.com/"
                >
                  threejs-journey ($100)
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/0xca0a"
                >
                  0xca0a (r3f creator)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
