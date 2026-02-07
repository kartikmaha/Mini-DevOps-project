function refreshInfo() {
    fetch("/api/info")
        .then(response => response.json())
        .then(data => {
            document.getElementById("build").innerText = data.build_number;
            document.getElementById("commit").innerText = data.git_commit;
        })
        .catch(err => console.error("Error fetching info:", err));
}
