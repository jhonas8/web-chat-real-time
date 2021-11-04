import express from 'express'

class Router {
    readonly router: express.Router

    constructor(){
        this.router = express.Router()

        this.router.get('/', (req, res)=>{
            res.send('Server is now running')
        })
    }
}

export default new Router().router

//The code is only structured like this in order of the readability!