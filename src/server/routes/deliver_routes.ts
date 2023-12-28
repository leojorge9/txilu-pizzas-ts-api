import { Request, Response } from 'express'
import { Deliver } from '../../services/class/deliver';
import { Client } from '../../services/class/client';
import { Admin } from '../../services/class/admin';
import { Server } from '../server';

export function deliver_routes() {
    const deliver = new Deliver()
    Server.routes().put('/deliver/update-account', async(req : Request, res : Response ) => {
        const { id, username, password } = req.body.data
        const dbResponse = await deliver.update.account(id, username, password)
        res.json(dbResponse)
    } )

    Server.routes().put('/deliver/update-location', async(req : Request, res : Response ) => {
        const { id, lat, lon } = req.body.data
        const dbResponse = await deliver.update.location(id, lat, lon);
        res.json(dbResponse)
    } )
}