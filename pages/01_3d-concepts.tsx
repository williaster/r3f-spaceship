import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/r3f.module.css';
import React, { useState } from 'react';
import Demo from './demos/01';

const basePath = process.env.NODE_ENV === 'production' ? '/r3f-spaceship' : '';

const ThreeDConcepts: NextPage = () => {
  const [showDemo, setShowDemo] = useState(false);
  const [showAxes, setShowAxes] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [showAmbient, setShowAmbient] = useState(false);
  const [showPoint, setShowPoint] = useState(false);
  const [showMeshNormal, setShowMeshNormal] = useState(false);
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
        Show demo{' '}
        <input
          type="checkbox"
          checked={showDemo}
          onChange={() => setShowDemo(!showDemo)}
        />
        {!showDemo && (
          <div className={styles.flex}>
            <img
              src={`${basePath}/cartesian.png`}
              alt=""
              width={150}
              height={130}
            />
            <img
              src={`${basePath}/camera.jpeg`}
              alt=""
              width={240}
              height={220}
            />
            <img
              src={`${basePath}/mesh.png"`}
              alt=""
              width={210}
              height={180}
            />
            <img
              src={`${basePath}/materials.png`}
              alt=""
              width={350}
              height={110}
            />
            <img
              src={`${basePath}/lights.jpeg`}
              alt=""
              width={300}
              height={220}
            />
          </div>
        )}
        <ul>
          <li>
            Cartesian 3D space{' '}
            {showDemo && (
              <input
                type="checkbox"
                checked={showAxes}
                onChange={() => setShowAxes(!showAxes)}
              />
            )}
          </li>
          <li>
            Perspective Camera (position, near/far){' '}
            {showDemo && (
              <input
                type="checkbox"
                checked={showCamera}
                onChange={() => setShowCamera(!showCamera)}
              />
            )}
          </li>
          <li>
            Mesh{' '}
            {showDemo && (
              <input
                type="checkbox"
                checked={showBoxes}
                onChange={() => setShowBoxes(!showBoxes)}
              />
            )}
            <ul>
              <li>Geometry (points and edges)</li>
              <li>
                Materials (color, shiny/rough, texture){' '}
                {showDemo && (
                  <input
                    type="checkbox"
                    checked={showMaterials}
                    onChange={() => setShowMaterials(!showMaterials)}
                  />
                )}
                <ul>
                  <li>
                    Mesh normal{' '}
                    {showDemo && (
                      <input
                        type="checkbox"
                        checked={showMeshNormal}
                        onChange={() => setShowMeshNormal(!showMeshNormal)}
                      />
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Lights
            <ul>
              <li>
                Ambient (global illumination)
                {showDemo && (
                  <input
                    type="checkbox"
                    checked={showAmbient}
                    onChange={() => setShowAmbient(!showAmbient)}
                  />
                )}
              </li>
              <li>Directional (single direction, parallel rays)</li>
              <li>
                Point (single point, all directions){' '}
                {showDemo && (
                  <input
                    type="checkbox"
                    checked={showPoint}
                    onChange={() => setShowPoint(!showPoint)}
                  />
                )}
              </li>
              <li>Spotlight (single point, single directional cone)</li>
            </ul>
          </li>
        </ul>
        {showDemo && (
          <Demo
            showAmbient={showAmbient}
            showBoxes={showBoxes}
            showPoint={showPoint}
            showMaterials={showMaterials}
            showMeshNormal={showMeshNormal}
            showCamera={showCamera}
            showAxes={showAxes}
          />
        )}
      </main>
    </div>
  );
};

export default ThreeDConcepts;
