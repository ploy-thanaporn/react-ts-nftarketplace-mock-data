import Slider from "react-slick";

const TextAnimation = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
  };
  return (
    <div className="overflow-hidden text-23 md:text-33 lg:text-48 2xl:text-7xl font-bold text-[#EC351C]">
      <Slider {...settings}>
        <div>
          <span>Art</span>
        </div>
        <div>
          <span>Photo</span>
        </div>
        <div>
          <span>Music</span>
        </div>
        <div>
          <span>Video</span>
        </div>
      </Slider>
    </div>
  );
};

export default TextAnimation;
