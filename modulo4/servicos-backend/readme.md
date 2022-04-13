### Exercício 1:
const getCepInfo = async (cep: string): Promise<any> => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(response.data)
}

getCepInfo("20541280")

### Exercício 2:
Criei a tabela direto do workbench com o seguinte código:

CREATE TABLE Address (
	cep VARCHAR(225) PRIMARY KEY NOT NULL,
	logradouro VARCHAR (255) NOT NULL,
    numero VARCHAR(255) NOT NULL,
    complemento VARCHAR(255) DEFAULT NULL,
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL
);

### Exercício 3:
Testei dei um select all para testar a função no final e funcionou. 

const addAddress = async (cep: string): Promise<any> => {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
    const result = await connection.raw(`
    INSERT INTO Address (cep, logradouro, numero, complemento, bairro, cidade, estado)
    VALUES (
    "${response.data.cep}",
    "${response.data.logradouro}",
    "${response.data.complemento}",
    "${response.data.complemento}",
    "${response.data.bairro}",
    "${response.data.localidade}",
    "${response.data.uf}"
    );
    `)   
}

addAddress(insira seu cep)