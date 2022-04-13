### Exercício 1:

### A)

Recebemos um objeto chamado RowDataPacket contendo as informações do return.

RowDataPacket {
  id: '001',
  name: 'Tony Ramos',
  salary: 400000,
  birth_date: 1948-08-25T03:00:00.000Z,
  gender: 'male'
}

### B)

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT * FROM Actor WHERE name = '${name}'
   `)

  return result[0][0]
}

app.get("/users/name", async (req: Request, res: Response) => {
  try {
    const name = req.body.name

    console.log(await getActorByName(name))

    res.send(await getActorByName(name))

  } catch (error) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

### C) 

const getCountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT COUNT(*) FROM Actor WHERE gender = '${gender}'
   `)

  return result[0][0]
}

app.get("/gender-count", async (req: Request, res: Response) => {
  try {
    const gender = req.body.gender

    console.log(await getCountByGender(gender))

    res.send(await getCountByGender(gender))

  } catch (error) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

### Exercício 2 
### A)

//FUNÇÃO PARA ATUALIZAR DO SALÁRIO DE ATOR ESPECÍFICO

const updateActorSalary = async (newSalary: number, id: string): Promise<any> => { 
    const result = await connection.raw(`
    UPDATE Actor
    SET salary = ${newSalary}
    WHERE id = ${id}`)

    return result[0][0]
}

app.put("/update/actor/:id", async (req: Request, res: Response): Promise<any> => {
    try {

      updateActorSalary(req.body.salary, req.params.id)

      res.send(`Ator(riz) de id ${req.body.id} atualizado(a) com sucesso`)
    } catch (error) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
    }
})

### B)

//FUNÇÃO PARA DELETAR UM ATOR DA TABELA

const deleteActor = async (id: string): Promise<any> => { 
  await connection.raw(`
  DELETE FROM Actor
  WHERE id = ${id}`)
}

app.delete("/delete/actor/:id", async (req: Request, res: Response): Promise<any> => {
  try {

    deleteActor(req.params.id)

    res.send(`Ator(riz) de id ${req.params.id} deletado(a) com sucesso`)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

### C)

//FUNÇÃO QUE DEVOLVE MÉDIA DE SALÁRIO DE DETERMINADO GENDER

const genderAverageSalary = async (gender: string): Promise<any> => {
const result = await connection.raw(`
SELECT AVG(salary) 
FROM Actor
WHERE gender = '${gender}'`)
const number = result[0][0]['AVG(salary)']
return number.toString()
}

app.get("/:gender/salary", async (req: Request, res: Response): Promise<any> => {
  try {
    const gender = req.params.gender
    console.log(await genderAverageSalary(gender)) 
    res.send(await genderAverageSalary(gender))
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

### Exercício 3:

A)

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT * FROM Actor WHERE id = '${id}'
   `)

  return result[0][0]
}

app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    console.log(await getActorById(id))

    res.status(200).send(await getActorById(id))

  } catch (error) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

B) 

// FUNÇÃO PARA PEGAR CONTAGEM DE ATORES/ATRIZES POR GÊNERO

const getCountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
     SELECT COUNT(*) FROM Actor 
     WHERE gender = '${gender}'
   `)
  return result[0][0]['COUNT(*)'].toString()
}

app.get("/actor", async (req: Request, res: Response) => {
  const gender = req.query.gender
  try {
    if(gender == "male"){
      console.log(await getCountByGender(gender))
      res.send(await getCountByGender(gender))
    } else {
      res.send(await getCountByGender('female'))
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})

### Exercício 4: 

A) 

//FUNÇÃO PARA ATUALIZAR DO SALÁRIO DE ATOR ESPECÍFICO

const updateActorSalary = async (newSalary: number, id: string): Promise<any> => { 
    const result = await connection.raw(`
    UPDATE Actor
    SET salary = ${newSalary}
    WHERE id = ${id}`)

    return result[0][0]
}

app.put("/update/actor/:id", async (req: Request, res: Response): Promise<any> => {
    try {

      updateActorSalary(req.body.salary, req.params.id)

      res.send(`Ator(riz) de id ${req.body.id} atualizado(a) com sucesso`)
    } catch (error) {
      console.log(error.message)
      res.status(500).send("Unexpected error")
    }
})

B)

//FUNÇÃO PARA DELETAR UM ATOR DA TABELA

const deleteActor = async (id: string): Promise<any> => { 
  await connection.raw(`
  DELETE FROM Actor
  WHERE id = ${id}`)
}

app.delete("/delete/actor/:id", async (req: Request, res: Response): Promise<any> => {
  try {

    deleteActor(req.params.id)

    res.send(`Ator(riz) de id ${req.params.id} deletado(a) com sucesso`)
  } catch (error) {
    console.log(error.message)
    res.status(500).send("Unexpected error")
  }
})





