async function loadInfo() {
    const res = await fetch("/api/info");
    const data = await res.json();

    const container = document.getElementById("deployment-info");
    container.innerHTML = "";

    Object.entries(data).forEach(([key, value]) => {
        const box = document.createElement("div");
        box.className = "info-box";
        box.innerHTML = `<span>${key.replace("_", " ").toUpperCase()}</span><strong>${value}</strong>`;
        container.appendChild(box);
    });
}

async function loadTools() {
    const res = await fetch("/api/tools");
    const data = await res.json();

    const container = document.getElementById("tools");
    container.innerHTML = "";

    data.tools.forEach(tool => {
        const div = document.createElement("div");
        div.className = "tool";
        div.innerHTML = `<strong>${tool.name}</strong><p>${tool.purpose}</p>`;
        container.appendChild(div);
    });
}

loadInfo();
loadTools();
