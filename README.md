# 🎬 Cinerex Back

Backend oficial del sistema **Cinerex**, una plataforma integral para la gestión de funciones de cine, películas, clientes, empleados y ventas.

Desarrollado con **NestJS**, **PostgreSQL** y **Docker**, siguiendo arquitectura modular y buenas prácticas de desarrollo profesional.

---

## ⚙️ Tecnologías Utilizadas

- **[NestJS](https://nestjs.com/):** Framework para aplicaciones backend en Node.js.
- **[TypeORM](https://typeorm.io/):** ORM para comunicación con PostgreSQL.
- **[PostgreSQL](https://www.postgresql.org/):** Base de datos relacional.
- **[Docker](https://www.docker.com/):** Contenedores para entornos consistentes.
- **[Class-validator](https://github.com/typestack/class-validator):** Validación de DTOs.
- **[Swagger](https://swagger.io/):** Documentación automática de la API.

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
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos

- Node.js 20 o superior
- Docker & Docker Compose
- PostgreSQL (opcional si no usas Docker)

### Configuración de Variables de Entorno

Crea un archivo `.env` basado en `.env.example`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=cinerex
PORT=3000
JWT_SECRET=supersecretkey
```

### Ejecución con Docker

```bash
docker-compose up --build
```

Esto levantará tanto la base de datos PostgreSQL como el backend NestJS.

---

## 🧪 Scripts Útiles

```bash
npm run start         # Inicia el servidor
npm run start:dev     # Inicia con hot reload
npm run build         # Compila el proyecto
npm run test          # Ejecuta pruebas unitarias
```

---

## 📚 Documentación de la API

La API está documentada automáticamente con Swagger en:

```
http://localhost:3000/api
```

---

## 🧠 Módulos Disponibles

- **Auth:** Login (emite cookie para frontend), validación con JWT.
- **Users:** Registro, login y gestión de usuarios y roles.
- **Customers:** CRUD de clientes, validaciones por DTOs.
- **Movies:** CRUD de películas, protección de eliminación si existen horarios asociados.
- **Showtimes:** Crear y listar horarios para películas, relación con películas y salas.
- **Employees:** CRUD de empleados.

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

- Validación de inputs con `class-validator`.
- Middleware para autenticación basada en cookies.
- CORS habilitado para el frontend.

---

## 🧼 Consideraciones de Integridad

Las eliminaciones en cascada **no** están habilitadas por defecto. Por ejemplo:

```txt
ERROR: update or delete on table "movie" violates foreign key constraint on "showtime"
```

Debes eliminar primero los `showtime` asociados antes de borrar una película.

---

## 📦 Despliegue

Puedes desplegar este backend en:

- **Render**
- **Railway**
- **DigitalOcean**
- **Docker Compose** en VPS propio

Para producción, se recomienda:

- Configurar variables de entorno seguras.
- Usar HTTPS.
- Configurar backups automáticos de la base de datos.
- Limitar el acceso a puertos y exponer solo los necesarios.

---

## 📑 Ejemplos de Uso

### Crear un cliente (ejemplo con `curl`):

```bash
curl -X POST http://localhost:3000/customers \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan Pérez","email":"juan@email.com"}'
```

### Login de usuario (ejemplo con `fetch`):

```js
fetch('http://localhost:3000/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'admin@cinerex.com', password: 'tu_password' })
})
.then(res => res.json())
.then(data => console.log(data));
```

---

## ✍️ Autores

- [Alejandro Balderas](https://github.com/AlejandroBR10)
- [Alan Barrera](https://github.com/alanuwu)
- [Ian Buzzo](https://github.com/IanB28)

Equipo Cinerex

---

## 📜 Licencia

MIT License

---

¿Necesitas ejemplos más avanzados, integración continua o un `docker-compose.yml` optimizado para producción? ¡Solicítalo!
