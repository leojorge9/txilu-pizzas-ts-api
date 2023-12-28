import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildClient(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('CLIENT', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    FIRST_NAME: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate : {
            isAlpha : true
        }
    },
    LAST_NAME: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate : {
            isAlpha : true
        }
    },
    EMAIL:{
        type: DataTypes.STRING(25),
        allowNull: false,
        unique: true,
        validate : {
            isEmail : true
        }
    },
    PHONE_NUMBER:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    PASS_WORD:{
        type: DataTypes.STRING(15),
        allowNull: false,
    }
    })

}