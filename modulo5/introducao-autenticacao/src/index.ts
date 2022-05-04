import express from "express"
import {v4} from "uuid"
import { AddressInfo } from "net"
import { generateId } from "./services/generateId";
import { createUser } from "./services/createUser";
import { signUpUser } from "./endpoints/signUpUser";
import { loginWithUser } from "./endpoints/loginWithUser";
import { getUserProfile } from "./endpoints/getUserProfile";

const app = express();

app.use(express.json());

// Exercício 1:

// A) Concordo que as strings sejam melhores.

// B) ↓ e pasta services.

const id = v4()

console.log("Generated Id:", id)

// Exercício 2:

// A) O código em questão estabelece a conexão do vscode com
// o banco de dados por meio do knex e mostra uma função que 
// é responsável por inserir informações de id, email e senha 
// de novos usuários cadastrados na tabela.

// B) CREATE TABLE User (
//  	id VARCHAR(255) PRIMARY KEY,
//    email VARCHAR(255) UNIQUE NOT NULL,
//    password VARCHAR(255) NOT NULL
//    );

// C) services/createUser.ts

// Exercício 3:
// A) Converte em string o conteúdo de JWT_KEY.
// B) services/generateToken.ts

// Exercício 4:

app.post("/user/signup", signUpUser)

// Exercício 5:

// services/getUserByEmail.ts

// Exercício 6:

app.post("/user/login", loginWithUser)

// Exercício 7:

// A) Muda a tipificação do tsc de string para any. Precisamos usá-la
// para aceitar outros tipos de informação no payload.

// B) services/getData.ts

// Exercício 8: 

app.get("/user/profile", getUserProfile)





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;