import { Link } from "react-router-dom";
import musicImg from "../assets/img/albumcover.png";
import { Button } from "./ui/button";

export function LastListenedCard() {
  return (
    <div className="w-full h-[100px] flex items-start text-start justify-between p-4 gap-4 bg-myBlack text-white rounded-lg">
      <div className="flex text-left gap-2">
        <img src={musicImg} className="w-fit h-[68px] rounded-lg" />
        <div className="flex flex-col">
          <p className="text-base">Nome da música</p>
          <Link to={"album"} className="text-xs mt-2 hover:text-primary">
            Álbum
          </Link>
          <Link to={"artist"} className="text-sm hover:text-primary">
            Nome do(a) artista
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Button variant={"primary"} size={"sm"}>
          Play
        </Button>
        <Button variant={"outline"} size={"sm"}>
          Salvar
        </Button>
      </div>
    </div>
  );
}
