import { Dialect, Model, ModelCtor, Sequelize, SyncOptions } from 'sequelize';
import { DataBase } from '../database/database';
import { Router } from 'express';
export type Force = {force: boolean} | null;
export type Protocol = 'localhost' | 'http' | 'https';
export class Server {
  private static express = require("express");
  private static starter: any ;
  private static port : number;
  private static protocol: Protocol;
  private static database : Sequelize | any

  // buillding properties  
  private constructor( port: number, protocol : Protocol ) {
    Server.port = port;
    Server.protocol = protocol;
  }

  // server methods
  static config() : void {
    console.log('\x1b[36m%s\x1b[0m',"[config] : setting server config...")
    try {
      Server.starter.use(Server.express.json());
      Server.starter.use(Server.express.urlencoded({extended: false}))
      console.log('\x1b[32m%s\x1b[0m',"[config] : server config loaded : )")
    } catch (error) {
      console.log('\x1b[31m%s\x1b[0m', '[error] : server config cannot be loaded : (')
    }
    
  }
  // start server
  static start(port : number, protocol: Protocol) : void {
    Server.port = port;
    Server.protocol = protocol;
    if (Server.starter)
        console.log('\x1b[33m%s\x1b[0m',"[server] : already started : |")
    else
    {
      try {
        console.log('\x1b[36m%s\x1b[0m',"[server] : Starting...")
        Server.starter = Server.express()
        Server.starter.listen(Server.port)
        console.log( '\x1b[32m%s\x1b[0m',`[server] : started : ) on http://${Server.protocol}:${Server.port}/`);
        
      } catch (error : any) {
        console.log('\x1b[31m%s\x1b[0m',"[error] : server cannot be started : (")
      }
    } 
  }

  public static routes () : any {
    return Server.starter
  } 

  static async use (origin : string, option : Router) : Promise<void> {
    Server.starter.use(origin, option);
  }
  static routers() : void { 
    try {
      console.log('\x1b[36m%s\x1b[0m',"[routes] : including server routes...")
      Server.starter.use('', Server);
      console.log('\x1b[32m%s\x1b[0m',"[routes] : server routes included : )")
    } catch (error) {
      console.log('\x1b[31m%s\x1b[0m',"[error] : cannot include server routes : ("+error)
    }
  } 
  
  // database methods
  static async connectDatabase(
    dbhost: string,
     dbuser: string, 
     dbpassword: string, 
     dbname: string, 
     dbdialect?: Dialect, 
     dbport? : number
     ) : Promise<void> {
      try {
        console.log('\x1b[36m%s\x1b[0m',"[server] : connecting...[database]")
        Server.database = DataBase.connect(dbhost, dbuser, dbpassword, dbname, dbdialect, dbport);
        console.log('\x1b[32m%s\x1b[', "[server] : connected... [database]")
      } catch (error : any) {
        console.log('\x1b[32m%s\x1b[', "[error] : cannot connect database")
      }
    
  }
  static async testDatabaseConnection() : Promise<void> 
  {
    console.log('\x1b[36m%s\x1b[0m',"[server] : testing connection...")
    const res = await DataBase.testConnection();
    if (res.split(',').at(1) == 'error')
      console.log('\x1b[31m%s\x1b[',"[database] : "+res.split(',').at(0))
    else 
      console.log('\x1b[32m%s\x1b[', "[database] : "+res)
  }
  
  static async buildDatabase(force? : SyncOptions) : Promise<void> {
    console.log('\x1b[36m%s\x1b[0m',"[server] : synchroning tables...")
    const res = await DataBase.build(force);
    if (res.split(',').at(1) == 'error')
      console.log('\x1b[31m%s\x1b[',"[database] : "+res.split(',').at(0))
    else 
      console.log('\x1b[32m%s\x1b[', "[database] : "+res)
  }

  static createDatabaseTables () : void {
    DataBase.createTables(DataBase.databaseModel())
  }

  public static databaseRelationShips() : void {
    DataBase.setRelationships();
  }
 
  static model () : Sequelize {
    return DataBase.databaseModel();
  }
  static getDatabaseTables() : ModelCtor<Model<any, any>>[] {
    return DataBase.getTables()
  }
  
}
