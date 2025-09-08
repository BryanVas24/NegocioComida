import FormInput from "@/components/common/forms/FormInput";
import { useRegisterForm } from "@/hooks/app/auth/useRegisterForm";
import LoginAndRegisterBG from "@AppComponents/auth/LoginAndRegisterBG";
import { registerFormInputs } from "@/helpers/data/formInputsData";
import { buttonClass } from "@/helpers/commonStyles";
import FormPasswordInput from "@/components/common/forms/FormPasswordInput";
import ErrorMessage from "@/components/shared/ErrorMessage";

export default function Register() {
  //Uso del custom hook useLoginForm para manejar el formulario
  const { errors, handleSubmit, isSubmitting, register, onSubmit, passwordToCompare } =
    useRegisterForm();

  //Esto cuenta el total de errores en el formulario
  const totalErrors = Object.keys(errors).length;

  return (
    <LoginAndRegisterBG title="Crear Cuenta">
      {/*Si hay más de 3 errores muestra un mensaje general */}
      {totalErrors > 3 && (
        <ErrorMessage message="Todos los campos son obligatorios" />
      )}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 animate__animated animate__fadeInBottomRight"
      >
        {/*Los inputs se mapean agregandose en otro archivo*/}
        {registerFormInputs.map((input) =>
          input.register === "password" || input.register === "repeatPassword" ? (
            <FormPasswordInput
              key={input.id}
              labelText={input.labelText}
              error={totalErrors <= 3 ? errors[input.register]?.message : undefined}
              placeholder={input.placeholder}
              {...register(input.register, {...input.validation,
                ...(input.register === "repeatPassword" && {
                  validate: (value) =>
                    value === passwordToCompare || "Las contraseñas no coinciden",
                }),
              })}
            />
          ) : (
            <FormInput
              id={input.id}
              key={input.id}
              labelText={input.labelText}
              type={input.type}
              extraStyles="col-span-2 md:col-span-1"
              placeholder={input.placeholder}
              error={
                totalErrors <= 3 ? errors[input.register]?.message : undefined
              }
              {...register(input.register, input.validation)}
            />
          )
        )}

        {/*El botón */}
        <button
          className={`${buttonClass} col-span-2`}
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </LoginAndRegisterBG>
  );
}
