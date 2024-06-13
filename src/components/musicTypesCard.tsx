import { Link } from "react-router-dom";
import musicImg from "../assets/img/albumcover.png";

export function MusicTypeCard() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center text-center justify-center rounded-lg px-4 py-2 gap-x-4 bg-myBlack text-white hover:bg-primary hover:mb-2 hover:duration-200">
      <Link to={"/musicstyle/x"} className="flex w-fit h-fit rounded-lg py-2">
        <img src={musicImg} className="" />
      </Link>
    </div>
  );
}
