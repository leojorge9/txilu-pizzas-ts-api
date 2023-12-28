import { Request, Response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';

export function admin_routes() {
  const admin = new Admin;
  Server.routes().post('/admin/inserts/create-account', async(req : Request, res : Response ) => {
    console.log(req.body)
    const { name, email, phone, password } = req.body.data;
    const dbResponse = await admin.inserts.create_account(name, email, phone, password);
    res.json({dbResponse : "response"})
  })

  Server.routes().post('/admin/inserts/set-location', async (req : Request, res : Response) => {
    const { lat, lon, adminID } = req.body.data;
    const dbResponse = await admin.inserts.set_admin_location(lat, lon, adminID);
    res.json(dbResponse)
  }) 

  Server.routes().post('/admin/inserts/create-deliver-account', async (req : Request, res : Response ) => {
    const { infoDeliver, infoCar } = req.body.data;
    const dbResponse = await admin.inserts.create_deliver_account(
      infoDeliver.id, infoDeliver.photo, infoDeliver.firstname, 
      infoDeliver.lastname, infoDeliver.email, infoDeliver.phone, 
       )
    res.json(dbResponse)
  })

  Server.routes().post('/admin/inserts/create-pizza-category',  async (req : Request, res : Response ) => {
    const { name } = req.body.data;
    const dbResponse = await admin.inserts.create_pizza_category(name);
    res.json(dbResponse);
  })

  Server.routes().post('/admin/inserts/create-pizza',  async (req : Request, res : Response ) => {
    const { name, photo, price, status, category, igredients } = req.body.data ;
    const dbResponse = await admin.inserts.create_pizza(name, photo ,price, status, category, igredients)
    res.json(dbResponse);


  })
  
}