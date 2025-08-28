import { Link } from "react-router-dom";
import errorImage from "@/assets/404.png";
export default function ErrorPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-mainColor text-center gap-8">
      <h1 className="text-3xl font-bold">
        Lo lamentamos pero esta página no existe
      </h1>
      <img
        src={errorImage}
        alt="Imagen de 404 con una dona siendo el 0"
        className="w-md"
      />
      <Link
        to={"/"}
        className="bg-mainColor text-textAndBg p-2 rounded-2xl text-xl hover:bg-secondaryColor hover:scale-105 transition-transform"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
