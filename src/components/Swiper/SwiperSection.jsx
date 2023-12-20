import Typography from "../ui/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/swiper-bundle.css";

function Component({ data }) {
  return (
    <div className="bg-white p-1 h-full w-full rounded flex flex-col space-y-2 text-center">
      <img
        src={data.src}
        alt="chat overview"
        className="h-2/3 w-full center object-cover rounded"
      ></img>
      <Typography type="primary">{data.heading}</Typography>
      <Typography type="description">{data.description}</Typography>
    </div>
  );
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperSection = ({ data }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} pagination loop autoplay>
      {data.map((cardInformation, index) => {
        return (
          <SwiperSlide key={index}>
            <Component data={cardInformation} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

// swiper container ko css dena pdega

export default SwiperSection;
