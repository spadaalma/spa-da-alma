import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import lazer from "../../mocks/leisure";
import { useEffect } from "react";

function Lazer() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }
  ,[])
  return (
    <>
      <div className="w-full py-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 10,
            slideShadows: false,
          }}
          // pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            // nextEl: ".swiper-button-next",
            // prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {lazer.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-[61px]mb-8 p-12">
                <h1 className="text-2xl uppercase font-semibold text-center">
                  {item.name}
                </h1>
              </div>
              <div className="bg-slate-50 text-justify shadow-md w-full h-[50vh]">
                <img
                  className="w-full h-[50%] object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="p-4">
                  <p className="text-justify px-2 mt-2 mb-20 text-gray-900">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Lazer;
