import { sequelize } from "@config/database";
import { DataTypes } from "sequelize";

//Campos del modelo de Permiso
export const PERMISSION = sequelize.define("PermissionS", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  description: { type: DataTypes.STRING, allowNull: false },
});

/*LAS RELACIONES SE ENCUENTRAN EN EL ARCHIVO "relationships.ts" ACÁ EN LA CARPETA MODELS */


