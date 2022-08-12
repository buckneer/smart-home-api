import routes from "./src/routes";

require('dotenv').config({path:'./config.env'});
import express, {Request, Response} from 'express';
import cors from 'cors';
import connectDB from './src/config/db';
import log from './src/utils'

const app = express();
const PORT  = process.env.PORT || 3000;
//

app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.listen(
    PORT,()=>{
        log.info(`Server running at http://localhost:${PORT}`)
        connectDB()
        routes(app)
    }
)




