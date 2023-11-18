import { FaCoffee, FaWifi, FaPaw } from "react-icons/fa";
import { TbMassage } from "react-icons/tb";
import { MdShoppingCartCheckout } from "react-icons/md";
import { ImLeaf } from "react-icons/im"
import { i18n } from "../translate/i18n";

export default [
  {
    name: i18n.t("differentials.wifi"),
    icon: FaWifi,
  },
  {
    name: i18n.t("differentials.breakfast.primary"),
    name_secundary: i18n.t("differentials.breakfast.secundary"),
    icon: FaCoffee,
  },
  {
    name: i18n.t("differentials.massages"),
    icon: TbMassage,
  },
  {
    name: i18n.t("differentials.pet"),
    icon: FaPaw,
  },
  {
    name: i18n.t("differentials.fast_checkout"),
    icon: MdShoppingCartCheckout,
  },
  {
    name: i18n.t("differentials.nature.primary"),
    name_secundary: i18n.t("differentials.nature.secundary"),
    icon: ImLeaf,
  }
];
