const listaDeTarefas: string[] = ["Limpar a Casa", "Estudar"]

const novaTarefa = process.argv[2]
listaDeTarefas.push(novaTarefa)
console.table(listaDeTarefas)
