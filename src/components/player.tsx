import {
  AlignJustify,
  ChevronsLeft,
  ChevronsRight,
  Play,
  Repeat,
  Shuffle,
} from "lucide-react";
import musicImg from "../assets/img/albumcover.png";
import { Link } from "react-router-dom";

export function Player() {
  return (
    <div className="w-[360px] md:w-auto h-26 flex items-center justify-between gap-2 md:gap-4 px-4 py-2 mt-2 border rounded-full border-myGray bg-myGray shadow-[rgba(245,175,175,0.1)] shadow-inner">
      <AlignJustify
        size={48}
        className="flex md:hidden cursor-pointer text-white"
      />
      <div className="hidden md:flex gap-4 items-center text-white">
        <Repeat size={24} onClick={() => {}} className="cursor-pointer" />
        <Shuffle size={24} onClick={() => {}} className="cursor-pointer" />
      </div>
      <div className="w-80 md:w-80 md:h-16 flex gap-2 rounded-lg p-2 bg-myBlack">
        <img src={musicImg} className="w-12" />
        <div className="flex flex-col justify-center md:ml-2 text-white">
          <p className="text-sm">Faint</p>
          <div className="flex flex-col md:flex-row gap-1 md:mt-1 items-start justify-start">
            <Link to={"/album"} className="text-xs hover:text-primary">
              Meteora
            </Link>
            <p className="hidden md:flex text-xs">-</p>
            <Link to={"/artist"} className="text-xs hover:text-primary">
              Linkin Park
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <ChevronsLeft
          size={24}
          onClick={() => {}}
          className="text-primary cursor-pointer"
        />
        <Play
          size={30}
          onClick={() => {}}
          className="text-white cursor-pointer"
        />
        <ChevronsRight
          size={24}
          onClick={() => {}}
          className="text-primary cursor-pointer"
        />
      </div>
    </div>
  );
}
