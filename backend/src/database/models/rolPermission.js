import { sequelize } from "@config/database";
import { DataTypes } from "sequelize";

//Campos de tabla pivot Rol_Permission
export const ROL_PERMISSION = sequelize.define("RolPermission", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
});

/*LAS RELACIONES SE ENCUENTRAN EN EL ARCHIVO "relationships.ts" ACÁ EN LA CARPETA MODELS */