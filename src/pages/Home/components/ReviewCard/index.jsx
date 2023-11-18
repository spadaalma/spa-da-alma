import { motion } from "framer-motion";
import { i18n } from "../../../../translate/i18n";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function ReviewCard({ name, photo, review, platform }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="m-4 md:m-10"
    >
      <div className="bg-white rounded-lg p-6 h-[400px] cursor-pointer flex flex-col gap-4 transition-shadow duration-300 shadow-md hover:shadow-xl">
        <div className="flex items-center gap-4">
          <img src={photo} alt="" className="rounded-full w-16 h-16" />
          <div>
            <span className="text-2xl font-semibold text-gray-800">{name}</span>
            <div className="flex items-center gap-1 text-yellow-500">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-b-2 border-gray-200 py-4">
          <ImQuotesLeft
            size={24}
            color="#d4d4d8"
            className="inline mb-3 mr-4"
          />
          <p className="text-gray-800 font-light inline">{review}</p>
          <ImQuotesRight
            size={24}
            color="#d4d4d8"
            className="inline mb-3 ml-4"
          />
        </div>
        {/* <p className="text-md text-gray-400 mt-auto">
          {i18n.t("review.from")}{" "}
          <span className="text-gray-900 font-medium">{platform}</span>
        </p> */}
      </div>
    </motion.div>
  );
}

export default ReviewCard;
