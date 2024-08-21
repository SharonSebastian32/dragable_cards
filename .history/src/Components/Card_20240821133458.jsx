import { IoDocumentOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  const getTagColor = (tagTitle) => {
    switch (tagTitle) {
      case "Download Now":
        return "border-green-500 text-green-500";
      case "Upload Now":
        return "border-blue-500 text-blue-500";
      case "Close Now":
        return "border-red-500 text-red-500";
      default:
        return "border-gray-500 text-gray-500";
    }
  };

  return (
    <motion.div
      className={`border-2 p-4 mb-4 rounded-md ${getTagColor(
        data.tag.tagTitle
      )}`}
      ref={reference}
    >
      {/* Content */}
      <div className="flex items-center mb-4">
        <IoDocumentOutline size={24} className="mr-2" />
        <p>{data.desc}</p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span>{data.fileSize}</span>
        <div>
          {/* Icons */}
          {data.close ? (
            <IoCloseSharp size={20} className="text-red-500" />
          ) : (
            <>
              {data.tag.tagTitle === "Download Now" ? (
                <LuDownload size={20} className="text-green-500" />
              ) : (
                <IoCloudUploadOutline size={20} className="text-blue-500" />
              )}
            </>
          )}
        </div>
      </div>

      {/* Tag */}
      {data.tag.isOpen && (
        <div className={`mt-2 ${getTagColor(data.tag.tagTitle)}`}>
          {data.tag.tagTitle}
        </div>
      )}
    </motion.div>
  );
};

export default Card;
