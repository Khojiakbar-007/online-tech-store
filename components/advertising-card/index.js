import styles from '../../styles/components/advertising-card-styles/advertising-card-styles.module.scss';
import Link from 'next/link';
// import CursoredLink from '../shared/cursored-link';

function AdvertisingCard({ imgUrl, title, link }) {
  return (
    <div
      className={styles.AdvertisingCardBox}
      style={{ backgroundImage: 'url(' + `${imgUrl}` + ')' }}
    >
      <Link href={`/catalog/${link}`}>
        <h2
          style={{ maxWidth: '135px' }}
          className={styles.AdvertisingCardTitle}
        >
          {title}
        </h2>
      </Link>
      <p className={styles.AdvertisingCardLink}>
        By Norimboyev Erkin & Khojiakbar Avazov
      </p>
    </div>
  );
}

export default AdvertisingCard;
