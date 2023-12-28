import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildItems(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('ORDER_ITEMS',{
    ID:{
        type: DataTypes.UUID,
        primaryKey: true,
    },
    QUANT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    })
 }