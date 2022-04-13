### Exercício 1:

A) A Chave estrangeira é um campo ou uma coleção de campos de uma tabela que se refere à chave primária de outra tabela.

B)

CREATE TABLE Rating (
id VARCHAR(255) PRIMARY KEY,
comment TEXT NOT NULL,
rate FLOAT NOT NULL,
movie_id VARCHAR(255),
FOREIGN KEY (movie_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"002",
"Brabo demais",
2,
"004");

C)

Deu o seguinte erro: 

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21712806-gabriel-ferreira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

D)

Deu o seguinte erro:

Error Code: 1091. Can't DROP 'Rating'; check that column/key exists

E)

Deu o seguinte erro: 

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712806-gabriel-ferreira`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

### Exercício 2:

A) A tabela MovieCast tem uma coluna movie_id que é uma string, uma coluna ator_id que é uma string e se relaciona com as tabelas Movie e Actor.

B)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("004", 
"001");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("004", 
"002");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("004", 
"003");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("004", 
"004");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("004", 
"005");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("004", 
"006");

C)

INSERT INTO MovieCast(movie_id, actor_id)
VALUES ("040", 
"006");

Ocorreu o seguinte erro:

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`vaughan-21712806-gabriel-ferreira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Filmes` (`id`))

D)

DELETE FROM Actor
WHERE id = "001";

Deu o seguinte erro:

Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`vaughan-21712806-gabriel-ferreira`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

### Exercício 3:

A)

A query 

SELECT * FROM Filmes
INNER JOIN Rating 
ON Filmes.id = Rating.movie_id;

Seleciona todos os filmes que possuem rating. O operador ON introduz o ponto de interseção das colunas que deve ser manipulado.

B)

SELECT m.id AS movie_id, r.rate AS rating FROM Filmes m
INNER JOIN Rating r ON m.id = r.movie_id;