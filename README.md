# ExpressJS + JWT

Implementación de POC para aprender como implementar Express y JWT.

## Comenzando 🚀

Empieza por clonar este repositorio

### Pre-requisitos 📋

Es necesario tener instalado mongoDb, segun tu sistema operativo sigue las instrucciones: 

```
https://docs.mongodb.com/manual/installation/
```

### Instalación 🔧

Despues de clonar el repositorio 

```
git clone https://github.com/edcab/express-jwt.git
```
El resultado debe ser: (done)

```
remote: Enumerating objects: 7168, done.
remote: Counting objects: 100% (7168/7168), done.
remote: Compressing objects: 100% (5313/5313), done.
remote: Total 7168 (delta 1815), reused 6718 (delta 1368), pack-reused 0
Receiving objects: 100% (7168/7168), 5.79 MiB | 2.34 MiB/s, done.
Resolving deltas: 100% (1815/1815), done.

procede a ejecutar el proyecto, dedsde la raiz del proyecto digita por terminal: 
$ npm start
```

Hay que asegurarse que el servicio mongodb este ejecutandose.

## Ejecutando las pruebas ⚙️

Para realizar las pruebas tienen disponible un archivo postman en el proyecto con el cual encontraran request para la creación de usuarios, sign in, sign out y consulta.

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

### Pruebas ⌨️

SignIn
```
El resultado debe ser: 

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjA5ZDU1ZjQ2YTg5N2YwOTI2MjRiOTgiLCJpYXQiOjE1OTQ0ODY0NzN9.shR8zC-LMlRO3yzqZfm7NU76uE_1Y4csu35bMwMi66I",
    "user": {
        "_id": "5f09d55f46a897f092624b98",
        "email": "1@hotmail.com",
        "name": "MyName",
        "role": 0
    }
}

Como te puedes dar cuenta el token es generado correctamente, este token debe ser agregado en la cabecera para usar el endpoint http://localhost:8000/api/letmeshow/user
```

## Autor ✒️

* **Edwin Cabezas** - (https://github.com/edcab)

## Licencia 📄

Este proyecto está bajo la Licencia (MIT)

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* Apoyame en Medium



---
⌨️ con ❤️ por [Villanuevand](https://github.com/Villanuevand) 😊
