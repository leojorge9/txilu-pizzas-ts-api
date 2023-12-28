import {  DataTypes, Model, ModelCtor, Sequelize }  from "sequelize"

export default function buildFavoritePizza(reference : Sequelize) : ModelCtor<Model<any, any>>
 {
    return reference.define('FAVORITE_PIZZA',{
        ID:{
            type: DataTypes.UUID,
            primaryKey: true,
        }
    })

 }