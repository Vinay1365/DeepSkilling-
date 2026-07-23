# CI/CD Hands-On Exercises

## Exercise 1: GitHub Actions Workflow
Create `.github/workflows/ci.yml`:
```yaml
name: CI Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:
          dotnet-version: '8.0.x'
      - name: Restore dependencies
        run: dotnet restore
      - name: Build
        run: dotnet build --no-restore
      - name: Test
        run: dotnet test --no-build --verbosity normal
```

## Exercise 2: CI/CD Pipeline Stages
A typical CI/CD pipeline includes:
1. **Source** - Code committed to repository triggers pipeline
2. **Build** - Compile the application
3. **Test** - Run unit tests and integration tests
4. **Deploy to Staging** - Deploy to staging environment
5. **Deploy to Production** - Deploy to production after approval

## Exercise 3: Docker-based CI/CD
```yaml
name: Docker CI/CD
on:
  push:
    branches: [main]
jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build Docker image
        run: docker build -t myapp:latest .
      - name: Run tests
        run: docker run myapp:latest dotnet test
      - name: Push to registry
        run: |
          docker tag myapp:latest myregistry/myapp:latest
          docker push myregistry/myapp:latest
```
