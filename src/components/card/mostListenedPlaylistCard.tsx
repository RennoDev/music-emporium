import musicImg from "../../assets/img/albumcover.png";
import { Button } from "../ui/button";

export function MostListenedPlaylistCard() {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row items-center text-center justify-center rounded-lg px-4 py-2 gap-x-4 bg-myBlack text-white">
      <div className="flex w-[140px] md:w-[120px] h-fit rounded-lg py-2">
        <img src={musicImg} />
      </div>
      <div className="flex flex-col text-left h-full justify-around">
        <div className="flex flex-col">
          <p className="text-base">Nome da playlist</p>
          <p className="text-xs md:mt-2">Artista 1, Artista 2, Artista 3...</p>
          <p className="text-sm">328 músicas no total</p>
        </div>
        <div className="flex gap-x-2 mt-2">
          <Button variant={"primary"}>Play</Button>
        </div>
      </div>
    </div>
  );
}
