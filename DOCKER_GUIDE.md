# Guía de Uso de Docker - Kody Store 🚀

Basado en el **Plan de Arquitectura y Desarrollo**, esta guía detalla los pasos para levantar el entorno completo (Backend, Frontend, Base de Datos y Redis) usando Docker.

## 1. Requisitos Previos

- **Docker Desktop** instalado y ejecutándose ([Descargar aquí](https://www.docker.com/products/docker-desktop/)).
- **Node.js** (opcional, para desarrollo local fuera de Docker).
- **pnpm** (opcional, para gestionar dependencias localmente).

## 2. Configuración Inicial

Copia el archivo de ejemplo de variables de entorno:

```bash
cp .env.example .env
```

Asegúrate de que las variables en `.env` coincidan con lo que deseas (por defecto están configuradas para funcionar con el `docker-compose.yml`).

## 3. Pasos para Iniciar el Proyecto

### A. Construir e Iniciar los Contenedores

Este comando descargará las imágenes necesarias, construirá el Backend/Frontend y levantará los servicios:

```bash
docker compose up --build
```

### B. Verificar que todo esté funcionando

Una vez que veas los logs listos, puedes acceder a:

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend (API):** [http://localhost:3001](http://localhost:3001)
- **Redis:** puerto `6379` (interno para BullMQ).
- **PostgreSQL:** puerto `5432`.

## 4. Comandos Útiles

| Acción                            | Comando                        |
| :-------------------------------- | :----------------------------- |
| **Iniciar en segundo plano**      | `docker compose up -d`         |
| **Detener contenedores**          | `docker compose stop`          |
| **Eliminar contenedores y redes** | `docker compose down`          |
| **Ver logs en tiempo real**       | `docker compose logs -f`       |
| **Reconstruir solo un servicio**  | `docker compose build backend` |

## 5. Integración con Prisma (Base de Datos)

El plan utiliza **Prisma ORM**. Para ejecutar las migraciones dentro del contenedor del backend:

```bash
docker compose exec backend npx prisma migrate dev
```

## 6. Resolución de Problemas (FAQ)

- **¿Errores de puerto ocupado?** Asegúrate de no tener otro PostgreSQL o servicio en los puertos 3000, 3001, 5432 o 6379.
- **¿Cambios en el código no se ven?** Como Docker está configurado para producción en los Dockerfiles actuales, debes reconstruir con `docker compose up --build` si haces cambios estructurales.

---

_Referencia: Plan de Arquitectura y Desarrollo (7 de enero de 2026)_
