/* create table users(
    id int unsigned auto_increment primary key,
    usuario varchar(20) not null,
    rol enum('Admin','User') default 'User'
) */

insert into users(usuario, rol) values('Hola20',2);
select*from users;