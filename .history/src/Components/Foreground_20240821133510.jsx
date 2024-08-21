import Card from "./Card";
import { useRef } from "react";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquied rtfoe",
      fileSize: "0.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquied rtfoe",
      fileSize: "0.5mb",
      close: false,
      tag: {
        isOpen: true,
        tagTitle: "Upload Now",
        tagColor: "green",
      },
    },
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aliquied rtfoe",
      fileSize: "0.5mb",
      close: true,
      tag: {
        isOpen: false,
        tagTitle: "Download Now",
        tagColor: "red",
      },
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <Card key={item.id} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
