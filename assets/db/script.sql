create database if not exists crud_php_ajax_db;

use crud_php_ajax_db;

create table if not exists stagiaires(
    id          int not null auto_increment,
    prenom      nvarchar(30) not null,
    email       nvarchar(50) not null ,
    ville       nvarchar(30),
    constraint pk_stagiaires primary key (id)
);