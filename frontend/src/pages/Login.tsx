import LoginAndRegisterBG from "@AppComponents/auth/LoginAndRegisterBG";
import type { UserLoginForm } from "@/types/AuthTypes";
import { useForm, type SubmitHandler } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { inputClass, buttonClass } from "@/helpers/commonStyles";
import WarnMessage from "@/components/shared/WarnMessage";

export default function Login() {
  //state para mostrar o ocultar el password
  const [showPassword, setShowPassword] = useState(false);

  // Valores iniciales del formulario
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: initialValues });

  //Función que se ejecuta al enviar el formulario
  const onSubmit: SubmitHandler<UserLoginForm> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  //Función para mostrar u ocultar el password
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <LoginAndRegisterBG title="Iniciar Sesión">
      <form
        className="flex justify-center flex-col gap-5 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="emailInput">Email</label>
          <input
            {...register("email", { required: "El email es obligatorio" })}
            id="emailInput"
            type="email"
            placeholder="Email de Registro"
            className={inputClass}
          />
          {/*Este es el error que se muestra en la interfaz */}
          {errors.email && (
            <WarnMessage errorMessage={errors.email.message!} />
          )}
        </div>

        <div>
          <label htmlFor="passwordInput">Password</label>
          <div className="relative">
            <input
              {...register("password", {
                required: "El password es obligatorio",
              })}
              id="passwordInput"
              type={showPassword ? "text" : "password"}
              className={inputClass}
              placeholder={showPassword ? "Contraseña" : "**********"}
            />
            {/*Icono para mostrar u ocultar el password */}
            <button
              type="button"
              onClick={() => toggleShowPassword()}
              className="absolute top-3 right-3 cursor-pointer text-2xl text-gray-400 hover:scale-105 transition"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          {/*Este es el error que se muestra en la interfaz */}
          {errors.password && (
            <WarnMessage errorMessage={errors.password.message!} />
          )}
        </div>

        <button
          className={buttonClass}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Iniciando sesión..." : "Iniciar Sesión"}
        </button>
      </form>
    </LoginAndRegisterBG>
  );
}
