import type { UserRegisterForm } from "@/types/AuthTypes";
import { useForm, type SubmitHandler } from "react-hook-form";

export const useRegisterForm = () => {
  // Valores iniciales del formulario
  const initialValues: UserRegisterForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  };

  // Hook de react-hook-form, register para campos,handleSubmit para enviar el formulario, errors para errores y isSubmitting para estado de envío
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch
  } = useForm({ defaultValues: initialValues });

  const passwordToCompare = watch("password");

  //Función que se ejecuta al enviar el formulario
  const onSubmit: SubmitHandler<UserRegisterForm> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return { register, handleSubmit, errors, isSubmitting, onSubmit, passwordToCompare };
};
