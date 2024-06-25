import { Route, Routes } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Login } from "@/pages/login";
import { NotFound } from "@/pages/notFound";
import { Playlist } from "@/pages/playlist";
import { Options } from "@/pages/options";
import { Register } from "@/pages/register";
import { Trending } from "@/pages/trending";
import { Home } from "@/pages/home";
import { Artist } from "@/pages/artist";
import { Album } from "@/pages/album";

export default function CustomRoutes() {
  return (
    <Routes>
      {/*Estrutura para manter um componente em tela, independente da rota, no caso Navbar*/}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/options" element={<Options />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/album" element={<Album />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/*Quando não achar nenhuma rota*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
