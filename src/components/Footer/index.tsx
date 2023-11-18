import React from "react";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { i18n } from "../../translate/i18n";

function Footer() {
  return (
    <footer className="bg-gray-800 px-4 py-6 flex flex-col mt-auto">
      <div className="flex items-center gap-4 text-white mb-8 md:mx-auto">
        <img
          src="/logotipo.png"
          alt="Spa das Almas"
          className="w-12 h-12 md:w-16 md:h-16"
        />
        <div>
          <h2 className="text-lg md:text-xl uppercase font-medium">
            Spa da Alma
          </h2>
          <p className="text-sm md:text-md">{i18n.t("slogan")}</p>
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-center md:justify-evenly gap-4">
        <div>
          <h3 className="after:content-[''] after:block after:bg-white after:w-[50px] after:h-[2px] after:mt-1 text-white mb-4">
            {i18n.t("footer.social_media")}
          </h3>
          <ul className="my-2 flex flex-col gap-2">
            <li>
              <a
                href="https://www.instagram.com/spadaalmamv/"
                className="flex gap-2"
                target="_blank"
              >
                <AiFillInstagram size={24} color="white" />
                <span className="text-gray-400">@spadaalmamv</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/hospedagemspadaalma/"
                className="flex gap-2"
                target="_blank"
              >
                <AiFillFacebook size={24} color="white" />
                <span className="text-gray-400">/hospedagemspadaalma</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="after:content-[''] after:block after:bg-white after:w-[50px] after:h-[2px] after:mt-1 text-white mb-4">
            {i18n.t("footer.contact_us")}
          </h3>
          <ul className="my-2 flex flex-col gap-2">
            <li>
              <a
                className="flex gap-2 wrap"
                href="mailto:hospedag@hospedagemspadaalma.com.br?subject=Reserva no Spa da Alma&body=Olá Spa da Alma, quero realizar uma reserva!"
              >
                <HiMail size={24} color="white" />
                <span className="text-gray-400">
                  hospedag@hospedagemspadaalma.com.br
                </span>
              </a>
            </li>
            <li>
              <a
                className="flex gap-2"
                href="https://api.whatsapp.com/send?phone=553534381131&text=Ol%C3%A1!%20%F0%9F%91%8B%20estou%20interessado%20em%20me%20hospedar%20no%20Spa%20da%20Alma.%20Gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es%20sobre%20disponibilidade%2C%20pre%C3%A7os%20e%20comodidades."
              >
                <IoLogoWhatsapp size={24} color="white" />
                <span className="text-gray-400">+55 (35) 3438-1131</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
