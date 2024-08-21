import { IoDocumentOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";

const Card = ({ data }) => {
  return (
    <div className="w-[16vw] h-[45vh] rounded-[2rem] text-white px-5 py-10 bg-black relative overflow-hidden">
      <IoDocumentOutline size="1.2em" />
      <p className="text-sm font-medium mt-5">{data.desc}</p>
      {/* footer   */}
      <div className="footer  absolute bottom-0 left-0 w-full h-15  ">
        <div className="flex items-center justify-between p-5">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-500 rounded-full flex items-center justify-center cursor-pointer">
            {/* <LuDownload /> */}
            {data.close ? <IoCloseSharp /> : <LuDownload />}
          </span>
        </div>{" "}
        {/* <div className="w-full h-10 bg-blue-500 flex items-center justify-center cursor-pointer ">
          <h2 className=" text-sm font-medium"> Download Now </h2>
        </div> */}
        {data.tag.isOpen ? (
          <div
            className={`w-full h-10 ${data.tag.tagColor==='blue'
                
            } flex items-center justify-center cursor-pointer `}
          >
            <h2 className=" text-sm font-medium">{data.tag.tagTitle}</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
