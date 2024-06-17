import { Container } from "@/components/container";
import { Content } from "@/components/content";
import { Player } from "@/components/player";
import { Canvas } from "@/components/canvas";
import { MostViewedMusicCard } from "@/components/card/mostViewedMusicCard";

export function Trending() {
  return (
    <Canvas>
      <Container className="md:w-1/2">
        <div>
          <h1 className="text-2xl text-primary">Top 100 da Emporium</h1>
          <Content className="justify-center">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <h1 className="text-primary underline">1.</h1>
                <MostViewedMusicCard />
              </div>
            </div>
          </Content>
        </div>
      </Container>
      <Player />
    </Canvas>
  );
}
