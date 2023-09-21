import styles from './card.module.scss';
import Image from 'next/image';
import logo from 'public/logo.JPEG';

export default function Card() {
  return <Image src={logo} alt="" className={styles.card} />;
}
