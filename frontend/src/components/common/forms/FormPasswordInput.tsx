import WarnMessage from "@/components/shared/WarnMessage";
//Esta clase contiene los estilos comunes para los inputs
import { inputClass } from "@/helpers/commonStyles";
import { usePasswordToggle } from "@/hooks/usePasswordToggle";
import { FiEye, FiEyeOff } from "react-icons/fi";

type FormPasswordInputProps = {
  labelText: string;
  error?: string;
  id?: string;
  placeholder?: string;
  name?: string;
};

export default function FormPasswordInput({
  labelText,
  id,
  placeholder,
  error,
  ...props
}: FormPasswordInputProps) {
  //Uso del custom hook para manejar el toggle del password
  const { showPassword, toggleShowPassword } = usePasswordToggle();

  return (
    <div>
      <label htmlFor={id || "passwordInput"}>{labelText}</label>

      <div className="relative">
        <input
          id={id || "passwordInput"}
          type={showPassword ? "text" : "password"}
          className={inputClass}
          placeholder={showPassword ? placeholder : "**********"}
          {...props}
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
      {error && <WarnMessage errorMessage={error} />}
    </div>
  );
}
