import CardFooter from "./card-footer/CardFooter";
import CardHeader from "./card-header/CardHeader";
import styles from "../../styles/components/product-card-styles/product-card-styles.module.scss";

function ProductCard({data}) {
  return (
    <div className={styles.productCardBox}>
      <CardHeader imgUrl={data?.imgUrl} />
      <CardFooter
        rating={data?.rating}
        title={data?.title}
        nowPrise={data?.nowPrise}
        oldPrise={data?.oldPrise}
        isLike={data?.like}
      />
    </div>
  );
}

export default ProductCard;
