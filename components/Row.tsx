import { Movie } from "../typings";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Thumbnail from "./Thumbnail";
import { useRef, useState } from "react";

interface Props {
  title: string;
  movies: Movie[];
}

export default function Row({ title, movies }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [isMoved, setisMoved] = useState(false);

  const handleCLick = (direction: "left" | "right") => {
    setisMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <FaCaretLeft
          onClick={() => {
            handleCLick("left");
          }}
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer transition opacity-0 hover:scale-125 group-hover:opacity-100"
        />

        <div
          ref={rowRef}
          className="flex items-center space-x-0.5 overflow-x-auto scrollbar-hide md:space-x-2.5"
        >
          {movies.map((m) => (
            <Thumbnail movie={m} key={m.id} />
          ))}
        </div>

        <FaCaretRight
          onClick={() => {
            handleCLick("right");
          }}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer transition opacity-0 hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}
