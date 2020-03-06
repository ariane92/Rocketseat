import  { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({teste: "Olá Ariane"})
})

export default  routes;