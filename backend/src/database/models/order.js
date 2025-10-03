import { sequelize } from "@config/database";
import { DataTypes } from "sequelize";

//Campos del modelo de Orden
export const ORDER = sequelize.define("Orders", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  totalAmount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  status: { type: DataTypes.ENUM("pendiente","finalizada","cancelada"), allowNull: false, defaultValue: "pendiente" },
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

/*LAS RELACIONES SE ENCUENTRAN EN EL ARCHIVO "relationships.ts" ACÁ EN LA CARPETA MODELS */
