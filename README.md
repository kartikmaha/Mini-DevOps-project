🚀 End-to-End DevOps CI/CD Project (AWS)
📌 Project Summary

This project demonstrates a real-world DevOps CI/CD pipeline where code changes are automatically built, containerized, and deployed on AWS EC2 using industry-standard DevOps tools.

A developer only needs to push code to GitHub — the rest of the process is fully automated.

🧰 Tools & Technologies Used
Tool	Purpose
Git & GitHub	Source code management
Jenkins	CI/CD automation
Docker	Containerization
Nginx	Web server for static website
Ansible	Automated deployment
AWS EC2	Cloud infrastructure
⚙️ How the Pipeline Works (Simple Flow)
Code Push → Jenkins → Docker Build → Docker Hub → Ansible → Live Website

Step-by-step:

Developer pushes code to GitHub

GitHub webhook triggers Jenkins automatically

Jenkins builds a Docker image using Nginx

Image is pushed to Docker Hub

Jenkins runs Ansible playbook

Ansible deploys the updated container on EC2

Website updates automatically on port 80

🏗️ Architecture Overview

Jenkins Server (EC2)

Runs Jenkins

Builds Docker images

Triggers Ansible

Application Server (EC2)

Runs Docker containers

Hosts the live website

Deployment Type

Container-based

Immutable deployments

No manual server changes

🌐 Live Application

The application is a static website explaining the DevOps pipeline itself.

📍 Accessible via:

http://<application-server-public-ip>

📂 Repository Structure
.
├── app/
│   ├── index.html        # Static website
│   └── Dockerfile        # Nginx-based Docker image
├── ansible/
│   ├── inventory.ini    # Target servers
│   └── deploy.yml       # Deployment playbook
├── Jenkinsfile          # CI/CD pipeline definition
└── README.md

✅ Key DevOps Concepts Demonstrated

CI/CD automation

Docker image lifecycle

Infrastructure immutability

Agentless deployments using Ansible

Cloud-based deployment on AWS

Production-style pipeline design

🔮 Future Enhancements (Planned)

Infrastructure provisioning using Terraform

Container orchestration with Kubernetes (EKS)

Monitoring with Prometheus & Grafana

Rolling updates and rollback strategy

🎯 Why This Project Matters

This project reflects how modern DevOps teams:

Automate deployments

Eliminate manual errors

Build scalable, repeatable pipelines

Prepare applications for Kubernetes & cloud-native environments
