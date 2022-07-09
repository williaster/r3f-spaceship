import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist as syntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from '../styles/r3f.module.css';
import Stars from './demos/03';
import AnimatedStars from './demos/03-animated';

import AnimatedStarsSource from '!!raw-loader!./demos/03-animated';
import StarsOnlySource from '!!raw-loader!./demos/03-stars-only';
import AnimatedStarsOnlySource from '!!raw-loader!./demos/03-animated-stars-only';

const sceneLookup = {
  stars: [Stars, StarsOnlySource],
  animated: [AnimatedStars, AnimatedStarsOnlySource],
  full: [AnimatedStars, AnimatedStarsSource],
} as const;

const ThreeDConcepts: NextPage = () => {
  const [scene, setScene] = useState<keyof typeof sceneLookup>('stars');
  const [Scene, Source] = sceneLookup[scene] ?? [];

  return (
    <div className={styles.container}>
      <Head>
        <title>@react-three/fiber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Adding stars to our scene 💫</h3>
        <form onChange={(e) => setScene(e.target.value)}>
          <label>
            <input type="radio" value="stars" checked={scene === 'stars'} />{' '}
            Stars
          </label>
          <label>
            <input
              type="radio"
              value="animated"
              checked={scene === 'animated'}
            />{' '}
            Animated stars
          </label>
          <label>
            <input type="radio" value="full" checked={scene === 'full'} />
            Stars (full source)
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
