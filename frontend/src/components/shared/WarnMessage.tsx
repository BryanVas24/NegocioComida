import { IoIosWarning } from "react-icons/io";

//Tipo de las props que recibe el componente
type WarnMessageProps = {
  errorMessage: string;
};

export default function WarnMessage({ errorMessage }: WarnMessageProps) {
  return (
    <div className="flex justify-center items-center rounded-2xl border-2 border-lessColor text-lessColor text-sm md:text-lg p-2 m-2">
      <p>{errorMessage}</p> <IoIosWarning />
    </div>
  );
}
