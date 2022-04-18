// EXERCÍCIO 1 -------------------------------------------------------------------------- //

// A) O método construtor é o método que constrói o objeto. Para chamar esse método, 
//    basta criar um objeto e usar a keyword new e os parênteses com os parâmetros.

// B) A mensagem foi impressa uma vez no terminal.

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf(){
        return this.cpf
    }

    getName(){
        return this.name
    }
    
    getAge(){
        return this.age
    }
    
    getBalance(){
        return this.balance        
    }
    
    getTransactions(){
        return this.transactions
    }  
  }

let usuario: UserAccount = new UserAccount("11111111", "alberto", 28)

// C) Variáveis privadas só podem ser acessadas de dentro da própria classe (usando a keyword this).

// EXERCÍCIO 2 -------------------------------------------------------------------------- //

// type Transaction = {
//   description: string,
//   value: number,
//   date: string
// }

class Transaction {
    private date: string
    private value: number
    private description: string

    constructor(date: string, value: number, description: string) {
        this.date = date
        this.value = value
        this.description = description
    }

    public getDate(){
        return this.date
    }

    public getValue(){
        return this.value
    }

    public getDescription(){
        return this.description
    }
}

let transacao: Transaction = new Transaction("18/04/2022", 90, "gasto")

// EXERCÍCIO 3 -------------------------------------------------------------------------- //

class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]){
        this.accounts = accounts
    }

    setAccount(account: UserAccount){
        this.accounts.push(account)
    }
}