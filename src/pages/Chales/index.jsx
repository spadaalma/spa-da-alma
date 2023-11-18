import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import chales from "../../mocks/chales";
import { useEffect, useState } from "react";
import Modal from "./components/Modal";
import { i18n } from "../../translate/i18n";

function Chales() {
  const { innerWidth: width } = window;
  const [maxLenght, setMaxLenght] = useState(0);
  const [selectedImageCottage, setSelectedImageCottage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (cottage, index) => {
    document.body.classList.add("modal-open");
    setSelectedImageCottage(cottage);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    document.body.classList.remove("modal-open");
    setSelectedImageCottage(null);
    setSelectedImageIndex(null);
  };

  useEffect(() => {
    defMaxLenght();
  });

  function defMaxLenght() {
    setMaxLenght(180);
    if (width >= 768) {
      setMaxLenght(300);
    } else if (width >= 1024) {
      setMaxLenght(700);
    }
  }

  const [expandedChales, setExpandedChales] = useState({});

  const toggleDescription = (index) => {
    setExpandedChales((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }
  ,[])

  return (
    <div className="relative">
      <div className={`${selectedImageCottage && "opacity-20"} w-full`}>
        {chales.map((item, index) => (
          <div key={index}>
            <div className="text-center my-8">
              <span className="uppercase text-md tracking-[0.25rem]">
                {i18n.t("cottage.name")}
              </span>
              <h3 className="text-2xl uppercase font-semibold">{item.name}</h3>
            </div>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={10}
              slidesPerView={1.15}
              slidesPerGroup={1}
              centeredSlides={true}
              pagination={{
                clickable: true,
                type: "progressbar",
              }}
              navigation={true}
              breakpoints={{
                768: {
                  slidesPerView: 2.5,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3.5,
                  centeredSlides: false,
                },
              }}
            >
              {item.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt=""
                    className="w-full h-[300px] lg:h-[350px] object-cover cursor-pointer"
                    onClick={() => {
                      if (selectedImageCottage) {
                        if (selectedImageCottage === item.name) {
                          setSelectedImageIndex(index);
                        }
                      } else {
                        openModal(item.name, index);
                      }
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-4 md:px-8 lg:px-12">
              <h4 className="mb-4 text-lg font-semibold">
                {i18n.t("cottage.description_title")}:
              </h4>
              <div className="text-justify">
                {item.description.length > maxLenght ? (
                  <p>
                    {expandedChales[index]
                      ? item.description
                      : `${item.description.slice(0, maxLenght)}... `}
                    <button
                      className="text-blue-600"
                      onClick={() => toggleDescription(index)}
                    >
                      {expandedChales[index]
                        ? i18n.t("paragraphs.see_less")
                        : i18n.t("paragraphs.see_more")}
                    </button>
                  </p>
                ) : (
                  <p>{item.description}</p>
                )}
              </div>
            </div>
            <div className="h-[1px] w-full bg-slate-200"></div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={selectedImageCottage !== null}
        onClose={closeModal}
        selectedImageCottage={selectedImageCottage}
        selectedImageIndex={selectedImageIndex}
      />
    </div>
  );
}

export default Chales;
