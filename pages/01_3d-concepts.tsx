import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/r3f.module.css';
import React, { useState } from 'react';
import Demo from './demos/01';

const ThreeDConcepts: NextPage = () => {
  const [showAxes, setShowAxes] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showAmbient, setShowAmbient] = useState(false);
  const [showPoint, setShowPoint] = useState(false);
  const [showBoxes, setShowBoxes] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>3D basics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>A 3D Scene 🕶</h3>

        <ul>
          <li>
            Cartesian 3D space{' '}
            <input
              type="checkbox"
              checked={showAxes}
              onChange={() => setShowAxes(!showAxes)}
            />
          </li>
          <li>
            Perspective Camera (position, near/far){' '}
            <input
              type="checkbox"
              checked={showCamera}
              onChange={() => setShowCamera(!showCamera)}
            />
          </li>
          <li>
            Objects{' '}
            <input
              type="checkbox"
              checked={showBoxes}
              onChange={() => setShowBoxes(!showBoxes)}
            />
            <ul>
              <li>Mesh (points and edges)</li>
              <li>
                Materials (color, shiny/rough, texture){' '}
                <input
                  type="checkbox"
                  checked={showMaterials}
                  onChange={() => setShowMaterials(!showMaterials)}
                />
              </li>
            </ul>
          </li>
          <li>
            Lights
            <ul>
              <li>
                Ambient (global illumination)
                <input
                  type="checkbox"
                  checked={showAmbient}
                  onChange={() => setShowAmbient(!showAmbient)}
                />
              </li>
              <li>Directional (single direction, parallel rays)</li>
              <li>
                Point (single point, all directions){' '}
                <input
                  type="checkbox"
                  checked={showPoint}
                  onChange={() => setShowPoint(!showPoint)}
                />
              </li>
              <li>Spotlight (single point, single directional cone)</li>
            </ul>
          </li>
        </ul>
        <Demo
          showAmbient={showAmbient}
          showBoxes={showBoxes}
          showPoint={showPoint}
          showMaterials={showMaterials}
          showCamera={showCamera}
          showAxes={showAxes}
        />
      </main>
    </div>
  );
};

export default ThreeDConcepts;
