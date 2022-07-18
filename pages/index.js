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

const logoImageIndex = ['', '-1', '-2', '-3', '-4', '-5', '-6'];

export default function Home() {
  return (
    <main id="home-page">
      <section className="showcase">
        <div className="container-fluid">
          {/* prettier-ignore */}
          {/* <Image src="/images/showcase.jpg" alt='MSI Gaming MOnitor' width={1400} height={328} layout='fill' quality={100} priority/> */}
          <img src="/images/showcase.jpg" />
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
              imgUrl={
                'https://s3-alpha-sig.figma.com/img/6778/36f8/66f2a591e4a0214dfd25835f14051a09?Expires=1656892800&Signature=W9OM4hFBPa0HJprfP5NHchoKUkDvYOW4Ml5KfZPjcfKtwBe2zwNSZuHtLwgMC4-BQx2HFJYyXtXAHvqZ8NqFFs7nWsjPcEJMQl0sx3ysz2Xc-wxr~fGM9WrudWcFH~r5Ej8Df~5M09Yr-SfkTutEvjcIKZiHnDmE5cuIu~KaVUzt0fiedRO4OmwELcdmKPQkgLoaV2HS50x6sCZawRSza12yduaVh6tKDdMHMJstGl28sb-cfGMzJY~VMK64u6cG3TQvbBeuUQIcPORXMGaDgkGSdFoQ7rqanQP4zHCtm2dEIIGSMP5u6cyPoPsU5aJnxT9jplSzTxMNU0mkM4SaHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
              }
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
              imgUrl="https://s3-alpha-sig.figma.com/img/e8a7/959b/1333cafd3d0886863a40096034e66fc9?Expires=1656892800&Signature=KLJ3m2jRHHj7jhv3s2d70zjnIgD~iq0ax6Y9nYUzQI6d8F5MXRpQGnoRB94J84FqN9XcK7FpQ0VCA5Ms7GYD-zscv-1o13DrxPhaNbu7iGMhYKKUgyJbLbCiPT7O9xF0SgYh99Qu6CbfFQRPherALlf~SIkGI3L0M8JBmCtfUystl6gk1bGap5wVXFX-8C4Q5WFIhF5F7J1H6Kwvf~fNZiDorihxN3lSnZavxFFuh9DHHuwDNGdPUjomlkvSOCngyHNHu3lFhgV9Se2jrv8yDD58TON8XQfFrH3Uo--Vi2-g26Dw7TUlvJAAUThvNLl21oAM18XLq88KqdqpFtvbwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
            <AdvertisingCard
              imgUrl="https://s3-alpha-sig.figma.com/img/da2f/7b79/dcaaca8473865ba1cdc9abbde7dfbaea?Expires=1656892800&Signature=EjIhoA6fxnKrCXdiCzFMBJO7SBTdI~OCSLf-b84~HRKnX6PzSfCFvkjSLFt~dQbJm7WhzfsJUtQVr8~~1COk2hwu76MC6yhoyTuTbu24CqVHJ~-5nEM0bLDAXHQDoGHkRzTzE5qSVgH70ZMBh850-bF~c5~NUnWikVL6zAYQZlptPUuxfyvQrcKtYMB-WpcIOOTLZQ22KobsmEvDVETeK1iW5F74gxlOGM46-8nA7qR7viW8rcVFod1an4JKKjAvPUGaho3k0xeaRUvE1x8mOOdU3ZzkYXYSItl8g4NBq7ONZvru-ZOvsPSYSzITq6qPSb4ESBDTay9rzmBf4G4XNw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
              title="Desktops"
              link="desktops"
            />

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
              imgUrl="https://s3-alpha-sig.figma.com/img/e038/37c7/1da86f4deb194ec628c7f9606daa14cb?Expires=1656892800&Signature=LSZcVq8JKj3tBFJluWQbiwbTI81IwSPAxgbh6iIqzDBhlQ71NMm6~i~jrjpJ0gwlk5tY2CeKl2Wb6JlGf1lPDgoGERCHwXwlT1dHf-IsfwgrIBGaXgjX-rIxiOM2T4ap8pf4EcXW1GyH7-~1Lq6JKqpfCw5iZydRT~kbB15XO5GUozzx1LLU8Ytshw-1K1NKn1kOGnkkjudVZeiGemSiAabUQckIF0Q2VMHrc5GyEb1R~O-RnnLJpo2Xo3BhHkDeyR3ObvlmYAYARpMCPZbsav7OxX5gMsBRSt-MZxlB0eUpq6isuJaFWJVfwnBnLs5BbwUgC0KevLlC2NDLYy4EYg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
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
