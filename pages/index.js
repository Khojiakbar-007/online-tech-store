// import Image from "next/image";
import Carousel from '../components/carousel';
import ProductCard from '../components/product-card';
import AdvertisingCard from '../components/advertising-card';
import {
  dataRev as data,
  customBuildsRev as customBuilds,
  laptopsRev as laptops,
  desktopsRev as desktops,
  monitorsRev as monitors,
} from '../fake-data';
import MobileCarousel from '../components/carousel-mobile';
import Image from 'next/image';
import img from '../public/images/showcase.jpg';

import adImg1 from '../public/images/advertising-1.png';
import adImg2 from '../public/images/advertising-2.png';
import adImg3 from '../public/images/advertising-3.png';
import adImg4 from '../public/images/advertising-4.png';

const logoImageIndex = ['', '-1', '-2', '-3', '-4', '-5', '-6'];

export default function Home() {
  console.log('image: ', img);
  return (
    <main id="home-page">
      <section className="showcase">
        <div className="container-fluid pos-rel">
          {/* prettier-ignore */}
          <Image src={img} layout="fill" objectFit='contain' quality={100} priority/>
        </div>
      </section>

      <section className="new-products">
        <div className="container-fluid">
          <h3>New Products</h3>

          <Carousel>
            {data.map(item => (
              <ProductCard key={item.id} data={item} />
            ))}
          </Carousel>
        </div>
      </section>

      <section className="showcase-products">
        <div className="container-fluid">
          <div className="product-row product-row__custom-builds fb-row">
            <AdvertisingCard
              imgUrl={adImg1}
              title="Custom Builds"
              link="customBuilds"
            />

            <div className="carousel-container">
              <MobileCarousel>
                {customBuilds.map(prod => (
                  <ProductCard key={prod.id} data={prod} />
                ))}
              </MobileCarousel>
            </div>
          </div>

          <div className="product-row product-row__msi-laps fb-row">
            <AdvertisingCard
              imgUrl={adImg2}
              title="MSI Laptops"
              link="laptops"
            />

            <div className="carousel-container">
              <MobileCarousel>
                {laptops.map((prod, i) => (
                  <ProductCard key={i} data={prod} />
                ))}
              </MobileCarousel>
            </div>
          </div>

          <div className="product-row product-row__desktops fb-row">
            <AdvertisingCard imgUrl={adImg3} title="Desktops" link="desktops" />

            <div className="carousel-container">
              <MobileCarousel>
                {desktops.map((prod, i) => (
                  <ProductCard key={i} data={prod} />
                ))}
              </MobileCarousel>
            </div>
          </div>

          <div className="product-row product-row__g-monitors fb-row">
            <AdvertisingCard
              imgUrl={adImg4}
              title="Gaming Monitors"
              link="monitors"
            />

            <div className="carousel-container">
              <MobileCarousel>
                {monitors.map((prod, i) => (
                  <ProductCard key={i} data={prod} />
                ))}
              </MobileCarousel>
            </div>
          </div>
        </div>
      </section>

      {/* prettier-ignore */}
      <section className="logos">
        <div className="container-fluid fb-row--center--wrap">
          {logoImageIndex.map((i, index) => (
            <div key={index} className="logo fb-row--center">
              <Image src={`/images/logos/image 33${i}.png`} alt='company-logo' width={153} height={80} quality={100}/>
            </div>
          ))}
        </div>
      </section>

      <h2>{process.env.nimadir}</h2>
    </main>
  );
}
