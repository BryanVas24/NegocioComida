import { sequelize } from "@config/database";
import { DataTypes } from "sequelize";

//Camposd del modelo de Modulo
export const MODULE = sequelize.define("Modules", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
});

/*LAS RELACIONES SE ENCUENTRAN EN EL ARCHIVO "relationships.ts" ACÁ EN LA CARPETA MODELS */