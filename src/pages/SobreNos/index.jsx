import { i18n } from "../../translate/i18n";
import { useState } from "react";

function SobreNos() {
  return (
    <div className="p-6 md:px-8 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="rounded shadow-lg overflow-hidden p-2 md:w-3/4 lg:w-2/3 xl:w-1/3">
          <img
            src="/assets/reception.jpg"
            className="w-full h-72 object-cover rounded"
          />
        </div>
        <div className="text-center md:text-left lg:w-2/3 xl:w-1/2 2xl:w-1/3">
          <h2 className="text-[#1f2937] font-bold text-3xl mb-2 px-4">
            {i18n.t("titles.about_us.header")}
          </h2>
          <div className="flex flex-col px-4 gap-4">
            <p className="text-left text-sm text-gray-700 font-thin">
              {i18n.t("titles.about_us.p1")}
            </p>
            <p className="text-left text-sm text-gray-700 font-thin">
              {i18n.t("titles.about_us.p2")}
            </p>
            <p className="text-left text-sm text-gray-700 font-thin">
              {i18n.t("titles.about_us.p3")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SobreNos;
