import styles from "../../styles/components/advertising-card-styles/advertising-card-styles.module.scss";

function AdvertisingCard({ imgUrl, title }) {
  return (
    <div
      className={styles.AdvertisingCardBox}
      style={{ backgroundImage: "url(" + `${imgUrl}` + ")" }}
    >
      <h2 className={styles.AdvertisingCardTitle}>{title}</h2>
      <p className={styles.AdvertisingCardLink}>Norimboyev Erkin</p>
    </div>
  );
}

export default AdvertisingCard;
