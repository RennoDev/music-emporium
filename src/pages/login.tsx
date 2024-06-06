import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
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
            <Label htmlFor="email">Senha</Label>
            <Input type="email" id="email" placeholder="Digite sua senha" />
          </div>
          <Button variant={"default"}>Entrar</Button>
          <div>
            <p className="text-white">Não tem uma conta?</p>
            <a href="" className="text-primary hover:text-primary/70">
              Cadastre-se aqui!
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
