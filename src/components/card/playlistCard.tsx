import musicImg from "../../assets/img/albumcover.png";
import { Button } from "../ui/button";

export function PlaylistCard() {
  return (
    <div className="w-full h-[100px] flex items-start text-start justify-between p-4 gap-4 bg-myBlack text-white rounded-lg">
      <div className="flex text-left gap-2">
        <img src={musicImg} className="w-fit h-[68px] rounded-lg" />
        <div className="flex flex-col">
          <p className="text-base">Nome da playlist</p>
          <p className="text-xs md:mt-2">Artista 1, Artista 2, Artista 3...</p>
          <p className="text-sm">328 músicas no total</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Button variant={"primary"} size={"sm"}>
          Play
        </Button>
        <Button variant={"destructive"} size={"sm"}>
          Excluir
        </Button>
      </div>
    </div>
  );
}
