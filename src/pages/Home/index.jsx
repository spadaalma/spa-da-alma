import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import reviews from "../../mocks/reviews";
import differentials from "../../mocks/differentials";
import about_us from "../../mocks/about_us";
import { i18n } from "../../translate/i18n";
import ReviewCard from "./components/ReviewCard";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { callAction, settings } from "../../utils/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import homeSlide from "../../mocks/homeSlide";

function Home() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const actual_date = new Date().toISOString().split("T")[0];

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const companyId = "5f28e3fbab41d429a42ac74c";
    const queryParams = new URLSearchParams({
      companyId,
      adults,
      children,
      checkin: checkIn,
      checkout: checkOut,
    });

    const bookingLink = `https://hbook.hsystem.com.br/booking?${queryParams.toString()}`;

    const newWindow = window.open(bookingLink, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          slidesPerGroup={1}
          centeredSlides={true}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {homeSlide.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[40vh] lg:h-[60vh]">
                <img src={item.path} className="w-full h-full object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <form
          className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  justify-center items-center gap-2 hidden lg:flex"
          onSubmit={handleFormSubmit}
        >
          <div
            className="flex flex-row justify-center bg-white bg-opacity-[97%] p-2 rounded-md gap-10 flex-shrink-0"
            style={{
              backdropFilter: "blur(10px)",
            }}
          >
            <div className="flex flex-col justify-center mb-4 px-6">
              <h2 className="text-[#0f172a] font-semibold">
                {i18n.t("book.check_in")}
              </h2>
              <input
                className="bg-white rounded shadow-md text-black text-center"
                type="date"
                min={actual_date}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center mb-4">
              <h2 className="text-[#0f172a] font-semibold">
                {i18n.t("book.check_out")}
              </h2>
              <input
                className="bg-white rounded shadow-md text-black text-center"
                type="date"
                min={actual_date}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-center mb-4">
              <h2 className="text-[#0f172a] font-semibold">
                {i18n.t("book.adults.name")}
              </h2>
              <select
                name=""
                id=""
                className="bg-white rounded shadow-md text-black text-center"
                defaultValue={adults}
                onChange={(e) => setAdults(e.target.value)}
              >
                <option value="1">{i18n.t("book.adults.one")}</option>
                <option value="2">{i18n.t("book.adults.two")}</option>
                <option value="3">{i18n.t("book.adults.three")}</option>
                <option value="4">{i18n.t("book.adults.for")}</option>
                <option value="5">{i18n.t("book.adults.five")}</option>
                <option value="6">{i18n.t("book.adults.six")}</option>
                <option value="6">{i18n.t("book.adults.seven")}</option>
                <option value="6">{i18n.t("book.adults.eight")}</option>
                <option value="6">{i18n.t("book.adults.nine")}</option>
                <option value="6">{i18n.t("book.adults.ten")}</option>
              </select>
            </div>
            <div className="flex flex-col justify-center mb-4">
              <h2 className="text-[#0f172a] font-semibold">
                {i18n.t("book.childrens.name")}
              </h2>
              <select
                name=""
                id=""
                className="bg-white rounded shadow-md text-black text-center"
                defaultValue={children}
                onChange={(e) => setChildren(e.target.value)}
              >
                <option value="0">{i18n.t("book.childrens.zero")}</option>
                <option value="1">{i18n.t("book.childrens.one")}</option>
                <option value="2">{i18n.t("book.childrens.two")}</option>
                <option value="3">{i18n.t("book.childrens.three")}</option>
                <option value="4">{i18n.t("book.childrens.for")}</option>
                <option value="5">{i18n.t("book.childrens.five")}</option>
                <option value="6">{i18n.t("book.childrens.six")}</option>
                <option value="6">{i18n.t("book.childrens.seven")}</option>
                <option value="6">{i18n.t("book.childrens.eight")}</option>
                <option value="6">{i18n.t("book.childrens.nine")}</option>
                <option value="6">{i18n.t("book.childrens.ten")}</option>
                <option value="6">{i18n.t("book.childrens.eleven")}</option>
              </select>
            </div>
            <input
              type="submit"
              className="bg-gray-900 rounded-lg shadow-md m-3 px-3 text-white font-bold text-center hover:outline hover:cursor-pointer hover:bg-gray-900"
              value={i18n.t("book.submit")}
            />
          </div>
        </form>
      </div>
      <div className="">
        <div className="p-4 md:px-8 lg:px-12">
          <h3 className="title">{i18n.t("titles.reviews")}</h3>
        </div>
        <div className="max-w-full overflow-hidden">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <ReviewCard key={index} {...item} />
            ))}
          </Slider>
        </div>
        <div className="p-4 md:px-8 lg:px-12">
          <h3 className="title">{i18n.t("titles.facilities")}</h3>
          <div className="flex flex-col gap-6 md:flex-row">
            {callAction.map((action, index) => (
              <Link to={action.path} className="md:w-[50%]" key={index}>
                <div
                  className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-md"
                  style={{
                    backgroundImage: `url("/assets/calls/${action.image}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex gap-4 h-full hover:gap-6 transition-all p-4  items-end">
                    <h3
                      className="text-white text-2xl"
                      style={{ textShadow: "2px 2px rgb(0 0 0 / 38%)" }}
                    >
                      {action.name}
                    </h3>
                    <MdOutlineArrowForwardIos
                      size={24}
                      color="white"
                      style={{ marginTop: "3px" }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-4 md:px-8 lg:px-12">
          <h3 className="title">{i18n.t("titles.differentials")}</h3>
        </div>
        <div>
          <ul className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-8">
            {differentials.map((differential, index) => (
              <li
                className="flex flex-col text-center items-center"
                key={index}
              >
                <span className="text-[#1f2937] mb-3 md:px-10 xl:px-14 2xl:px-28">
                  {differential.icon && <differential.icon size={35} />}
                </span>
                <p className="text-lg text-[#1f2937]">{differential.name}</p>
                {differential.name_secundary && (
                  <p className="text-lg text-[#1f2937]">
                    {differential.name_secundary}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 md:px-8 lg:px-12">
          <h3 className="title">{i18n.t("titles.about_us.title")}</h3>
        </div>
        <div className="p-4 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {about_us.map((image, index) => (
              <Link to="/sobre-nos">
                <div
                  key={index}
                  className="bg-white rounded shadow-lg overflow-hidden p-2"
                >
                  <img
                    src={image}
                    alt={`Imagem ${index + 1}`}
                    className="w-full h-48 object-cover rounded"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="p-4 md:px-8 lg:px-12" id="location">
          <h3 className="title">{i18n.t("titles.location.name")}</h3>
        </div>
        <div className="p-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 ">
            <div className="text-center md:text-left  lg:w-1/4 lg:1/3">
              <div className="flex flex-col px-4">
                <h2 className="text-[#1f2937] font-bold text-3xl mb-2">
                  {i18n.t("titles.location.slogan")}
                </h2>
                <p className="text-left text-sm text-gray-700 font-thin">
                  {i18n.t("titles.location.description")}
                </p>
              </div>
              <div className="flex flex-row justify-center md:mt-1">
                <a
                  className="bg-gray-900 rounded-lg shadow-md m-3 p-2 text-white font-bold text-center hover:outline hover:cursor-pointer hover:bg-gray-900"
                  href="https://hbook.hsystem.com.br/Booking?companyId=5f28e3fbab41d429a42ac74c"
                  target="_blank"
                >
                  {i18n.t("book.availability")}
                </a>
              </div>
            </div>
            <div className=" rounded shadow-lg overflow-hidden p-2 md:w-3/4 lg:w-2/3 xl:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5051.144008075224!2d-46.021924555312545!3d-22.863270661739612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc104a3a67a26b%3A0x34aa88739c7f0e92!2sHospedagem%20Spa%20da%20Alma!5e0!3m2!1sen!2sbr!4v1689790413916!5m2!1sen!2sbr"
                width="100%"
                height="450"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
