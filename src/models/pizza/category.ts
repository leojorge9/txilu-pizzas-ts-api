import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildCategory(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('CATEGORY',{ 
    ID:{
        type: DataTypes.UUID, 
        primaryKey: true,
    },
    NAME: {
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true

        }
    })

 }