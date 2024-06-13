import { CarouselMaterialTCSS } from "@/components/carousel";
import { Container } from "@/components/container";
import { HighlightCard } from "@/components/highlightCard";
import { LastListenedCard } from "@/components/lastListenedCard";
import { MusicTypeCard } from "@/components/musicTypesCard";
import { Player } from "@/components/player";

export function Home() {
  return (
    <div className="w-[360px] md:w-[768px] lg:w-[1064px] flex justify-center items-center flex-col mt-2 rounded-lg overflow-hidden">
      <Container>
        <div className="">
          <h1 className="text-2xl text-primary">Destaques da Emporium</h1>
          <div className="w-full flex gap-2 mt-2 overflow-auto overscroll-auto scrollbar-thin scrollbar-webkit">
            <CarouselMaterialTCSS>
              <div className="flex gap-2">
                <HighlightCard />
              </div>
              <div className="flex gap-2">
                <HighlightCard />
              </div>
              <div className="flex gap-2">
                <HighlightCard />
              </div>
            </CarouselMaterialTCSS>
          </div>
          <h1 className="text-2xl text-primary mt-2">Últimas ouvidas</h1>
          <div className="flex gap-2 mt-2">
            <CarouselMaterialTCSS>
              <div className="flex flex-col gap-2">
                <LastListenedCard />
                <LastListenedCard />
              </div>
              <div className="flex flex-col gap-2">
                <LastListenedCard />
                <LastListenedCard />
              </div>
              <div className="flex flex-col gap-2">
                <LastListenedCard />
                <LastListenedCard />
              </div>
            </CarouselMaterialTCSS>
          </div>
          <h1 className="text-2xl text-primary mt-2">
            Estilos para você conhecer!
          </h1>
          <div className="flex gap-2 mt-2">
            <CarouselMaterialTCSS>
              <div className="flex gap-2">
                <MusicTypeCard />
              </div>
              <div className="flex gap-2">
                <MusicTypeCard />
              </div>
              <div className="flex gap-2">
                <MusicTypeCard />
              </div>
              <div className="flex gap-2">
                <MusicTypeCard />
              </div>
            </CarouselMaterialTCSS>
          </div>
        </div>
      </Container>
      <Player />
    </div>
  );
}
