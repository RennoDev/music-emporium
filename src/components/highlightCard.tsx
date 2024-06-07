import musicImg from "../assets/img/albumcover.png";
import { Button } from "./ui/button";

export function HighlightCard() {
  return (
    <div className="flex items-center text-center justify-center px-4 py-2 gap-x-4 bg-background text-white rounded-lg">
      <img src={musicImg} className="w-auto h-auto rounded-lg py-2" />
      <div className="flex flex-col text-left h-full justify-around">
        <div>
          <p className="text-2xl">Nome da música</p>
          <p className="text-xl">Álbum</p>
          <p className="text-base">Nome do(a) artista</p>
        </div>
        <div className="flex mt-2 gap-x-2">
          <Button variant={"primary"}>Play</Button>
          <Button variant={"outline"}>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
