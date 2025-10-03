import { sequelize } from "@config/database";
import { DataTypes } from "sequelize";

//Campos del modelo de Cliente
export const CUSTOMER = sequelize.define("Customers", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  firstName: { type: DataTypes.STRING, allowNull: false },
  lastName: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  phone: { type: DataTypes.STRING, allowNull: true },
  password: { type: DataTypes.STRING, allowNull: true },
});

/*LAS RELACIONES SE ENCUENTRAN EN EL ARCHIVO "relationships.ts" ACÁ EN LA CARPETA MODELS */