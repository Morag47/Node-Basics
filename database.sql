create database nodejs;
use nodejs;

create table personajesArs
(
id int not null primary key auto_increment,
nombreCompleto varchar (100) not null,
edad int null,
altura int null, -- en cm
peso int null -- en kg
);
