import app from "./app";
import { getAllCompetitions } from "./endpoints/getAllCompetitions";

// RETORNA TODAS AS COMPETIÇÕES E RESULTADOS

app.get("/competitions", getAllCompetitions)
