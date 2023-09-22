import styles from './card.module.scss';
import Image from 'next/image';
import logo from 'public/logo.JPEG';
import bear from 'public/Bear.png';
import lightning from 'public/Lightning.png';
import sun from 'public/Sun.png';

export default function Card() {
  return (
    <>
      <div className={styles.cardContainer}>
        <Image src={logo} alt="" className={styles.card} />
        <div className={styles.icons}>
          <Image src={bear} alt="" className={styles.icon} />
          <Image src={lightning} alt="" className={styles.icon} />
          <Image src={sun} alt="" className={styles.icon} />
        </div>
      </div>
    </>
  );
}
