create database lavie;
use lavie;

create table pacientes(
	id int not null auto_increment primary key unique,
    nome varchar(80) not null,
    email varchar(50) not null unique,
	idade date not null
);
create table psicologos(
	id int not null auto_increment primary key unique,
    nome varchar(80) not null,
    email varchar(50) not null unique,
    senha varchar(244) not null,
    apresentacao text not null
);
create table atendimentos(
	id int not null auto_increment primary key unique,
    data_atendimento date not null,
    observacao text,
    psicologos_id int not null,
    pacientes_id int not null,
    constraint psicologos_atendimentos foreign key (psicologos_id) references psicologos(id),
    constraint pacientes_atendimentos foreign key (pacientes_id) references pacientes(id)
);



insert into pacientes values
	(null, 'Eraldo', 'teste1@gmail.com', '2001-01-25'),
    (null, 'Leonardo', 'teste2@gmail.com', '2001-01-25'),
    (null, 'Eduardo', 'teste3@gmail.com', '2001-01-25'),
    (null, 'Junior', 'teste4@gmail.com', '2001-01-25');
    
    
insert into psicologos values

	(null, 'Lucas', 'psicologos1@gmail.com', '12@ms45', 'anos de experiências'),
    (null, 'Ana',  'psicologos2@gmail.com', '1@rf45', 'anos de experiências'),
    (null, 'Paula',  'psicologos3@gmail.com', '1fg345', 'anos de experiências'),
    (null, 'Maria', 'psicologos4@gmail.com', '1sj$45', 'anos de experiências');
    
    
insert into atendimentos values
	(null, '2022-11-25', 'chegue na hora', 2,1),
    (null, '2022-11-25', 'chegue na hora', 1,1);


