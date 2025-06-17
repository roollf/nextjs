"use client";

// react
import { useActionState } from "react";

// actions
import { login } from "@/actions/auth/login.action";

// component
import { LoginCardComponent } from "@/components/login-card-component";

// libs
import { clsx } from "clsx";

export function LoginCardContainer() {
  const [formState, formAction, isPending] = useActionState(login, {
    message: "",
    errors: undefined,
    fieldValues: {
      email: "",
      password: "",
    },
  });

  return (
    <LoginCardComponent.Root>
      <LoginCardComponent.UpperContent>
        <p className="text-[20px] text-center font-bold leading-normal not-italic text-[#170D29]">
          Bem vindo ao 'título do projeto'
        </p>
        <p className="text-[18px] text-center font-normal leading-normal not-italic text-[#170D29]">
          Subtítulo do projeto
        </p>
        <p className="text-[18px] text-center font-normal leading-normal not-italic text-[#170D29]">
          Descrição do projeto
        </p>
      </LoginCardComponent.UpperContent>
      <LoginCardComponent.BottomContent>
        <form action={formAction} className="flex flex-col gap-[20px]">
          <input
            name="email"
            type="text"
            placeholder="Email"
            defaultValue={formState.fieldValues.email}
            className="w-[355px] h-[50px] shrink-0 bg-[#D1C8FF] rounded-[100px] p-[15px]"
          />
          <span className="text-sm text-red-400">
            {formState.errors?.email}
          </span>
          <input
            name="password"
            type="password"
            placeholder="Senha"
            defaultValue={formState.fieldValues.password}
            className="w-[355px] h-[50px] shrink-0 bg-[#D1C8FF] rounded-[100px] p-[15px]"
          />
          <span className="text-sm text-red-400">
            {formState.errors?.password}
          </span>
          <button
            disabled={isPending}
            type="submit"
            className="w-[355px] h-[50px] shrink-0 bg-[#5E45D8] rounded-[100px] cursor-pointer"
          >
            {isPending ? (
              <p className="text-[18px] text-center font-bold leading-normal not-italic text-[#FFFFFF]">
                Acessando...
              </p>
            ) : (
              <p className="text-[18px] text-center font-bold leading-normal not-italic text-[#FFFFFF]">
                Acessar
              </p>
            )}
          </button>
        </form>
        {/* {formState.message === "success" && (
          <span className="font-bold">Login realizado com sucesso!</span>
        )} */}
      </LoginCardComponent.BottomContent>
    </LoginCardComponent.Root>
  );
}
