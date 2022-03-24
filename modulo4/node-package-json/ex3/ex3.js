const listaDeTarefas = ['Arrumar a cama', 'Lavar a louça', 'Limpar o quarto', 'Fazer tarefa da Labenu']
const novaTarefa = process.argv[2]

listaDeTarefas.push(novaTarefa)

console.table(listaDeTarefas)