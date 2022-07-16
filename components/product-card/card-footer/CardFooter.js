import React, { useState } from 'react';

import styles from '../../../styles/components/product-card-styles/card-footer-styles/card-footer-styles.module.scss';
import Rating from '@mui/material/Rating';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import CursoredLink from '../../shared/cursored-link';
import Link from 'next/link'

// prettier-ignore
function CardFooter({ rating = 0, title, oldPrise = null, nowPrise, isLike, id = '' }) {
  const [value, setvalue] = useState(rating);
  const [like, setlike] = useState(isLike);
  return (
    <div className={styles.CardFooterBox}>
      <div className={styles.cardFooterRating}>
        <Rating name="no-value" size="small" value={value} />
        <p>Reviews ({rating})</p>
      </div>

      <Link href={`/product/${id}`}>
        <div className={styles.cardFooterTitle}>
          <p>{title}</p>
        </div>
      </Link>

      <div className={styles.CardFooterPrice}>
        {oldPrise ? <p className={styles.oldPrise}>{oldPrise}</p> : null}
        <div className={styles.priceLike}>
          <p className={styles.nowPrise}>{nowPrise}</p>
          <span onClick={() => setlike(!like)} className="pointer">
            {like ? <FcLikePlaceholder /> : <FcLike />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardFooter;
