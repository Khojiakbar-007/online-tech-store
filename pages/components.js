import AdvertisingCard from "../components/advertising-card";
import ProductCard from "../components/product-card";
import Carousel from "../components/carousel";

import { data } from "../fake-data";

function Components() {
  return (
    <>
      <div style={{ maxWidth: "1300px", margin: "0 auto" }}>
        <h2>Carousel product</h2> <br />
        <Carousel>
          {data.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </Carousel>
        <h2>product</h2> <br />
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <AdvertisingCard
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTczduXxsw5oqMeufmIub7I6Tq_QRXP65VSew&usqp=CAU"
            title="Erkin Norimboyev"
          />
          {data.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Components;
