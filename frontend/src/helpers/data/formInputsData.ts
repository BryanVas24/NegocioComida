//------ESTE ARCHRIVO TIENE TODOS LOS DATOS DE LOS INPUTS DE LOS FORMULARIOS------

import type { UserRegisterForm } from "@/types/AuthTypes";
import type { formInputsType } from "@/types/generalTypes";

/*--Formulario de registro--*/
export const registerFormInputs: formInputsType<keyof UserRegisterForm>[] = [
  {
    id: "firstNameInput",
    labelText: "Primer Nombre",
    type: "text",
    placeholder: "Ingresa tu primer nombre",
    register: "firstName",
    validation: { required: "Tu nombre es obligatorio" },
  },
  {
    id: "lastNameInput",
    labelText: "Apellido",
    type: "text",
    placeholder: "Ingresa tu apellido",
    register: "lastName",
    validation: { required: "Tu apellido es obligatorio" },
  },
  {
    id: "email",
    labelText: "Email",
    type: "email",
    placeholder: "tu.email@ejemplo.com",
    register: "email",
    validation: {
      required: "Tu email es obligatorio",
      pattern: {
        value: /^\S+@\S+$/i,
        message: "Email inválido",
      },
    },
  },
  {
    id: "phone",
    labelText: "Teléfono",
    type: "tel",
    placeholder: "0000-0000",
    register: "phone",
    validation: {
      required: "Tu teléfono es obligatorio",
    },
  },
  {
    id: "password",
    labelText: "contraseña",
    type: "password",
    placeholder: "Ingresa tu contraseña",
    register: "password",
    validation: {
      required: "Tu contraseña es obligatoria",
    },
  },
  {
    id: "repeatpassword",
    labelText: "Confirmar Contraseña",
    type: "password",
    placeholder: "confirma tu contraseña",
    register: "repeatPassword",
    validation: {
      required: "Tu contraseña debe coinicidir",
    },
  },
];
