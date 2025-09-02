import type { UserLoginForm } from "@/types/AuthTypes";
import { useForm, type SubmitHandler } from "react-hook-form";

export const useLoginForm = () => {
  // Valores iniciales del formulario
  const initialValues: UserLoginForm = {
    email: "",
    password: "",
  };

  // Hook de react-hook-form, register para campos,handleSubmit para enviar el formulario, errors para errores y isSubmitting para estado de envío
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

  return { register, handleSubmit, errors, isSubmitting, onSubmit };
};
