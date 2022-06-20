import express, {Express} from "express"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"

dotenv.config()

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(3003, () => {
    if(server) {
        const address = server.address() as AddressInfo
        console.log("Server running on port 3003")
    } else {
        console.log("Server is not avaiable")
    }
})

export default app