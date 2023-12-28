import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildDeliver(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('DELIVER', {
    ID: {
        type: DataTypes.STRING(25),
        primaryKey: true
    },
    PHOTO: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isUrl: true,
      }
    },
    USERNAME: {
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue : "username",
        validate: {
            isAlphanumeric : true 
        }
    },
    FIRST_NAME: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            isAlpha : true 
        }
    },
    LAST_NAME: {
        type: DataTypes.STRING(15),
        allowNull: false,
        validate: {
            isAlpha : true 
        }
    },
    EMAIL:{
        type: DataTypes.STRING(35),
        allowNull: false,
        unique: true,
        validate : {
            isEmail  : true,
        }
    },
    PHONE_NUMBER:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        validate:{
            isNumeric : true
        }
    },
    PASS_WORD:{
        type: DataTypes.STRING(15),
        allowNull: false,
        defaultValue : "pendding",
    }
})

 }