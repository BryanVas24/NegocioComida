import { sequelize } from "@config/database";
import { DataTypes } from "sequelize";

//Campos de tabla pivot  OrderProduct
export const ORDER_PRODUCT = sequelize.define("OrderProducts", {
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    quantity:{type:DataTypes.INTEGER, allowNull:false},
}); 

/*LAS RELACIONES SE ENCUENTRAN EN EL ARCHIVO "relationships.ts" ACÁ EN LA CARPETA MODELS */