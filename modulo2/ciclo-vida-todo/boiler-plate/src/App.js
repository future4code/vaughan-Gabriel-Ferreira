import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(), // O Date.now() é usado para gerar um número único (id) para cada tarefa. Esse id deve ser usado para identificar qual tarefa foi clicada para marcar como completa.
          texto: 'Tirar o lixo',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Fazer exercício da tarde',
          completa: false
        }
      ],
      inputValue: '',
      filtro: 'pendentes'
    }

  componentDidUpdate() {
    const stringNovaTarefa = JSON.stringify(this.state.tarefas)
    // localStorage.setItem(stringNovaTarefa)
  };

  componentDidMount() {
    const newState = JSON.parse(localStorage.getItem(this.state.tarefas))
    this.setState({newState})
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const copiaDoEstado = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: copiaDoEstado})
    this.setState({inputValue: ""})
  }

  selectTarefa = (tarefaId) => {
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if(tarefaId === tarefa.id ) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({completa: !event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
