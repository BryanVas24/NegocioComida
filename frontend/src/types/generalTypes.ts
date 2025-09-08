import type { HTMLInputTypeAttribute } from "react";

//Tipo de los inputs de los formularios
export type formInputsType<T> = {
  id: string;
  labelText: string;
  type: HTMLInputTypeAttribute; //Esto incluye tipos como "text", "email", "password", etc.
  placeholder: string;
  register: T;
  validation?: Record<string, any>;
};
