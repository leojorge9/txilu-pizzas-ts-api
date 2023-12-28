import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildAdmin(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('ADMIN', {
        ID: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        NAME: {
            type: DataTypes.STRING(25),
            allowNull: false,
            validate: {
                isAlpha: true
            }
        },
        EMAIL:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail : true
            }
        },
        PHONE_NUMBER:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isNumeric : true
            }
        },
        PASS_WORD:{
            type: DataTypes.STRING(25),
            allowNull: false,
        }
    })    
}
