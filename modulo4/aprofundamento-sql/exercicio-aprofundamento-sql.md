### Exercício 1:

A) Apaga a coluna de salário.

B) Troca o nome da coluna gender para sex, definindo o tipo como VARCHAR(6).

C) Muda a coluna gender para aceitar 255 caracteres, mantendo seu nome como gender.

D)

ALTER TABLE Actor 
CHANGE gender gender VARCHAR(100);

### Exercício 2:

A)

UPDATE Actor
SET name = "Jodecir", birth_date = "1991-01-01"
WHERE id = "003";

B)

UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

C) 

UPDATE Actor 
SET id = "005", name = "Moacyr Franco", salary = 300000, birth_date = "2000-12-20", gender = "male"
WHERE id = "005";

D)

É mostrada uma mensagem que diz que o update foi realizado com sucesso, mas nenhuma linha foi afetada. Não entendi por que não apareceu nenhuma mensagem de erro.

### Exercício 3:

A)

DELETE FROM Actor
WHERE id = "003";

B)

DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;

### Exercício 4:

A) 

SELECT MAX(salary) FROM Actor;

B) 

SELECT MIN(salary) FROM Actor;

C)

SELECT COUNT(*) FROM Actor
WHERE gender = "female";

D)

SELECT SUM(salary) FROM Actor;

### Exercício 5:

A)

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

A query retornou o número de aparições dos gêneros em seus respectivos grupos.

B)

SELECT id, name FROM Actor
ORDER BY name DESC;

C)

SELECT * FROM Actor
ORDER BY salary ASC;

D)

SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

E) 

SELECT AVG(salary), gender 
FROM Actor
GROUP BY gender;

### Exercício 6:

A) 

ALTER TABLE Filmes
ADD COLUMN playing_limit_date DATE;

B)

ALTER TABLE Filmes
CHANGE avaliacao avaliacao FLOAT NOT NULL;

C)

UPDATE Filmes
SET data_de_lancamento = "2001-01-01"
WHERE id = "001";

UPDATE Filmes
SET data_de_lancamento = "2022-04-05"
WHERE id = "002";

D)

Aparece o sinal verde indicando que o filme foi atualizado com sucesso, mas nada muda. Não sei porque isso acontece. Acho que deveria aparecer um erro.