import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function Register() {
  const navigate = useNavigate();

  return (
    <div className="max-w-[1280px] max-h-[832px] flex justify-center items-center flex-col">
      <Container>
        <h1 className="text-primary pb-4 text-2xl">Music Emporium</h1>
        <div className="flex flex-col gap-2 justify-center">
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>
          <div>
            <Label htmlFor="fullName">Nome completo</Label>
            <Input
              type="text"
              id="fullName"
              placeholder="Digite seu nome completo"
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Número de telefone</Label>
            <Input
              type="number"
              id="phoneNumber"
              placeholder="(DDD) 91234-5678"
            />
          </div>
          <div>
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              placeholder="Digite sua senha"
            />
          </div>
          <div>
            <Label htmlFor="password">Confirme a Senha</Label>
            <Input
              type="password"
              id="password"
              placeholder="Digite novamente a sua senha"
            />
          </div>
          <Button variant={"default"} onClick={() => navigate("/login")}>
            Cadastrar
          </Button>
          <div>
            <p className="text-white">Já tem uma conta?</p>
            <Link to="/login" className="text-primary hover:text-primary/70">
              Entre por aqui!
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
