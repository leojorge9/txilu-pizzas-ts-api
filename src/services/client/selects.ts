import { dbResponse, res, dbDataResponse } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
import { Model } from 'sequelize';
export class ClientSelects {
  private UUID = randomUUID;

  private getTable (name : string) : dbTable | undefined {
    console.log(Server.getDatabaseTables())
    const aux = Server.getDatabaseTables().find((model) => name == model.getTableName())
    return aux;
  }

  private response (status : boolean, data : {data : any}) : dbDataResponse  {
    if(status)
    {
      return  {
        OK: status,
        data : data
      }
    }
    else {
      return  {
        OK: status,
        data : data
      }
    }
  }

  public get_pizzas() : Promise<string | Model<any, any>[]> | 'type of model is undefined' {
    const pizzas = this.getTable('PIZZAs')
    const category = this.getTable('CATEGORies')
    if (typeof pizzas != 'undefined' && typeof category != 'undefined')
    {
        return pizzas.findAll(
            {
                include : category, 
                
            })
        .then((data) => data)
        .catch((error : Error) => error.message)
    }
    else 
        return 'type of model is undefined'
  }

  public get_info_pizza(pizzaID : string ) {
    const pizzas = this.getTable('PIZZAs')
    const category = this.getTable('CATEGORies')
    const igredients = this.getTable('IGREDIENTs')
    if(typeof pizzas != 'undefined' && typeof category != 'undefined' && typeof igredients != 'undefined' )
    {
      return pizzas.findByPk(pizzaID, 
        {
          include : [category ,igredients]
        }).then((data) => data)
        .catch((error :Error) => error.message)
    }
    else 
      return 'type of model is undefined'
  }

  public get_pizza_cart(clientID : string) {
    const cart = this.getTable('CARTs')
    const pizzas = this.getTable('PIZZAs')

    if(typeof pizzas != 'undefined' && typeof cart != 'undefined' )
    {
      return cart.findAll( 
        {
          where : {CLIENTID : clientID},
          include : [pizzas]
        }).then((data) => data)
        .catch((error :Error) => error.message)
    }
    else 
      return 'type of model is undefined'
  }
}