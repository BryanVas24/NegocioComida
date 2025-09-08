type ErrorMessageProps={
    message: string;
    extraStyles?: string;
}
export default function ErrorMessage({message,extraStyles}: ErrorMessageProps) {
  return (
    <div className={`col-span-2 bg-red-100 text-red-700 p-3 rounded-xl text-center ${extraStyles}`}>
      {message || "Hay varios errores en el formulario. Por favor revisa los campos."}
    </div>
  );
}
