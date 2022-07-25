import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { githubGist as syntaxStyle } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import styles from '../styles/r3f.module.css';
import Demo from './demos/02';
import Demo2 from './demos/02-b';
import DemoSource from '!!raw-loader!./demos/02';
import DemoThreeSource from '!!raw-loader!./demos/02-three';
import DemoSource2 from '!!raw-loader!./demos/02-b';

const ThreeDConcepts: NextPage = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [showDemo2, setShowDemo2] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>@react-three/fiber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>@react-three/fiber</h3>

        <ul>
          {!showDemo && !showDemo2 && (
            <>
              <li>
                3D browser experiences are made with{' '}
                <a
                  href="https://en.wikipedia.org/wiki/WebGL"
                  target="_blank"
                  rel="noreferrer"
                >
                  WebGL
                </a>
                <ul>
                  <li>
                    Web standard allowing GPU-accelerated usage of physics/image
                    processing as part of canvas
                  </li>
                  <li>
                    JS control code + shader code written in Open GL Shading
                    language
                  </li>
                  <li>Very low level</li>
                </ul>
              </li>
              <li>
                <a target="_blank" href="https://threejs.org/" rel="noreferrer">
                  Three.js
                </a>{' '}
                is a high-level API for WebGL
              </li>
            </>
          )}
          <li>
            <a
              target="_blank"
              href="https://github.com/pmndrs/react-three-fiber"
              rel="noreferrer"
            >
              @react-three/fiber
            </a>{' '}
            is a declarative renderer for Three.js
            <ul>
              <li>
                Demo{' '}
                <input
                  type="checkbox"
                  checked={showDemo}
                  onChange={() => {
                    setShowDemo(!showDemo);
                    setShowDemo2(false);
                  }}
                />
              </li>
              <li>
                Demo with controls{' '}
                <input
                  type="checkbox"
                  checked={showDemo2}
                  onChange={() => {
                    setShowDemo(false);
                    setShowDemo2(!showDemo2);
                  }}
                />
              </li>
            </ul>
          </li>
        </ul>

        {(showDemo || showDemo2) && (
          <div className={styles.demo}>
            <div className={styles.code}>
              <SyntaxHighlighter
                language="typescript"
                style={syntaxStyle}
                customStyle={{ fontSize: '1.2em' }}
              >
                {showDemo ? DemoSource : DemoSource2}
              </SyntaxHighlighter>

              <br />
              <br />
              {showDemo && (
                <SyntaxHighlighter
                  language="typescript"
                  style={syntaxStyle}
                  customStyle={{ fontSize: '1.2em' }}
                >
                  {DemoThreeSource}
                </SyntaxHighlighter>
              )}
            </div>

            <div className={styles.scene}>
              {showDemo ? <Demo /> : <Demo2 />}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ThreeDConcepts;
