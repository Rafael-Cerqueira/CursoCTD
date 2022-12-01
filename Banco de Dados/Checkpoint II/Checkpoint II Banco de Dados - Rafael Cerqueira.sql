CREATE DATABASE sis_reconhecimentos;
USE sis_reconhecimentos;

CREATE TABLE projetos(
idProjeto INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
descricao TEXT);
CREATE TABLE areas(
idArea INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nomeArea VARCHAR(100));
CREATE TABLE categorias(
idCategoria INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nomeCategoria VARCHAR(100));
CREATE TABLE funcionarios(
RE INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nomeFuncionario VARCHAR(50),
sobrenomeFuncionario VARCHAR(100),
emailCorporativo VARCHAR(100));
CREATE TABLE cargos(
idCargo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nomeCargo VARCHAR(50));
CREATE TABLE reconhecimentos(
idReconhecimento INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
quantidade INT);

ALTER TABLE projetos ADD FK_idArea INT;
ALTER TABLE projetos ADD FK_idCategoria INT;
ALTER TABLE projetos ADD FK_RE INT;

ALTER TABLE funcionarios ADD FK_idReconhecimento INT;
ALTER TABLE funcionarios ADD FK_idCargo INT;

ALTER TABLE projetos ADD FOREIGN KEY (FK_idArea) REFERENCES areas(idArea);
ALTER TABLE projetos ADD FOREIGN KEY (FK_idCategoria) REFERENCES categorias(idCategoria);
ALTER TABLE projetos ADD FOREIGN KEY (FK_RE) REFERENCES funcionarios(RE);

ALTER TABLE funcionarios ADD FOREIGN KEY (FK_idReconhecimento) REFERENCES reconhecimentos(idReconhecimento);
ALTER TABLE funcionarios ADD FOREIGN KEY (FK_idCargo) REFERENCES cargos(idCargo);

INSERT INTO areas(nomeArea) VALUE ("Tecnologia");
INSERT INTO areas(nomeArea) VALUE ("Engenharia");
INSERT INTO areas(nomeArea) VALUE ("B2B");
INSERT INTO areas(nomeArea) VALUE ("B2C");

INSERT INTO cargos(nomeCargo) VALUES ("Estagiario"), ("Analista"), ("Consultor"), ("Gerente");

INSERT INTO categorias(nomeCategoria) VALUES ("Best Tech"), ("Best Inovation"), ("Best Eco");

SELECT * FROM areas;
SELECT * FROM cargos;
SELECT * FROM categorias;

INSERT INTO funcionarios(nomeFuncionario, sobrenomeFuncionario, emailCorporativo, FK_idCargo)
VALUES ("Jane", "Doe", "janedoe@corp.com", 2);

INSERT INTO funcionarios(nomeFuncionario, sobrenomeFuncionario, emailCorporativo, FK_idCargo)
VALUES ("Junior", "Uhla", "juniorlula@corp.com", 1);

INSERT INTO funcionarios(nomeFuncionario, sobrenomeFuncionario, emailCorporativo, FK_idCargo)
VALUES ("Amanda", "Notes", "amandanotes@corp.com", 4);

INSERT INTO reconhecimentos(quantidade) VALUES (1), (2), (3), (4), (5);

SELECT * FROM reconhecimentos;

INSERT INTO projetos(descricao, FK_idArea, FK_idCategoria, FK_RE) 
VALUES ("Automação para projetos do time de Tecnologia", 1, 1, 2); 

INSERT INTO projetos(descricao, FK_idArea, FK_idCategoria, FK_RE) 
VALUES ("Projeto de aproveitar materiais decartados e transformar em uma EcoBag", 2, 3, 2); 

UPDATE funcionarios SET FK_idReconhecimento = 3 WHERE RE = 2;
UPDATE funcionarios SET FK_idReconhecimento = 5 WHERE RE = 1;

SELECT * FROM projetos;

UPDATE projetos SET FK_RE = 1 WHERE idProjeto = 2;

SELECT nomeFuncionario AS Nome , sobrenomeFuncionario AS Sobrenome, descricao, FK_idReconhecimento AS Qtd_Reconhecimento
FROM funcionarios 
INNER JOIN projetos ON projetos.idProjeto = funcionarios.RE;

DELETE FROM funcionarios
WHERE RE = 3;

SELECT * FROM funcionarios;