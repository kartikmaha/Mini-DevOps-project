from flask import Flask, render_template, jsonify
import os
from datetime import datetime

app = Flask(__name__)

def deployment_metadata():
    return {
        "status": "UP",
        "environment": os.getenv("ENVIRONMENT", "dev"),
        "version": os.getenv("APP_VERSION", "1.0.0"),
        "build_number": os.getenv("BUILD_NUMBER", "local"),
        "git_commit": os.getenv("GIT_COMMIT", "unknown"),
        "deployed_at": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    }

def project_info():
    return {
        "project_name": "DevOps CI/CD Mini Project",
        "description": "End-to-end CI/CD pipeline to build, containerize, and deploy a Flask web application.",
        "tools": [
            "GitHub",
            "Jenkins",
            "Docker",
            "Docker Hub",
            "Ansible",
            "AWS EC2",
            "Linux"
        ],
        "pipeline_flow": [
            "Code pushed to GitHub",
            "Jenkins pipeline triggered",
            "Docker image built",
            "Image pushed to Docker Hub",
            "Ansible deploys container on EC2"
        ]
    }

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/deploy")
def deploy():
    return jsonify(deployment_metadata())

@app.route("/api/project")
def project():
    return jsonify(project_info())

@app.route("/health")
def health():
    return jsonify({"status": "UP"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
