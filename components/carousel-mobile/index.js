import Slider from "react-slick";

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

const MobileCarousel = ({ children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default MobileCarousel;
