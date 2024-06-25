import { Canvas } from "@/components/canvas";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  return (
    <Canvas>
      <Container className="md:w-1/2 h-auto items-center justify-center">
        <h1 className="text-primary pb-4 text-2xl">Music Emporium</h1>
        <div className="flex flex-col gap-2 justify-center">
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </div>
          <Button variant={"default"} onClick={() => navigate("/")}>
            Entrar
          </Button>
          <div>
            <p className="text-white">Não tem uma conta?</p>
            <Link to="/register" className="text-primary hover:text-primary/70">
              Clique aqui e crie uma!
            </Link>
          </div>
        </div>
      </Container>
    </Canvas>
  );
}
