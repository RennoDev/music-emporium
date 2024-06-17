import { CarouselMaterialTCSS } from "@/components/carousel";
import { Container } from "@/components/container";
import { HighlightCard } from "@/components/card/highlightCard";
import { LastListenedCard } from "@/components/card/lastListenedCard";
import { MusicTypeCard } from "@/components/card/musicTypesCard";
import { Player } from "@/components/player";
import { Content } from "@/components/content";
import { Canvas } from "@/components/canvas";

export function Home() {
  return (
    <Canvas>
      <Container>
        <div>
          <h1 className="text-2xl text-primary">Destaques da Emporium</h1>
          <Content>
            <CarouselMaterialTCSS>
              <div className="flex gap-2">
                <HighlightCard />
                <HighlightCard />
              </div>
            </CarouselMaterialTCSS>
          </Content>
          <h1 className="text-2xl text-primary mt-2">Últimas ouvidas</h1>
          <Content>
            <CarouselMaterialTCSS>
              <div className="flex flex-col gap-2">
                <LastListenedCard />
                <LastListenedCard />
              </div>
              <div className="flex flex-col gap-2">
                <LastListenedCard />
                <LastListenedCard />
              </div>
            </CarouselMaterialTCSS>
          </Content>
          <h1 className="text-2xl text-primary mt-2">
            Estilos para você conhecer!
          </h1>
          <Content>
            <CarouselMaterialTCSS>
              <div className="flex gap-2">
                <MusicTypeCard />
                <MusicTypeCard />
                <MusicTypeCard />
              </div>
            </CarouselMaterialTCSS>
          </Content>
        </div>
      </Container>
      <Player />
    </Canvas>
  );
}
