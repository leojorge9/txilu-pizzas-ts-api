import { dbResponse, res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
export class ClientInserts {
  private UUID = randomUUID;

  private getTable (name : string) : dbTable | undefined {
    console.log(Server.getDatabaseTables())
    const aux = Server.getDatabaseTables().find((model) => name == model.getTableName())
    return aux;
  }

  private response (status : boolean, message : string) : dbResponse | res {
    if(status)
    {
      return  {
        OK: status,
        message: message
      }
    }
    else {
      return  {
        OK: status,
        messageError: message
      }
    }
  }
  public create_account(
    firstname: string, lastname: string, 
    email: string, phone: number, password: string
     ) : dbResponse | res {
    const client = this.getTable("CLIENTs")
    if(typeof client != "undefined")
    {
      return client.create({
        ID: this.UUID(),
        FIRST_NAME: firstname,
        LAST_NAME: lastname,
        EMAIL: email, 
        PHONE_NUMBER: phone,
        PASS_WORD: password
      }).then(() => {
          return this.response(true, 'User created successfully : )')
      })
      .catch((error : Error) => {
          return this.response(false, 'Error: ' + error.message)
      })
    }
    else {
      return this.response(false, 'type of model is undefined')
    }
  }

  public add_to_cart(clientID : string, quant : number, status: boolean, pizzaID : string) : dbResponse | res {
    const cart = this.getTable('CARTs');
    if(typeof cart != 'undefined')
    {
      return cart.create({
        ID: this.UUID(),
        QUANT: quant,
        STATUS: status,
        CLIENTID : clientID,
        PIZZAID: pizzaID
      })
      .then(() => {
        return this.response(true, 'Pizza add to cart successfully : )')
      })
      .catch((error : Error) => {
          return this.response(false, 'Error: ' + error.name)
      })
    }
    return this.response(false, 'type of model is undefined')
  }
}