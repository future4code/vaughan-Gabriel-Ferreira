import app from "./app";
import { createCompetition } from "./endpoints/createCompetition";
import { deleteCompetition } from "./endpoints/deleteCompetition";
import { getAllCompetitions } from "./endpoints/getAllCompetitions";
import { getDartRanking } from "./endpoints/getDartRanking";
import { getRunRanking } from "./endpoints/getRunRanking";

// RETORNA TODAS AS COMPETIÇÕES E RESULTADOS

app.get("/competitions", getAllCompetitions)

// CRIA COMPETIÇÃO E RESULTADO

app.post("/add-competitions", createCompetition)

// PEGA RANKING DO ARREMESSO DE DARDOS

app.get("/dart-ranking", getDartRanking)

// PEGA RANKING DOS 100M RASOS

app.get("/run-ranking", getRunRanking)

// ENCERRA/DELETA COMPETIÇÃO

app.delete("/delete", deleteCompetition)