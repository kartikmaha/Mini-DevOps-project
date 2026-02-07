function loadDeployInfo() {
    fetch("/api/deploy")
        .then(res => res.json())
        .then(data => {
            document.getElementById("content").innerHTML = `
                <h3>Deployment Information</h3>
                <p><b>Status:</b> ${data.status}</p>
                <p><b>Environment:</b> ${data.environment}</p>
                <p><b>Version:</b> ${data.version}</p>
                <p><b>Build Number:</b> ${data.build_number}</p>
                <p><b>Git Commit:</b> ${data.git_commit}</p>
                <p><b>Deployed At:</b> ${data.deployed_at}</p>
            `;
        });
}

function loadProjectInfo() {
    fetch("/api/project")
        .then(res => res.json())
        .then(data => {
            let tools = data.tools.map(t => `<li>${t}</li>`).join("");
            let flow = data.pipeline_flow.map(s => `<li>${s}</li>`).join("");

            document.getElementById("content").innerHTML = `
                <h3>${data.project_name}</h3>
                <p>${data.description}</p>

                <h4>Tools Used</h4>
                <ul>${tools}</ul>

                <h4>Pipeline Flow</h4>
                <ul>${flow}</ul>
            `;
        });
}
