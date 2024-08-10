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











## Pruebas

Los resultados de las pruebas para el proyecto son los siguientes:

### Resultados de Pruebas por Archivo

- **src/order/test/order.service.spec.ts**: PASS (6.334 s)
- **src/product/test/product.service.spec.ts**: PASS (6.378 s)
- **src/user/test/user.service.spec.ts**: PASS (6.595 s)
- **src/order/test/order.controller.spec.ts**: PASS
- **src/user/test/user.controller.spec.ts**: PASS
- **src/pay/test/pay.service.spec.ts**: PASS (7.239 s)
- **src/pay/test/pay.controller.spec.ts**: PASS (7.229 s)
- **src/product/test/product.controller.spec.ts**: PASS

### Resumen de Pruebas

- **Test Suites:** 8 pasados, 8 totales
- **Tests:** 46 pasados, 46 totales
- **Snapshots:** 0 totales
- **Tiempo Total de Ejecución:** 7.714 s (estimado: 8 s)
- **Resultado:** Todas las pruebas se han ejecutado exitosamente y no se han encontrado errores.

## Despliegue

El proyecto ha sido desplegado utilizando [Railway](https://railway.app/).

### URL Pública

- **Backend:** [https://nombre-de-tu-backend.railway.app](https://nombre-de-tu-backend.railway.app)


## Recursos Adicionales

- **Colección Postman**: [Visitar](https://drive.google.com/file/d/1s9RGMTpb7_uLijmRVZsfocgkGjoxVOxO/view?usp=sharing)

- **Esquema de la base de datos**: [Visitar](https://drive.google.com/file/d/1nFAC-Cj6drLDHzSnZuGsTVeJNONqun0p/view?usp=sharing)
