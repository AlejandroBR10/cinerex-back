
---

```markdown
# 🎬 Cinerex Back

Backend oficial del sistema Cinerex, una plataforma para la gestión de funciones de cine, películas, clientes, empleados y ventas.

Construido con **NestJS**, **PostgreSQL** y **Docker**, utilizando arquitectura modular y siguiendo buenas prácticas de diseño.

---

## ⚙️ Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) — Framework para aplicaciones backend en Node.js
- [TypeORM](https://typeorm.io/) — ORM para comunicación con PostgreSQL
- [PostgreSQL](https://www.postgresql.org/) — Base de datos relacional
- [Docker](https://www.docker.com/) — Contenedores para entorno consistente
- [Class-validator](https://github.com/typestack/class-validator) — Validación de DTOs
- [Swagger](https://swagger.io/) — Documentación de API automática

---

## 📁 Estructura del Proyecto

```

/src
/auth
/customers
/employees
/movies
/showtimes
/users
/common
main.ts
app.module.ts

````

---

## 🚀 Instalación y Ejecución

### ✅ Requisitos

- Node.js 20+
- Docker & Docker Compose
- PostgreSQL (opcional si no usas Docker DB)

### 🔧 Variables de entorno

Crea un archivo `.env` basado en `.env.example`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=cinerex
PORT=3000
JWT_SECRET=supersecretkey
````

### 🐳 Ejecutar con Docker

```bash
docker-compose up --build
```

> Esto levantará tanto la base de datos PostgreSQL como el backend NestJS.

---

## 🧪 Scripts útiles

```bash
npm run start         # Inicia el servidor
npm run start:dev     # Inicia con hot reload
npm run build         # Compila el proyecto
npm run test          # Ejecuta pruebas
```

---

## 📚 Endpoints disponibles

La API se documenta automáticamente en:

```
http://localhost:4000/api
```

Gracias a Swagger.

---

## 🧠 Módulos disponibles

### 🔐 Auth

* Login (emite cookie para frontend)
* Validación con JWT

### 👤 Users

* Registro y login
* Gestión básica de usuarios y roles

### 🎟️ Customers

* CRUD de clientes
* Validaciones por DTOs

### 🎬 Movies

* CRUD de películas
* Protección de eliminación si existen horarios (`FOREIGN KEY` a `showtimes`)

### 🕓 Showtimes

* Crear y listar horarios para películas
* Relación con películas y salas

### 👨‍💼 Employees

* CRUD de empleados

---

## ⚠️ Manejo de Errores

La API devuelve errores estructurados con mensajes útiles. Ejemplo:

```json
{
  "statusCode": 400,
  "message": [
    "customerEmail must be an email"
  ],
  "error": "Bad Request"
}
```

---

## 🔐 Seguridad

* Validación de inputs con `class-validator`
* Middleware para verificar autenticación por cookie
* CORS habilitado para el frontend

---

## 🧼 Consideraciones de Integridad

Eliminaciones en cascada no están habilitadas por defecto. Por ejemplo:

```txt
ERROR: update or delete on table "movie" violates foreign key constraint on "showtime"
```

Debes primero eliminar los `showtime` asociados antes de borrar una película.

---

## 📦 Despliegue

Puedes desplegarlo en:

* **Render**
* **Railway**
* **DigitalOcean**
* **Docker Compose** en VPS

---

## ✍️ Autores


* [Alejandro Balderas](https://github.com/AlejandroBR10)
* [Alan Barrera](https://github.com/alanuwu)
* [Ian Buzzo](https://github.com/IanB28)

 Equipo Cinerex
---

## 📜 Licencia

MIT License

```

---

¿Te gustaría que incluya ejemplos de peticiones con `curl` o `fetch`, o deseas que también genere un `docker-compose.yml` más detallado para producción? Puedo ayudarte a completarlo según lo que te falte.
```
