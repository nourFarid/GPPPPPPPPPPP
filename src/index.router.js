const connectDB = require ('../DB/connection.js')
const authRouter = require('./modules/auth/auth.router.js')
const instructionsRouter =require ('./modules/instructions/instructions.router.js')
const userRouter = require ('./modules/user/user.router.js')
const errorHandling=require ('./utils/errorHandling.js')

const initApp = (app, express) => {
    //convert Buffer Data
    app.use(express.json({}))
    //Setup API Routing 
    app.use(`/auth`, authRouter)
    app.use(`/user`, userRouter)
    app.use(`/instructions`, instructionsRouter)
  

    app.all('*', (req, res, next) => {
        res.send("In-valid Routing Plz check url  or  method")
    })
    app.use(errorHandling.globalErrorHandling)

    connectDB()

}



module.exports = initApp