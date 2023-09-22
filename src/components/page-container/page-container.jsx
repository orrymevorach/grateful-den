import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './page-container.module.scss';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function PageContainer({ children }) {
  return (
    <div className={styles.page}>
      <a
        href="https://www.instagram.com/thegratefulden/"
        target="_blank"
        className={styles.instagram}
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" color="black" />
      </a>
      {children}
    </div>
  );
}
