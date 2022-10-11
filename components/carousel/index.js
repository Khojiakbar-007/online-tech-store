import Slider from 'react-slick';
import classes from './styles.module.scss';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${classes['carousel']} ${classes['carousel--prev']} fb-row--center`}
      onClick={onClick}
      style={{ ...style }}
    >
      <IoChevronBack style={{ paddingRight: '5px' }} />
    </div>
  );
};

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} ${classes['carousel']} ${classes['carousel--next']} fb-row--center`}
      onClick={onClick}
      style={{ ...style }}
    >
      <IoChevronForward style={{ paddingLeft: '5px' }} />
    </div>
  );
};

const setting = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 2,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1430,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // {
    //   breakpoint: 540,
    //   settings: {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //   },
    // },
  ],
};

function Carousel({ settings = setting, children }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}

export default Carousel;
