import { Link } from "react-router-dom";
import musicImg from "../../assets/img/albumcover.png";
import { Button } from "../ui/button";

export function MostViewedMusicCard() {
  return (
    <div className="w-full h-full flex items-start text-start p-4 gap-4 rounded-lg bg-myBlack text-white ">
      <div className="flex items-center text-left gap-2">
        <img
          src={musicImg}
          className="w-fit h-[100px] md:h-[68px] rounded-lg"
        />
        <div className="flex flex-col">
          <p className="text-base md:text-lg">Nome da música</p>
          <Link to={"album"} className="text-xs mt-2  hover:text-primary">
            Álbum
          </Link>
          <Link to={"artist"} className="text-sm  hover:text-primary">
            Artista
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        <Button variant={"primary"} className="h-full">
          Play
        </Button>
      </div>
    </div>
  );
}
