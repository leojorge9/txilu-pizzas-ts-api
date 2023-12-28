import { Request, Response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';

export function client_routes() {
    const client = new Client()
    Server.routes().post('/client/inserts/create-account', async(req : Request, res : Response ) => {
        const { firstname, lastname, email, phone, password } = req.body.data;
        const dbResponse = await client.insert.create_account(firstname, lastname, email, phone, password)
        res.json(dbResponse)
    } )

    Server.routes().get('/client/selects/get-pizzas', async(req : Request, res : Response ) => {
        const dbResponse = await client.selects.get_pizzas()
        res.json(dbResponse)
    } )

    Server.routes().get('/client/selects/get-pizza-cart/:id', async(req : Request, res : Response ) => {
        const { id } = req.params
        const dbResponse = await client.selects.get_pizza_cart(id)
        res.json(dbResponse)
    } )

    Server.routes().get('/client/selects/get-info-pizza/:id', async(req : Request, res : Response ) => {
        const { id } = req.params
        const dbResponse = await client.selects.get_info_pizza(id)
        res.json(dbResponse)
    } )

    Server.routes().post('/client/inserts/add-to-cart', async(req : Request, res : Response ) => {
        const { clientID, quant, status, pizzaID  } = req.body.data;
        const dbResponse = await client.insert.add_to_cart(clientID, quant, status, pizzaID)
        res.json(dbResponse)
    } )
}