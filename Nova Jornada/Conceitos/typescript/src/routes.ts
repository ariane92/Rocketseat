import { Request, Response } from 'express';
import createUser from '../services/CreateUser';


export function helloWorld(request: Request, response: Response) {
    const user = createUser('Ariane', 'ariane@algo', '123456');

    return response.json({message: "Olá"})
}
