import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildAdminLocation(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('ADMIN_LOCATION', {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    LAT: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    LON:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    })
 }