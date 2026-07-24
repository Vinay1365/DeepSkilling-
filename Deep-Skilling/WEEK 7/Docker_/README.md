# Docker Hands-On Exercises

## Exercise 1: Basic Docker Commands
```bash
docker pull mcr.microsoft.com/dotnet/sdk:8.0
docker images
docker run -it mcr.microsoft.com/dotnet/sdk:8.0 dotnet --version
docker ps
docker ps -a
docker stop <container_id>
docker rm <container_id>
docker rmi <image_id>
```

## Exercise 2: Dockerfile for .NET App
```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY *.csproj ./
RUN dotnet restore
COPY . .
RUN dotnet publish -c Release -o /app

FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .
EXPOSE 8080
ENTRYPOINT ["dotnet", "MyApp.dll"]
```

Build and run:
```bash
docker build -t myapp:latest .
docker run -d -p 8080:8080 --name myapp myapp:latest
docker logs myapp
```

## Exercise 3: Docker Compose
```yaml
version: '3.8'
services:
  api:
    build: ./api
    ports:
      - "5000:8080"
    depends_on:
      - db
    environment:
      - ConnectionStrings__Default=Server=db;Database=AppDB;User=sa;Password=Pass@123;
  db:
    image: mcr.microsoft.com/mssql/server:2022-latest
    environment:
      - ACCEPT_EULA=Y
      - SA_PASSWORD=Pass@123
    ports:
      - "1433:1433"
    volumes:
      - sqldata:/var/opt/mssql
volumes:
  sqldata:
```

```bash
docker-compose up -d
docker-compose ps
docker-compose logs
docker-compose down
```

## Exercise 4: Docker Networking
```bash
docker network create my-network
docker network ls
docker run -d --name app1 --network my-network nginx
docker run -d --name app2 --network my-network nginx
docker network inspect my-network
docker exec app1 ping app2
```

## Exercise 5: Docker Volumes
```bash
docker volume create mydata
docker volume ls
docker run -d -v mydata:/data --name container1 nginx
docker volume inspect mydata
```
