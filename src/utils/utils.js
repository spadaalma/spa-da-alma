import { i18n } from "../translate/i18n";

export const callAction = [
  { name: i18n.t("items.cottage"), path: "/chales", image: "chales.jpg" },
  { name: i18n.t("items.leisure"), path: "/lazer", image: "lazer.jpg" },
];

export const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  speed: 2000,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
