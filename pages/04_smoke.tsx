import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist as syntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from '../styles/r3f.module.css';
import Smoke from './demos/04-smoke';

import SmokeSource from '!!raw-loader!./demos/04-smoke';
import SmokeOnlySource from '!!raw-loader!./demos/04-smoke-only';

const sceneLookup = {
  smoke: [Smoke, SmokeOnlySource],
  polish: [Smoke, SmokeOnlySource],
  full: [Smoke, SmokeSource],
} as const;

const ThreeDConcepts: NextPage = () => {
  const [scene, setScene] = useState<keyof typeof sceneLookup>('smoke');
  const [Scene, Source] = sceneLookup[scene] ?? [];

  return (
    <div className={styles.container}>
      <Head>
        <title>@react-three/fiber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Adding smoke to our rocket 💨</h3>
        <form onChange={(e) => setScene(e.target.value)}>
          <label>
            <input type="radio" value="stars" checked={scene === 'smoke'} />{' '}
            Smoke
          </label>
          <label>
            <input type="radio" value="animated" checked={scene === 'polish'} />{' '}
            Post processing polish
          </label>
          <label>
            <input type="radio" value="full" checked={scene === 'full'} />
            Final (full source)
          </label>
        </form>
        {Scene && Source && (
          <div className={styles.demo}>
            <div className={styles.code}>
              <SyntaxHighlighter
                language="typescript"
                style={syntaxStyle}
                customStyle={{ fontSize: '1.2em' }}
              >
                {Source}
              </SyntaxHighlighter>
            </div>
            <div className={styles.scene}>
              <Scene />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ThreeDConcepts;
