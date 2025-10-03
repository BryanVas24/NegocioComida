import { CUSTOMER } from './customer';
import { ORDER } from './order';
import { ORDER_PRODUCT } from './orderProduct';
import { PRODUCT } from './product';
import { USER } from './user';
import { ROL } from './rol';
import { PERMISSION } from './permission';
import { MODULE } from './module';
import { ROL_PERMISSION } from './rolPermission';

/*Acá se definen todas las relaciones de las tablas, hay campos que se crean acá aunque no aparecen en los modelos
                        -----------------IMPORTANTE-----------------
  ---------------SI ES LA PRIMERA VEZ QUE CORRES EL PROYECTO USA ESTO EN LA TERMINAL----------------
  /Esto crea una migración/
 npx sequelize-cli migration:generate --name create-customers
  /Esto corre la migración/
*/

// Customer - Order (1:N)
CUSTOMER.hasMany(ORDER, { foreignKey: 'customerId' });
ORDER.belongsTo(CUSTOMER, { foreignKey: 'customerId' });

// User - Order (1:N)
USER.hasMany(ORDER, { foreignKey: 'userId' });
ORDER.belongsTo(USER, { foreignKey: 'userId' });

// Order - Product (N:M through OrderProduct)
ORDER.belongsToMany(PRODUCT, { 
  through: ORDER_PRODUCT,
  foreignKey: 'orderId',
  otherKey: 'productId'
});
PRODUCT.belongsToMany(ORDER, { 
  through: ORDER_PRODUCT,
  foreignKey: 'productId',
  otherKey: 'orderId'
});

// Module - Permission (1:N)
MODULE.hasMany(PERMISSION, { foreignKey: 'moduleId' });
PERMISSION.belongsTo(MODULE, { foreignKey: 'moduleId' });

// Rol - User (1:N)
ROL.hasMany(USER, { foreignKey: 'rolId' });
USER.belongsTo(ROL, { foreignKey: 'rolId' });

// Rol - Permission (N:M)
ROL.belongsToMany(PERMISSION, { 
  through: ROL_PERMISSION,
  foreignKey: 'rolId',
  otherKey: 'permissionId'
});
PERMISSION.belongsToMany(ROL, { 
  through: ROL_PERMISSION,
  foreignKey: 'permissionId',
  otherKey: 'rolId'
});