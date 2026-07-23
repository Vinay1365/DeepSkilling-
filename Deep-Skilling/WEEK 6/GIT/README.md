# GIT Hands-On Exercises

## Exercise 1: Repository Setup and Basic Commands
```bash
git init my-project
cd my-project
echo "Hello World" > hello.txt
git add hello.txt
git commit -m "Initial commit"
git status
git log
```

## Exercise 2: Branching and Merging
```bash
git branch feature-login
git checkout feature-login
echo "Login feature" > login.txt
git add login.txt
git commit -m "Add login feature"
git checkout main
git merge feature-login
git log --oneline --graph
```

## Exercise 3: Remote Repository Operations
```bash
git remote add origin https://github.com/username/repo.git
git push -u origin main
git pull origin main
git clone https://github.com/username/repo.git
git fetch origin
```

## Exercise 4: Handling Merge Conflicts
```bash
git checkout -b feature-a
echo "Feature A changes" > shared.txt
git add shared.txt
git commit -m "Feature A"
git checkout main
echo "Main changes" > shared.txt
git add shared.txt
git commit -m "Main changes"
git merge feature-a
# Resolve conflict in shared.txt manually
git add shared.txt
git commit -m "Resolved merge conflict"
```

## Exercise 5: Forking and Pull Requests
```bash
# 1. Fork a repository on GitHub
# 2. Clone your fork
git clone https://github.com/your-username/forked-repo.git
cd forked-repo
# 3. Create a feature branch
git checkout -b my-feature
echo "New feature" > feature.txt
git add feature.txt
git commit -m "Add new feature"
git push origin my-feature
# 4. Create a Pull Request on GitHub from my-feature to main
# 5. Review and merge the Pull Request
```
