import { Navbar } from "@/components/navbar";
import { Login } from "@/pages/login";
import { NotFound } from "@/pages/notFound";
import { Playlist } from "@/pages/playlist";
import { Profile } from "@/pages/profile";
import { Register } from "@/pages/register";
import { Trending } from "@/pages/trending";
import { Home } from "@/pages/home";
import { Route, Routes } from "react-router-dom";

export default function CustomRoutes() {
  return (
    <Routes>
      {/*Estrutura para manter um componente em tela, independente da rota, no caso Navbar*/}
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/*Quando não achar nenhuma rota*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
