import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildOrder(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('ORDER',{
    ID:{
        type: DataTypes.UUID,
        primaryKey: true,
    },
    LAT: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    LON:{
        type: DataTypes.INTEGER,
        allowNull: false

    },
    DISTANCE: {
        type: DataTypes.DOUBLE(1,1),
        allowNull: false
    },
    TIME: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    STATUS:{
        type: DataTypes.STRING(25),
        allowNull: false,
        defaultValue: "pending"
    },
    })
 }