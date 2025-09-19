import { Sequelize } from "sequelize";

//Este es la ruta de la base de datos
const dbName = process.env.DATABASE_URL;

//Si no existe la variable de entorno lanza un error
if (!dbName) {
  throw new Error("No se ha definido la variable de entorno DATABASE_URL");
}

//Asi se crea la conexión
export const sequelize = new Sequelize(dbName, { dialect: "postgres" });

//Función para probar la conexión
export async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
