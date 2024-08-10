# Proyecto de Autenticación y CRUD

Este proyecto es una aplicación de autenticación y CRUD (Crear, Leer, Actualizar, Eliminar) desarrollada con Node.js y Sequelize, utilizando PostgreSQL como sistema de gestión de bases de datos.


## Índice

1. [Herramientas Utilizadas](#Herramientas-Utilizadas)
2. [Uso de la API](#Uso-de-la-API)
3. [Pruebas](#Pruebas)
4. [Despliegue](#Despliegue)
5. [Recursos Adicionales](#Recursos-Adicionales)

## Herramientas Utilizadas

- **Node.js:** Entorno de ejecución para JavaScript en el servidor.
- **Sequelize:** ORM (Object-Relational Mapping) para simplificar las operaciones con la base de datos.
- **PostgreSQL:** Seleccionado por su robustez y flexibilidad como sistema de gestión de bases de datos relacional, ideal para proyectos que requieren alta disponibilidad y escalabilidad.
- **Supabase:** Utilizado como plataforma de backend para gestionar la base de datos PostgreSQL, proporcionando una interfaz moderna y fácil de usar para la administración de datos, autenticación y almacenamiento en tiempo real.

## Uso de la API

Este proyecto ofrece varios servicios RESTful para gestionar usuarios, empleados y solicitudes. A continuación, se detallan estos servicios, incluyendo sus URLs, métodos HTTP, descripciones y posibles respuestas.

### Registrarse

**URL:** `/api/auth/signup`  
**Método HTTP:** `POST`  
**Descripción:** Registra un nuevo usuario en la aplicación.

**Body:**
- **Requerido**
  ```json
  {
    "username": "username01",
    "email": "username01@username01.com",
    "password": "username01"
  }

**Respuestas:**

- **200 code http**
  ```json
  {
    "message": "Usuario creado exitosamente.",
    "token": "token"
  }

- **400 code http**
  ```json
  {
    "message": "El usuario ya existe."
  }

- **400 code http**
  ```json
  {
    "message": "La contraseña es requerida."
  }

- **400 code http**
  ```json
  {
    "message": "El formato del correo electrónico no es válido."
  }

- **400 code http**
  ```json
  {
    "message": "El nombre de usuario ya está en uso."
  }

