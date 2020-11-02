create database if not exists crud_php_ajx_db;

use crud_php_ajx_db;

create table if not exists stagiaire(
    id          int not null auto_increment,
    prenom      nvarchar(50)    not null ,
    email       nvarchar(50)    not null ,
    ville       nvarchar(50)    not null ,
    constraint pk_stagiaire     primary key (id)
);