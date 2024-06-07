import { Container } from "@/components/container";
import { HighlightCard } from "@/components/highlightCard";
import { LastListenedCard } from "@/components/lastListenedCard";
import { Player } from "@/components/player";

export function Home() {
  return (
    <div className="flex justify-center items-center flex-col mt-2">
      <Container>
        <h1 className="text-2xl text-primary">Destaques da Emporium</h1>
        <div className="flex gap-2 mt-2">
          <HighlightCard />
          <HighlightCard />
        </div>
        <h1 className="text-2xl text-primary mt-2">Últimas ouvidas</h1>
        <div className="flex gap-2 mt-2">
          <LastListenedCard />
        </div>
      </Container>
      <Player />
    </div>
  );
}
