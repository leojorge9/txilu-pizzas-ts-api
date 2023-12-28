import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildPizza(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('PIZZA',{
    ID:{
        type: DataTypes.UUID,
        primaryKey: true,
    },
    PHOTO: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }

    },
    NAME:{
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true

    },
    PRICE: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    STATUS:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "alaviable"
    },
    })

}