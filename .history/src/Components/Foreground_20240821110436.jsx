import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci aliquied rtfoe",
      fileSize: "0.5mb",

      close: "false",
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
  ];
  return (
    <div className="w-full h-full fixed top-0 left-0 z-[3]">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Foreground;
