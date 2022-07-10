import  express from "express";
import { engine } from "express-handlebars";
import cors from 'cors'
import path from "path";
import arizaRoutes from './routes/ariza.routes'

const app = express()

app.use(express.static(path.join(__dirname, '../public')));

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use('/', arizaRoutes)

app.listen(process.env.PORT || 9090, () => {
    console.log("Started on localhost:9090");
})  