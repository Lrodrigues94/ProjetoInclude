CREATE DATABASE projeto_include;

USE projeto_include;

CREATE TABLE tb_tarefas (
	id INT PRIMARY KEY AUTO_INCREMENT,
	data DATE NOT NULL,
    descricao VARCHAR(300) NOT NULL,
    valor DOUBLE NOT NULL,
    tipo BOOLEAN NOT NULL
);

INSERT INTO tb_tarefas (dataDeCadastro, descricao , valor , tipo) VALUES ("2021-06-10", "viajar", 200, true);

DROP TABLE  tb_tarefas ;

DESCRIBE tb_tarefas;

SELECT * FROM tb_tarefas ;