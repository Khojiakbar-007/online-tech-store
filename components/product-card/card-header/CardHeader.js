import styles from "../../../styles/components/product-card-styles/card-header-styles/card-header-styles.module.scss";
function CardHeader({imgUrl,imgTitle}) {
  return (
    <div className={styles.CardHeaderBox}>
      <img className={styles.cardImg} src={imgUrl} alt={imgTitle} />
    </div>
  );
}

export default CardHeader;
