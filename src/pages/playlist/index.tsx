import { Container } from "@/components/container";
import { PlaylistCard } from "@/components/card/playlistCard";
import { CarouselMaterialTCSS } from "@/components/carousel";
import { MostListenedPlaylistCard } from "@/components/card/mostListenedPlaylistCard";
import { UnderMeasurePlaylistCard } from "@/components/card/underMeasurePlaylistCard.";
import { Content } from "@/components/content";
import { Player } from "@/components/player";
import { Canvas } from "@/components/canvas";

export function Playlist() {
  return (
    <Canvas>
      <Container>
        <div>
          <h1 className="text-2xl text-primary">Minhas Playlists</h1>
          <Content>
            <CarouselMaterialTCSS>
              <div className="flex flex-col gap-2">
                <PlaylistCard />
                <PlaylistCard />
              </div>
            </CarouselMaterialTCSS>
          </Content>
          <h1 className="text-2xl text-primary">Playlists mais ouvidas</h1>
          <Content>
            <CarouselMaterialTCSS>
              <div className="flex gap-2">
                <MostListenedPlaylistCard />
              </div>
            </CarouselMaterialTCSS>
          </Content>
          <h1 className="text-2xl text-primary">Playlists sob medida</h1>
          <Content>
            <CarouselMaterialTCSS>
              <div className="flex gap-2">
                <UnderMeasurePlaylistCard />
              </div>
            </CarouselMaterialTCSS>
          </Content>
        </div>
      </Container>
      <Player />
    </Canvas>
  );
}
