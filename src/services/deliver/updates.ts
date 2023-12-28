import { dbResponse, res } from "../../assets/types/types"
import { Server } from '../../server/server';
const { randomUUID } = require("crypto");
import { dbTables, dbTable } from '../../assets/types/types'
export class DeliverUpdates {
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
  account(id: string, username: string, password: string) : dbResponse | res {
    const deliver = this.getTable('DELIVERs')
    if(typeof deliver != 'undefined') {

      return deliver.update({
        USERNAME: username,
        PASS_WORD: password
      },
      {
        where: {ID : id }
      })
      .then(() => {
        return this.response(true, 'Deliver account updated : )')
      })
      .catch((error : Error) => {
        return this.response(false, 'error updating delver account '+ error.message)
      })
    }
    else
    {
      return this.response(false, 'Type of model is undefined')
    }
  }

  public location(id: string, lat: number, lon: number) : dbResponse | res {
    const deliver_location = this.getTable('DELIVER_LOCATIONs')
    if(typeof deliver_location != 'undefined') {

      return deliver_location.update({
        ID: this.UUID(),
        LAT : lat,
        LON : lon
      },
      {
        where: {DELIVERID : id }
      })
      .then(() => {
        return this.response(true, 'Deliver location updated : )')
      })
      .catch((error : Error) => {
        return this.response(false, 'error updating deliver location '+ error.message)
      })
    }
    else
    {
      return this.response(false, 'Type of model is undefined')
    }
  
  }

}