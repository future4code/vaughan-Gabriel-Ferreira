
// ----------------------- HERANÇA ----------------------- 

// ---------------------------------- Exercício 1: 

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string { //(Exercício 4 e 5)
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

let usuario: User = new User("1", "email@gmail.com", "Um", "Mu")

// A) Não é possível imprimir apenas a senha. No entanto, é possível
// imprimir a senha caso se imprima a instância como um todo.

// B) A mensagem foi impressa no terminal uma vez.

// ---------------------------------- Exercício 2:

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

let cliente: Customer = new Customer("2", "email@gmail.com", "Dois", "Siod", "2222")

// A) A mensagem "Chamando o construtor da Classe Customer" foi impressa uma vez.
// Isso aconteceu, porque o construtor da classe customer foi chamado uma vez.

// B) A mensagem "Chamando o construtor da classe User" foi impressa no terminal duas vezes.
// Uma por conta do exercício anterior e outra porque o construtor da classe User foi chamado
// para que a classe customer fosse chamada, já que a classe Customer é filha de User.

// ---------------------------------- Exercício 3:
console.log("Exercício 3:")
console.log(cliente.getCreditCard())
console.log(cliente.getEmail())
console.log(cliente.getId())
console.log(cliente.getName())
console.log(cliente.purchaseTotal)

// A) Não é possível imprimir a senha atrelada a essa instância, pois
// ela está definida como private e não foi criado um méotodo para
// imprimi-la.

// ---------------------------------- Exercício 4 e 5:
console.log("Exercício 4 e 5:")
console.log(cliente.introduceYourself())

// ----------------------- POLIMORFISMO ----------------------- 

// ---------------------------------- Exercício 1: 

export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number;
    // Retorna o valor da conta em reais
}

const clientao: Client = {
    name: "Clientaço",
    registrationNumber: 3,
    consumedEnergy: 30000,

    calculateBill: () => {
        return 2
    }
}

console.log(clientao.name, clientao.registrationNumber, clientao.consumedEnergy, clientao.calculateBill())

// A) Foi possível imprimir tudo, porque nada consta como private.

// ---------------------------------- Exercício 2: 

export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// let andarai: Place = new Place("20541280")

// A) O erro que o Typescript gerou foi o seguinte: "Cannot create an instance of an abstract class."

// B) Para conseguir criar uma instância dessa classe seria necessário que ela deixasse
// de ser abstrata.

// ---------------------------------- Exercício 3: 

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

let residencia: Residence = new Residence(3, "CEP")
console.log("Residencia:", residencia, residencia.getResidentsQuantity())

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

let comercio: Commerce = new Commerce(8, "CEP12413413")
console.log(comercio.getCep())
console.log("Comércio:", comercio)

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}

let industria: Industry = new Industry(9, "CEP")
console.log("Indústria:", industria)

// ---------------------------------- Exercício 4:

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        cep: string,
        residentsQuantity: number
    ) {
        super(residentsQuantity, cep)
    }
    calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}

// A) A classe possui as propriedades: name, registrationNumber, consumedEnergy e calculateBill 
// por conta da classe Client. Possui cep e residentsQuantity por conta da classe Residence.
// E possui cpf como uma característica própria.

// ---------------------------------- Exercício 5:

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    getCnpj(): string {
        return this.cnpj
    }
}

// ---------------------------------- Exercício 5:

class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private irn: number,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }

    public getIrn(): number{
        return this.irn
    }
}