import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildPizzaIgredients(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('IGREDIENT',{ 
    ID:{
        type: DataTypes.UUID, 
        primaryKey: true,
    },
    NAME: {
        type: DataTypes.STRING(25),
        allowNull: false

      }
    })

 }