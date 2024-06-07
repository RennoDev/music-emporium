import musicImg from "../assets/img/albumcover.png";
import { Button } from "./ui/button";

export function LastListenedCard() {
  return (
    <div className="flex items-center text-center justify-center px-4 gap-4 bg-background text-white rounded-lg">
      <img src={musicImg} className="w-[158px] h-[155px] rounded-lg py-2" />
      <div className="flex flex-col text-left">
        <p className="text-2xl">Nome da música</p>
        <p className="text-xl">Álbum</p>
        <p className="text-base">Nome do(a) artista</p>
        <div className="flex mt-2 gap-x-2">
          <Button variant={"primary"}>Play</Button>
          <Button variant={"outline"}>Salvar</Button>
        </div>
      </div>
    </div>
  );
}
