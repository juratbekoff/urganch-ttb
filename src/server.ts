import  express from "express";
import { engine } from "express-handlebars";
import cors from 'cors'
import path from "path";
import arizaRoutes from './routes/ariza.routes'
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, '../public')));

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use('/', arizaRoutes)

const port = process.env.PORT
app.listen(port || 8085, () => {
    console.log(`Server is running on ${port}`);
})  
