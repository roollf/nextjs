'use client';

// react
import { useActionState } from 'react';

// actions
import { login } from '@/features/user/actions/login.action';

// hooks
import { useAnimatedError } from '@/shared/hooks/ui/use-animated-error';

// component
import { LoginCardComponent } from '@/features/user/components/login-card-component';

// libs
import { clsx } from 'clsx';

export function LoginCardContainer() {
  const [formState, formAction, isPending] = useActionState(login, {
    message: '',
    errors: undefined,
    fieldValues: {
      email: '',
      password: '',
    },
  });

  const emailErrorRef = useAnimatedError(formState.errors?.email);
  const passwordErrorRef = useAnimatedError(formState.errors?.password);

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
            className={clsx(
              'placeholder-transition placeholder-gray-800 focus:placeholder-gray-400 placeholder:font-bold w-[355px] h-[50px] shrink-0 bg-[#D1C8FF] rounded-[100px] p-[15px] text-gray-800',
              {
                'border border-red-400': formState.errors?.email,
              }
            )}
          />
          <div
            className={clsx(
              'transition-all duration-300 ease-in-out overflow-hidden text-center',
              formState.errors?.email
                ? 'max-h-5 opacity-100'
                : 'max-h-0 opacity-0'
            )}
          >
            <span
              ref={emailErrorRef}
              className="text-sm text-red-400 transition-all duration-300 ease-in-out"
            />
          </div>
          <input
            name="password"
            type="password"
            placeholder="Senha"
            defaultValue={formState.fieldValues.password}
            className={clsx(
              'placeholder-transition placeholder-gray-800 focus:placeholder-gray-400 placeholder:font-bold w-[355px] h-[50px] shrink-0 bg-[#D1C8FF] rounded-[100px] p-[15px] text-gray-800 transition-colors duration-300',
              {
                'border border-red-400': formState.errors?.password,
              }
            )}
          />
          <div
            className={clsx(
              'transition-all duration-300 ease-in-out overflow-hidden text-center',
              formState.errors?.password
                ? 'max-h-5 opacity-100'
                : 'max-h-0 opacity-0'
            )}
          >
            <span
              ref={passwordErrorRef}
              className="text-sm text-red-400 transition-all duration-300 ease-in-out"
            />
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="w-[355px] h-[50px] shrink-0 rounded-[100px] cursor-pointer bg-[#5E45D8] hover:bg-[#6A52E0] active:bg-[#7560E8] transition-colors duration-300"
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
      </LoginCardComponent.BottomContent>
    </LoginCardComponent.Root>
  );
}
