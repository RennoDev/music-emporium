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
    <div className="w-[360px] md:w-auto h-26 flex items-center justify-center gap-4 px-4 py-2 mt-2 border rounded-full border-myGray bg-myGray shadow-[rgba(245,175,175,0.1)] shadow-inner">
      <AlignJustify size={24} className="flex md:hidden text-white" />
      <div className="hidden md:flex gap-4 items-center text-white">
        <Repeat size={24} onClick={() => {}} />
        <Shuffle size={24} onClick={() => {}} />
      </div>
      <div className="w-40 md:h-16 flex gap-2 rounded-lg p-2 bg-myBlack">
        <div>
          <img src={musicImg} />
        </div>
        <div className="flex flex-col justify-center text-white">
          <p className="text-sm">Música</p>
          <div className="flex gap-1 md:mt-1 items-start justify-start ">
            <Link to={"/album"} className="text-xs hover:text-primary">
              Álbum
            </Link>
            <p className="text-xs">*</p>
            <Link to={"/artist"} className="text-xs hover:text-primary">
              Artista
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <ChevronsLeft size={24} onClick={() => {}} className="text-primary" />
        <Play size={30} onClick={() => {}} className="text-white" />
        <ChevronsRight size={24} onClick={() => {}} className="text-primary" />
      </div>
    </div>
  );
}
