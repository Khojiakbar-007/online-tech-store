import Image from 'next/image';
import styles from '../../../styles/components/product-card-styles/card-header-styles/card-header-styles.module.scss';
import CursoredLink from '../../shared/cursored-link';
function CardHeader({ imgUrl, imgTitle, href }) {
  return (
    <CursoredLink href={href}>
      <div className={styles.CardHeaderBox}>
        {/* <img className={styles.cardImg} src={imgUrl} alt={imgTitle} /> */}
        <Image
          className={styles.cardImg}
          src={imgUrl}
          alt={imgTitle}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
    </CursoredLink>
  );
}

export default CardHeader;
