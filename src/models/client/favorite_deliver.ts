import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildFavoriteDeliver(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define("FAVORITE_DEVLIVER", {
    ID: {
        type: DataTypes.UUID,
        primaryKey: true
    }
    })
 }