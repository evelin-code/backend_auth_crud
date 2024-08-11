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
    "token": "token",
    "rol_id": 1
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


### Iniciar sesión

**URL:** `/api/auth/signin`  
**Método HTTP:** `POST`  
**Descripción:** Inicia sesión en la aplicación.

**Body:**
- **Requerido**
  ```json
  {
    "email": "username01@username01.com",
    "password": "username01"
  }

**Respuestas:**

- **200 code http**
  ```json
  {
    "message": "Usuario autenticado exitosamente.",
    "token": "token",
    "user": {
      "id": 1,
      "username": "",
      "email": "",
      "password": "",
      "rol_id": 1,
      "role": {
        "id": 1,
        "name": "Empleado"
      }
    }
  }

- **400 code http**
  ```json
  {
    "message": "Usuario no encontrado."
  }

- **400 code http**
  ```json
  {
    "message": "El formato del correo electrónico no es válido."
  }

- **400 code http**
  ```json
  {
    "message": "La contraseña es requerida."
  }


### Obtener usuarios

**URL:** `/api/users`  
**Método HTTP:** `GET`  
**Authorization header:** `Bearer token`  
**Descripción:** obtiene todos los usuarios de la aplicación.

**Respuestas:**

- **200 code http**
  ```json
  {
    "message": "Usuarios recuperados exitosamente",
    "users": [
      {
        "id": 1,
        "username": "username01",
        "email": "username01@username01.com",
        "password": "username01",
        "rol_id": 2
      }
    ]
  }

- **401 code http**
  ```json
  {
    "message": "Token inválido o expirado"
  }

- **403 code http**
  ```json
  {
    "message": "No tienes permiso para acceder a este recurso"
  }

  
### Obtener empleados

**URL:** `/api/employees`  
**Método HTTP:** `GET`
**Authorization header:** `Bearer token`  
**Descripción:** obtiene todos los empleados de la aplicación.

**Respuestas:**

- **200 code http**
  ```json
  {
    "message": "Empleados recuperados exitosamente",
    "employees": [
      {
        "id": 1,
        "date_entry": "2024-08-05",
        "name": "Evelin Gongora",
        "salary": 4000000,
        "user_id": 1
      }
    ]
  }

- **401 code http**
  ```json
  {
    "message": "Token inválido o expirado"
  }

- **404 code http**
  ```json
  {
    "message": "No se encontraron empleados"
  }


### Crear un empleado

**URL:** `/api/employees`  
**Método HTTP:** `POST`
**Authorization header:** `Bearer token`  
**Descripción:** Crea un empleado en la aplicación.

**Body:**
- **Requerido**
  ```json
  {
    "date_entry": "2024-08-10", 
    "name": "Evelin",
    "salary": 4000000,
    "user_id": 2
  }

**Respuestas:**

- **201 code http**
  ```json
  {
    "message": "Empleado creado exitosamente",
    "employee": {
      "id": 2,
      "date_entry": "2024-08-10",
      "name": "Evelin 2",
      "salary": 4500000,
      "user_id": 1
    }
  }

- **404 code http**
  ```json
  {
    "message": "Token inválido o expirado"
  }

- **404 code http**
  ```json
  {
    "message": "Usuario no encontrado"
  }





    
### Obtener solicitudes

**URL:** `/api/request`  
**Método HTTP:** `GET`
**Authorization header:** `Bearer token`  
**Descripción:** obtiene todas las solicitudes de la aplicación.

**Respuestas:**

- **200 code http**
  ```json
  {
    "message": "Solicitudes encontradas exitosamente",
    "requests": [
      {
        "id": 1,
        "code": "EKC_0001",
        "description": "Desc",
        "summary": "Summary",
        "employee_id": 1,
        "employee": {
          "id": 1,
          "date_entry": "2024-08-05",
          "name": "Evelin Gongora",
          "salary": 4000000,
          "user_id": 1
        }
      }
    ]
  }

- **401 code http**
  ```json
  {
    "message": "Token inválido o expirado"
  }

- **404 code http**
  ```json
  {
    "message": "No se encontraron solicitudes"
  }


### Crear un empleado

**URL:** `/api/request`  
**Método HTTP:** `POST`
**Authorization header:** `Bearer token`  
**Descripción:** Crea una solicitud en la aplicación.

**Body:**
- **Requerido**
  ```json
  {
    "code": "CKE_03",
    "description": "Request description here",
    "summary": "Request summary here",
    "employee_id": 1
  }

**Respuestas:**

- **201 code http**
  ```json
  {
    "message": "Solicitud creada exitosamente",
    "request": {
      "id": 2,
      "code": "CKE_03",
      "description": "Request description here",
      "summary": "Request summary here",
      "employee_id": 1
    }
  }

- **404 code http**
  ```json
  {
    "message": "Token inválido o expirado"
  }

### Eliminar solicitudes

**URL:** `/api/request/{IdRequest}`  
**Método HTTP:** `DELETE`
**Authorization header:** `Bearer token`  
**Descripción:** elimina una solicitud de la aplicación.

**Respuestas:**

- **200 code http**
  ```json
  {
    "message": "Solicitud eliminada exitosamente"
  }

- **401 code http**
  ```json
  {
    "message": "Token inválido o expirado"
  }

- **404 code http**
  ```json
  {
    "message": "Solicitud no encontrada"
  }