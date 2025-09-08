import LoginAndRegisterBG from "@AppComponents/auth/LoginAndRegisterBG";
import { useLoginForm } from "@AppHooks/auth/useLoginForm";
import FormInput from "@/components/common/forms/FormInput";
import FormPasswordInput from "@/components/common/forms/FormPasswordInput";
import { buttonClass } from "@/helpers/commonStyles";

export default function Login() {
  //Uso del custom hook useLoginForm para manejar el formulario
  const { errors, handleSubmit, isSubmitting, onSubmit, register } = useLoginForm();

  return (
    <LoginAndRegisterBG title="Iniciar Sesión">
      <form
        className="flex justify-center flex-col gap-5 animate__animated animate__fadeInBottomRight "
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormInput
          id="emailInput"
          labelText="Email"
          type="email"
          placeholder="Email de Registro"
          error={errors.email?.message}
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "El formato de email debe incluir @",
            },
          })}
        />

        <FormPasswordInput
          labelText="Contraseña"
          error={errors.password?.message}
          placeholder="Tu contraseña"
          {...register("password", { required: "El password es obligatorio" })}
        />

        <button className={buttonClass} disabled={isSubmitting} type="submit">
          {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
        </button>
      </form>
    </LoginAndRegisterBG>
  );
}
