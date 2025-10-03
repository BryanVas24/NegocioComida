import { sequelize } from "@config/database";
import { DataTypes } from "sequelize";

//Campos del modelo de Producto
export const PRODUCT = sequelize.define("Products", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
});

/*LAS RELACIONES SE ENCUENTRAN EN EL ARCHIVO "relationships.ts" ACÁ EN LA CARPETA MODELS */