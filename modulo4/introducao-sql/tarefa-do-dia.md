### Exercício 1:
A) VARCHAR é utilizado para declarar que o valor estará em formato de string, PRIMARY KEY é utilizado como um id, DATE é utilizado para indicar o formato de data e NOT NULL é utilizado para demonstrar que aquele campo específico não pode deixar de ser preenchido.

B) O retorno de 'SHOW DATABASES' foi o username que eu recebi do AstroBot, que é o que eu coloquei no workbench. O retorno de 'SHOW TABLES' foi a tabela que acabou de ser criada: Actor.

C) O comando 'DESCRIBE Actor' mostra a tabela e os tipos de valores que precisam preencher cada campo.

### Exercício 2:
A)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
	"002",
    "Glória Pires",
    1200000,
    '1963-08-23',
    "female"
);

B) B) Código de erro: 1062. Entrada duplicada '002' pra chave 'primária'. O erro ocorreu porque a chave utilizada
foi repetida.

C) Código de erro: 1136. Contagem de coluna não corresponde ao valor na linha 1. Para solucionar, adicionei birth_date e gender nos parênteses.

D) Código de erro: 1364. O campo 'name' não possui um valor padrão. Para solucionar, adicionei um nome qualquer.

E) Código de erro: 1292. Valor de data incorreto. '1950' para coluna 'birth_date' na linha 1. Para solucionar, bastou adicionar aspas simples na data.

### Exercício 3:

A) SELECT * FROM Actor WHERE gender = "female";

B) SELECT salary FROM Actor WHERE name = "Tony Ramos";

C) Apareceu tudo NULL. Isso porque não existe nenhum item com o gênero 'invalid'.

D) SELECT id, name, salary FROM Actor WHERE salary <= 500000;

E) Código de erro: 1054. Nome de coluna 'nome' é desconhecido na lista de campos. O erro é solucionávle ao mudar 'nome' para 'name'.

F)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "José Aldo",
  719333.33,
  '1979-03-26', 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Juliana Garcia",
  0,
  '1979-03-26', 
  "female"
);

### Exercício 4:

A) Estão sendo selecionadas todas as informações de atores de Actor cujos nomes começam com "A" ou "J" e que, ao mesmo tempo, possuem salário maior que 300000.

B) 

SELECT * FROM Actor 
WHERE name NOT LIKE "A%" AND salary > 350000;

C) 

SELECT * FROM Actor
WHERE name LIKE "G%" OR name LIKE "%G" OR name LIKE "%G%" OR name LIKE "g%" OR name LIKE "%g" OR name LIKE "%g%";

D)

SELECT * FROM Actor
WHERE (name LIKE "G%" OR name LIKE "%G" OR name LIKE "%G%" OR name LIKE "g%" OR name LIKE "%g" OR name LIKE "%g%" OR name LIKE "A%" OR name LIKE "%A" OR name LIKE "%A%" OR name LIKE "a%" OR name LIKE "%a" OR name LIKE "%a%") AND salary < 900000 AND salary > 350000;

### Exercício 5: 

A)

CREATE TABLE Filmes (
	id VARCHAR(225) PRIMARY KEY NOT NULL,
    titulo VARCHAR(225) NOT NULL, 
    sinopse TINYTEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL 
);

B) 

INSERT INTO Filmes (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);

C), D) e E)

INSERT INTO Filmes (id, titulo, sinopse, data_de_lancamento, avaliacao)
VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
       ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
       ("004", "Cidade de Deus", "No filme, companhamos a narrativa de variados personagens cujas tramas se desenvolvem em meio a violência e pobreza numa das favelas mais violentas do Rio de Janeiro. O protagonista, Buscapé, foge do crime e sonha em ser fotógrafo.", "2002-08-30", 1000);

### Exercício 6:

A) 

SELECT id, titulo, sinopse FROM Filmes
WHERE id = 004;

B) 

SELECT * FROM Filmes 
WHERE titulo = "Cidade de Deus";

C)

SELECT id, titulo, sinopse FROM Filmes
WHERE avaliacao >= 7;

### Exercício 7: 

A)

SELECT * FROM Filmes
WHERE titulo LIKE "%vida%";

B) 

SELECT * FROM Filmes
WHERE titulo OR sinopse LIKE "%vida%";

C) 

SELECT * FROM Filmes;

D) 

SELECT * FROM Filmes
WHERE titulo OR sinopse LIKE "%vida%" AND avaliacao > 7;