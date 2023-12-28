import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildLocalDelivery(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('LOCAL_DELIVERY',{
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
        NAME:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    })
 }