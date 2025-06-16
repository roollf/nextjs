// component
import { LoginCardComponent } from "@/components/login-card-component";

export function LoginCardContainer() {
  return (
    <LoginCardComponent.Root>
      <LoginCardComponent.UpperContent>
        <p className="text-[20px] text-center font-bold leading-normal not-italic text-[#170D29]">
          Bem vindo ao 'título do projeto'
        </p>
        <p className="text-[16px] text-center font-normal leading-normal not-italic text-[#170D29]">
          Subtítulo do projeto
        </p>
        <p className="text-[16px] text-center font-normal leading-normal not-italic text-[#170D29]">
          Descrição do projeto
        </p>
      </LoginCardComponent.UpperContent>
      <LoginCardComponent.BottomContent>
        <form action={login}>
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </LoginCardComponent.BottomContent>
    </LoginCardComponent.Root>
  );
}
