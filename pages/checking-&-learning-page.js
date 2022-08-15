import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import img from '../public/images/advertising-2.png';
import coolImage from '../public/images/cool.jpg';
import img2 from '../public/images/advertising-1.png';
import img3 from '../public/images/advertising-3.png';
import img4 from '../public/images/advertising-4.png'

function CheckingAndLearningPage() {
  const router = useRouter();
  console.log('Router: ', router);
  const lazyRoot = useRef(null);
  return (
    <div>
      <div className="img-container" style={{
        width: '300px',
        height: '300px',
        marginTop: '100px',
        position: 'relative'
      }}>
        <Image src={img4} objectFit='contain' layout='fill' /* objectPosition={'50% 50%'} *//>
      </div>

      {/* <Image src={imgShow} layout="fill" objectFit='contain' /> */}


      <div ref={lazyRoot} style={{ overflowX: 'scroll', width: '500px' }}>
        <Image lazyRoot={lazyRoot} src={img4} width="600" height="500" />
        <Image lazyRoot={lazyRoot} src={img3} width="600" height="500" />
      </div>
      <h1>Lorem ipsum dolor sit amet.</h1>
      <p>
        Lorem ipsum dolor <br /> <br /> sit amet consectetur adipisicing elit.{' '}
        <br />
        <br />
        Aperiam placeat reprehenderit blanditiis libero labore, numquam <br />
        <br />
        laborum quisquam sapiente error odio illum perferendis deserunt, <br />
        <br />
        saepe rerum enim doloremque animi <br />
        <br />
        veritatis vel! <br />
        <br />
      </p>
      <p>
        Lorem ipsum dolor <br /> <br /> sit amet consectetur adipisicing elit.{' '}
        <br />
        <br />
        Aperiam placeat reprehenderit blanditiis libero labore, numquam <br />
        <br />
        laborum quisquam sapiente error odio illum perferendis deserunt, <br />
        <br />
        saepe rerum enim doloremque animi <br />
        <br />
        veritatis vel! <br />
        <br />
      </p>
      <p>
        Lorem ipsum dolor <br /> <br /> sit amet consectetur adipisicing elit.{' '}
        <br />
        <br />
        Aperiam placeat reprehenderit blanditiis libero labore, numquam <br />
        <br />
        laborum quisquam sapiente error odio illum perferendis deserunt, <br />
        <br />
        saepe rerum enim doloremque animi <br />
        <br />
        veritatis vel! <br />
        <br />
      </p>
      <p>
        Lorem ipsum dolor <br /> <br /> sit amet consectetur adipisicing elit.{' '}
        <br />
        <br />
        Aperiam placeat reprehenderit blanditiis libero labore, numquam <br />
        <br />
        laborum quisquam sapiente error odio illum perferendis deserunt, <br />
        <br />
        saepe rerum enim doloremque animi <br />
        <br />
        veritatis vel! <br />
        <br />
      </p>
      <p>
        Lorem ipsum dolor <br /> <br /> sit amet consectetur adipisicing elit.{' '}
        <br />
        <br />
        Aperiam placeat reprehenderit blanditiis libero labore, numquam <br />
        <br />
        laborum quisquam sapiente error odio illum perferendis deserunt, <br />
        <br />
        saepe rerum enim doloremque animi <br />
        <br />
        veritatis vel! <br />
        <br />
      </p>
      <p>
        Lorem ipsum dolor <br /> <br /> sit amet consectetur adipisicing elit.{' '}
        <br />
        <br />
        Aperiam placeat reprehenderit blanditiis libero labore, numquam <br />
        <br />
        laborum quisquam sapiente error odio illum perferendis deserunt, <br />
        <br />
        saepe rerum enim doloremque animi <br />
        <br />
        veritatis vel! <br />
        <br />
      </p>
      <Image
        src={img}
        width={img.width}
        height={img.height}
        alt="MSI laptops banner"
        placeholder="blur"
      />
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt="MSI laptops banner"
        quality={100}
        // placeholder='blur'
      />
      <Image
        src={coolImage}
        width={1920}
        height={1080}
        alt="cool image of car"
        // quality={100}
        placeholder="blur"
        // blurDataURL="https://s1.piq.land/2012/11/20/WOfO9sA62WGbi1rrBCoyssWu_o.png"
      />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   return {
//     props: {},
//   };
// };

export default CheckingAndLearningPage;
