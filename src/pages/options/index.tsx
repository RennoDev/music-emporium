import { Canvas } from "@/components/canvas";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function Options() {
  const navigate = useNavigate();

  return (
    <Canvas>
      <Container className="md:w-1/2 h-auto">
        <h1 className="text-2xl text-primary">Opções</h1>
        <div className="w-auto flex flex-col justify-center items-center gap-1">
          <Button onClick={() => navigate("/")} className="w-[165px]">
            Meus dados
          </Button>
          <Button onClick={() => navigate("/")} className="w-[165px]">
            Social
          </Button>
          <Button onClick={() => navigate("/")} className="w-[165px]">
            Configurações
          </Button>
          <Button onClick={() => navigate("/")} className="w-[165px]">
            Suporte
          </Button>
          <Button
            onClick={() => navigate("/login")}
            variant={"destructive"}
            className="w-[165px]"
          >
            Sair
          </Button>
        </div>
      </Container>
    </Canvas>
  );
}
