console.log("Exercício 5:")

type ArrayPessoas = {
    name: string,
    email: string,
    role: string
}

let array: ArrayPessoas[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

const filtraAdmins = (array: ArrayPessoas[]) => {
    let arrayFiltrado = array.filter((item) => {
        return item.role === "admin"
    })

    return arrayFiltrado
}

console.log(filtraAdmins(array))