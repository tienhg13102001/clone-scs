interface BlogProps {
  title: string;
  date: string;
  url?: string;
  image: string;
}

const CardMedia = ({ title, date, url, image }: BlogProps) => {
  return (
    <a
      className="flex flex-shrink-0 flex-col overflow-hidden rounded-md bg-white shadow-4xl"
      href={url}
    >
      <img
        className="h-[230px] w-full object-cover"
        width={328}
        height={230}
        src={image}
        alt=""
      />
      <div className="m-3 flex flex-row gap-8">
        <p className="text-[#7C7C7C] text-base">
          {date}
        </p>
        <h2 className="line-clamp-2 text-lg font-semibold text-black">
          {title}
        </h2>

      </div>
    </a>
  );
};

export default CardMedia;
