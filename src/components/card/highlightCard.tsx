import { Link } from "react-router-dom";
import musicImg from "../../assets/img/albumcover.png";
import { Button } from "../ui/button";

export function HighlightCard() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center text-center justify-center rounded-lg px-4 py-2 gap-x-4 bg-myBlack text-white">
      <div className="flex w-[120px] h-fit rounded-lg py-2">
        <img src={musicImg} />
      </div>
      <div className="flex flex-col text-left h-full justify-around">
        <div className="flex flex-col">
          <p className="text-base md:text-lg">Nome da música</p>
          <Link to={"album"} className="text-xs mt-2  hover:text-primary">
            Álbum
          </Link>
          <Link to={"artist"} className="text-sm  hover:text-primary">
            Artista
          </Link>
        </div>
        <div className="flex mt-2 gap-x-2">
          <Button variant={"primary"}>Play</Button>
          <Button variant={"outline"}>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
