from flask import Flask, render_template, jsonify
import os
from datetime import datetime

app = Flask(__name__)

def metadata():
    return {
        "service": "DevOps CI/CD Mini Project",
        "status": "UP",
        "environment": os.getenv("ENVIRONMENT", "dev"),
        "version": os.getenv("APP_VERSION", "1.0.0"),
        "build_number": os.getenv("BUILD_NUMBER", "local"),
        "git_commit": os.getenv("GIT_COMMIT", "unknown"),
        "deployed_at": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    }

@app.route("/")
def home():
    return render_template("index.html", data=metadata())

@app.route("/api/info")
def info():
    return jsonify(metadata())

@app.route("/health")
def health():
    return jsonify({"status": "UP"}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
