create database gestao_curso;

use gestao_curso;

create table usuario (
	id_usuario integer not null auto_increment,
    nome varchar(50),
    sobrenome varchar(70),
    email varchar(70),
    cpf char (11),
    senha varchar(20),
    desc_usuario varchar(100),
    primary key(id_usuario)	
);

create table curso(
	id_curso integer not null auto_increment,
    nome_curso varchar(70),
    desc_curso varchar(500),
    postagem varchar(30),
    conteudo varchar(100),
    media_minutos integer,
    primary key(id_curso)
);

create table tutorial(
	id_tutorial integer not null auto_increment,
    nome_tutorial varchar(70),
    desc_tutorial text,
    quant_passos integer,
    primary key(id_tutorial)
);

create table aula (
	id_aula integer not null auto_increment,
    link_video text,
    numero_aula integer,
    desc_aula varchar(350),
    sub_titulo varchar (100),
    
    curso_aula integer,
    primary key(id_aula),
    foreign key(curso_aula) references curso(id_curso)
);

create table passo(
	id_passo integer not null auto_increment,
    link_imagem text,
    numero_passo integer,
    desc_passo varchar(500),
    
    tutorial_passo integer,
    primary key(id_passo),
    foreign key(tutorial_passo) references tutorial (id_tutorial)
);

create table inscricao_curso(
	id_inscricao_curso integer not null auto_increment,
    
    usuario_inscricao_curso integer,
    curso_inscricao integer,
    primary key (id_inscricao_curso),
    foreign key (usuario_inscricao_curso) references usuario (id_usuario),
    foreign key (curso_inscricao) references curso (id_curso)
);

create table inscricao_tutorial(
	id_inscricao_tutorial integer not null auto_increment,
    
    usuario_inscricao_tutorial integer,
    tutorial_inscricao integer,
    primary key (id_inscricao_tutorial),
    foreign key (usuario_inscricao_tutorial) references usuario (id_usuario),
    foreign key (tutorial_inscricao) references tutorial (id_tutorial)
);

insert into usuario (nome, sobrenome, email, cpf) values(
	"Afonso", "Barbosa de Souza", "afonso33barbosa@gmail.com", 06666174143
);

update usuario set senha = "15433213t" where id_usuario = 1;
update usuario set desc_usuario = "Professor do IFMS Campus Dourados, designer, desenvolvedor web e visionário." where id_usuario = 1;

insert into curso (nome_curso, desc_curso, postagem, conteudo, media_minutos) values(
	"Curso básico de HTML, CSS e Javascript", "Este curso tem por objetivo ensinar o básico das 
    linguagens de programação, sendo elas HTML (linguagem de marcação/estruturação de conteúdo), 
    CSS (linguagem de estilização) e Javascript (linguagem de programação interativa e dinâmica). 
    A proposta do curso é desenvolver uma aplicação com tais conhecimentos, implementando de forma 
    clara e objetiva os conceitos, tratando de problemas recorrentes de projetos mal-executados e 
    visando o aprendizado básico de qualidade.", "Plataforma de vídeos Youtube", "HTML, CSS e JavaScript", 6
);

insert into aula (link_video, numero_aula, desc_aula, sub_titulo, curso_aula) values(
	"https://youtu.be/gtE6F2rr9Ho", 0,
	"Neste vídeo, você encontrará motivação para aprender a programar, criar sites e 
	fazer disso sua profissão. Este é apenas um curso básico, não mostrando nem 50% do que
	se pode fazer com um conhecimento mais avançado sobre essas linguagens específicas. O 
	nome do ministrante é Evandro Souza Falleiros, professor do IFMS Dourados.", 
    "Apresentação do curso básico de HTML, CSS & JavaScript", 1
);

insert into inscricao_curso (usuario_inscricao_curso, curso_inscricao) values(1, 1);


select * from usuario;
select * from curso;
select * from tutorial;
select * from aula;inscricao_curso
select * from passo;
select * from inscricao_curso;
select * from inscricao_tutorial;
select * from aula where curso_aula = 1;
select * from curso where id_curso = 1;

select nome from usuario, inscricao_curso where id_usuario = 1;

select * from aula where numero_aula = 0;

select * from aula,curso,usuario,inscricao_curso  where aula.curso_aula = curso.id_curso and  inscricao_curso.usuario_inscricao_curso = usuario.id_usuario and inscricao_curso.curso_inscricao =  curso.id_curso