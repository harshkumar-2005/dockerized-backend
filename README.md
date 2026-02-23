# Dockerized Backend Service

This project demonstrates containerization of a backend service using **Docker**, publishing the image to **Docker Hub**, and running it as a portable, environment-independent service.

The application exposes an HTTP endpoint on port **3000** and returns a JSON response to confirm successful execution.

---

## Tech Stack

- Docker
- Node.js (backend service)
- Docker Hub (image registry)

---

## Docker Image

- **Repository:** `kuhata/testrepo`
- **Tag:** `latest`
- **Exposed Port:** `3000`

---

## Pull Image from Docker Hub

You can pull the pre-built image directly without cloning the source code:

```bash
docker pull kuhata/testrepo:latest