🚀 End-to-End DevOps CI/CD Project on AWS

🔧 Docker | Jenkins | Ansible | AWS EC2 | GitHub

📌 Project Overview

✨ This repository showcases a real-world DevOps CI/CD pipeline where application changes are automatically built, containerized, and deployed on AWS EC2.

🚫 No manual deployments
⚡ Fully automated pipeline
📦 Production-style workflow

🧰 Tools & Technologies Used

🔹 Git & GitHub – Source code version control
🔹 Jenkins – CI/CD pipeline automation
🔹 Docker – Containerization of the application
🔹 Nginx – Lightweight web server
🔹 Ansible – Automated, agentless deployment
🔹 AWS EC2 – Cloud infrastructure

🔄 CI/CD Pipeline Flow
👨‍💻 Code Push (GitHub)
        ↓
🔔 GitHub Webhook
        ↓
⚙️ Jenkins Pipeline
        ↓
🐳 Docker Build & Push
        ↓
📦 Docker Hub
        ↓
🤖 Ansible Deployment
        ↓
🌍 Live Website on AWS (Port 80)

🏗️ Architecture Overview
🖥️ Jenkins Server (EC2)

✔ Jenkins installed
✔ Docker installed
✔ Ansible installed
✔ Handles CI + CD orchestration

🌐 Application Server (EC2)

✔ Docker installed
✔ Runs containerized Nginx app
✔ Serves website on port 80

🔐 Deployment Model

🔸 Immutable Docker images
🔸 No manual SSH changes
🔸 Repeatable and consistent deployments

🌍 Live Application

🧾 The deployed application is a static website that explains this DevOps pipeline.

🔗 Access URL:

[http://100.27.205.108/]


📡 Running on Port 80
- app/
  - index.html – Recruiter-facing static website
  - Dockerfile – Nginx-based Docker image
- ansible/
  - inventory.ini – Target server inventory
  - deploy.yml – Deployment playbook
- Jenkinsfile – CI/CD pipeline definition
- README.md – Project documentation



✅ Key DevOps Concepts Demonstrated

✔ Continuous Integration & Continuous Deployment
✔ Docker image lifecycle management
✔ Infrastructure immutability
✔ Agentless deployment using Ansible
✔ Cloud-based deployment on AWS
✔ CI/CD pipeline best practices

🔮 Future Enhancements

🚀 Infrastructure provisioning using Terraform
☸️ Container orchestration with Kubernetes (EKS)
📊 Monitoring using Prometheus & Grafana
🔁 Rolling updates and rollback strategies

🎯 Why This Project Matters

💡 Demonstrates production-ready DevOps skills
💡 Mirrors real enterprise CI/CD workflows
💡 Designed to scale into Kubernetes & cloud-native setups
