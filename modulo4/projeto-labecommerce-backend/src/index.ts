import app from "./app"
import { addProduct } from "./endpoints/addProduct"
import { addPurchase } from "./endpoints/addPurchase"
import { createUser } from "./endpoints/createUser"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllUsers } from "./endpoints/getAllUsers"
import { getUserPurchases } from "./endpoints/getUserPurchases"

// PEGAR TODOS OS USUÁRIOS E CRIAR USUÁRIO

app.get("/users", getAllUsers)
app.post("/users", createUser)

// PEGAR TODOS OS PRODUTOS E ADICIONAR PRODUTO

app.get("/products", getAllProducts)
app.post("/products", addProduct)

// ADICIONAR COMPRA

app.post("/purchases", addPurchase)

// PEGAR TODAS AS COMPRAS DE UM USUÁRIO

app.get("/users/:user_id/purchases", getUserPurchases)

