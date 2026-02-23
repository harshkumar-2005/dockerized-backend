# 🐳 Dockerized Node.js Backend

A containerized Node.js + Express backend service — built, tagged, and published to Docker Hub. Demonstrates the full Docker workflow from writing a Dockerfile to running a portable container from a public registry.

> **Docker Hub:** [`kuhata/testrepo:latest`](https://hub.docker.com/r/kuhata/testrepo) &nbsp;·&nbsp; Image size: 55.9 MB &nbsp;·&nbsp; Port: 3000

---

## 🚀 Run It Instantly (No Clone Needed)

Pull and run the image directly from Docker Hub:

```bash
docker pull kuhata/testrepo:latest
docker run -p 3000:3000 kuhata/testrepo:latest
```

Then visit: `http://localhost:3000`

You'll get a JSON response confirming the service is running.

---

## 🏗️ How It Works

```
Dockerfile
    │
    ▼
docker build → Local Image
    │
    ▼
docker push → Docker Hub (kuhata/testrepo:latest)
    │
    ▼
docker pull + run → Container running on port 3000
```

The app is a lightweight Node.js + Express server. Docker packages it with all its dependencies into a portable image that runs identically on any machine — no "works on my machine" issues.

---

## 🛠️ Tech Stack

| Layer | Tool |
|---|---|
| Runtime | Node.js + Express |
| Containerization | Docker |
| Image Registry | Docker Hub |
| Port | 3000 |
| Image Size | 55.9 MB |

---

## 📁 Project Structure

```
dockerized-backend/
├── index.js          # Express server — main app entry point
├── dockerfile        # Docker build instructions
├── .dockerignore     # Excludes node_modules and other files from image
├── package.json      # Node.js dependencies
└── package-lock.json
```

---

## 🔍 Dockerfile Explained

```dockerfile
# Use official Node.js base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files first (layer caching optimization)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
```

**Why `alpine`?** The Alpine-based Node image is significantly smaller than the default, keeping the final image lean.

**Why copy `package.json` before source code?** Docker caches each layer — by copying dependencies first, `npm install` only re-runs when dependencies actually change, not on every code change. This speeds up builds.

---

## 🔑 Key Docker Concepts Demonstrated

**`.dockerignore`** — Prevents `node_modules/` from being copied into the image. The image installs its own clean dependencies via `npm install`, keeping the build reproducible and avoiding OS-incompatible binaries from the host machine.

**Port mapping (`-p 3000:3000`)** — Maps port 3000 on your local machine to port 3000 inside the container. Format is `host:container`.

**Image tagging** — The image is tagged as `kuhata/testrepo:latest`, following the Docker Hub naming convention of `username/repository:tag`.

**Public registry** — Published to Docker Hub so the image can be pulled and run by anyone on any machine without needing the source code.

---

## 📋 Full Command Reference

```bash
# Build the image locally
docker build -t kuhata/testrepo:latest .

# Run the container
docker run -p 3000:3000 kuhata/testrepo:latest

# Run in detached (background) mode
docker run -d -p 3000:3000 kuhata/testrepo:latest

# List running containers
docker ps

# Stop a running container
docker stop <container-id>

# Push to Docker Hub (requires docker login)
docker login
docker push kuhata/testrepo:latest

# Pull from Docker Hub
docker pull kuhata/testrepo:latest
```

---

## 🔜 What's Next

- [ ] Add a `docker-compose.yml` to orchestrate the app with a MongoDB container
- [ ] Set up GitHub Actions to auto-build and push the image on every commit (CI/CD)
- [ ] Deploy the container on AWS EC2 instead of a raw Node.js process
- [ ] Add multi-stage builds to further reduce image size

---

## 🔗 Related Projects

- [Node.js AWS EC2 Deployment](https://github.com/harshkumar-2005/node-nginx-aws-deployment) — Deployed Node.js on EC2 with Nginx + PM2
- [Weather App](https://github.com/harshkumar-2005/Weather-App) — Live frontend on Vercel

---

## 👤 Author

**Harsh Thakur**
[LinkedIn](https://linkedin.com/in/harshkumar-thakur) · [GitHub](https://github.com/harshkumar-2005) · [Docker Hub](https://hub.docker.com/u/kuhata)
