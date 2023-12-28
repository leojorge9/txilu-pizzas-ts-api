import { Dialect, Model, ModelCtor, Sequelize, SyncOptions } from 'sequelize';
import buildAdmin from '../models/admin/account';
import buildAdminLocation from '../models/admin/location';
import buildCart from '../models/client/cart';
import buildCategory from '../models/pizza/category';
import buildClient from '../models/client/account';
import buildDeliver from '../models/deliver/account';
import buildDeliverLocation from '../models/deliver/location';
import buildDeliverRate from '../models/deliver/rate';
import buildFavoriteDeliver from '../models/client/favorite_deliver';
import buildItems from '../models/order/items';
import buildOrder from '../models/order/order';
import buildPizza from '../models/pizza/pizza';
import buildFavoritePizza from '../models/client/favorite_pizza';
import buildLocalDelivery from '../models/client/local_delivery';
import buildPizzaRate from '../models/pizza/rate';
import relationships from './relationships';
import buildPizzaIgredients from '../models/pizza/igredients';

export class DataBase {
  private static sequelize = require('sequelize')
  private static connection : Sequelize;
  private static tables : Array<ModelCtor<Model<any, any>>> = [];
  private constructor(
    private host : string, 
    private user : string, 
    private password : string,
    private name : string, 
    private dialect? : string, 
    private port? : number,
    ) {}
  static connect( 
     host : string, 
     user : string, 
     password : string,
     name : string, 
     dialect? : Dialect, 
     port? : number,) : Sequelize {
      if (DataBase.connection)
        return DataBase.connection;
      return DataBase.connection = new Sequelize(name, user, password, 
      {
        host: host,
        dialect: dialect,
        port: port
      })
  }

  static async testConnection() : Promise<string> 
  {
    return await DataBase.connection.authenticate()
    .then(() => "database synchronously : )")
    .catch((error : Error) => "cannot stabilize connection,error");
  }

  static async build(force? : SyncOptions) : Promise<string> {
    return DataBase.connection.sync( force )
    .then(() => "database buillded : )")
    .catch((error : Error) => "error buillding database,error");
  }

  static databaseModel() : Sequelize {
    return DataBase.connection;
  }
  static getTables () : ModelCtor<Model<any, any>>[] {
    return DataBase.tables
  }

  static createTables (reference : Sequelize) : void {
   DataBase.tables.push(buildAdmin(reference)) 
   DataBase.tables.push(buildAdminLocation(reference)) 
   DataBase.tables.push(buildCart(reference)) 
   DataBase.tables.push(buildCategory(reference)) 
   DataBase.tables.push(buildClient(reference)) 
   DataBase.tables.push(buildDeliver(reference)) 
   DataBase.tables.push(buildDeliverLocation(reference)) 
   DataBase.tables.push(buildDeliverRate(reference)) 
   DataBase.tables.push(buildFavoriteDeliver(reference)) 
   DataBase.tables.push(buildItems(reference)) 
   DataBase.tables.push(buildOrder(reference)) 
   DataBase.tables.push(buildPizza(reference)) 
   DataBase.tables.push(buildLocalDelivery(reference)) 
   DataBase.tables.push(buildFavoritePizza(reference)) 
   DataBase.tables.push(buildPizzaRate(reference)) 
   DataBase.tables.push(buildPizzaIgredients(reference))
    
  }
  public static setRelationships() {
    relationships()
  }
}