import styles from './card.module.scss';
import Image from 'next/image';
import logo from 'public/logo.JPEG';
import { useState } from 'react';

export default function Card() {
  const [width, setWidth] = useState('400px');
  return (
    <>
      <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
        <button
          style={{
            background: 'none',
            fontSize: '16px',
          }}
          onClick={() => setWidth('400px')}
        >
          Small
        </button>
        <button
          style={{
            background: 'none',
            fontSize: '16px',
          }}
          onClick={() => setWidth('450px')}
        >
          Medium
        </button>
        <button
          style={{
            background: 'none',
            fontSize: '16px',
          }}
          onClick={() => setWidth('500px')}
        >
          Large
        </button>
      </div>
      <div className={styles.cardContainer} style={{ width }}>
        <Image src={logo} alt="" className={styles.card} />
        <p className={styles.description}>A social wellness club</p>
      </div>
    </>
  );
}
