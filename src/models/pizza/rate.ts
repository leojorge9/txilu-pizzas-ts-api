import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildPizzaRate(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('PIZZA_RATE',{
    ID:{
        type: DataTypes.UUID,
        primaryKey: true,
    },
    VALUE: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    DESC:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    })
 }