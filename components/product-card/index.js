import CardFooter from './card-footer/CardFooter';
import CardHeader from './card-header/CardHeader';
import styles from '../../styles/components/product-card-styles/product-card-styles.module.scss';
// import CursoredLink from '../shared/cursored-link';

function ProductCard({ data }) {
  return (
    <div className={styles.productCardBox}>
      <CardHeader href={`/product/${data?.id}`} imgUrl={data?.imgUrl} />
      <CardFooter
        rating={data?.rating}
        title={data?.title}
        nowPrise={data?.nowPrise}
        oldPrise={data?.oldPrise}
        isLike={data?.like}
        id={data?.id}
      />
    </div>
  );
}

export default ProductCard;
