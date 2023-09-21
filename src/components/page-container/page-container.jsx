import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './page-container.module.scss';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function PageContainer({ children }) {
  return (
    <div className={styles.page}>
      <a href="https://www.instagram.com/thegratefulden/" target="_blank">
        <FontAwesomeIcon
          icon={faInstagram}
          className={styles.instagram}
          size="2x"
        />
      </a>
      {children}
    </div>
  );
}
