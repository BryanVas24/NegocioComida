import WarnMessage from "@/components/shared/WarnMessage";
//Esta clase contiene los estilos comunes para los inputs
import { inputClass } from "@/helpers/commonStyles";

type FormInputProps = {
  labelText: string;
  error?: string;
  id?: string;
  type: string;
  placeholder?: string;
  name?: string;
  extraStyles?: string;
};

export default function FormInput({id, labelText, error, type, placeholder,extraStyles, ...props}: FormInputProps) {
  return (
    <div className={`flex flex-col gap-1 ${extraStyles}`}>
      <label htmlFor={id}>{labelText}</label>
      <input
        autoComplete="on"
        id={id}
        type={type}
        placeholder={placeholder}
        className={`${inputClass} `}
        {...props}
      />
      {/*Este es el error que se muestra en la interfaz */}
      {error && <WarnMessage errorMessage={error} />}
    </div>
  );
}
