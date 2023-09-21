import styles from './card.module.scss';
import Image from 'next/image';
import logo from 'public/logo.JPEG';
import lightning from 'public/Lightning.png';
import clsx from 'clsx';

export default function Card() {
  return (
    <>
      <div className={styles.cardContainer}>
        <Image src={logo} alt="" className={styles.card} />
        <div className={styles.bottomRow}>
          <Image
            src={lightning}
            alt=""
            className={clsx(styles.lightning, styles.lightningLeft)}
          />

          <p className={styles.description}>A social wellness club</p>
          <Image
            src={lightning}
            alt=""
            className={clsx(styles.lightning, styles.lightningRight)}
          />
        </div>
      </div>
    </>
  );
}
