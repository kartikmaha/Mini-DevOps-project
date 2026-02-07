fetch("/info")
  .then(res => res.json())
  .then(data => {
    const banner = document.getElementById("env-banner");
    banner.innerText = `Environment: ${data.environment.toUpperCase()}`;
    banner.style.background =
      data.environment === "prod" ? "#7f1d1d" : "#065f46";

    const info = document.getElementById("info");
    Object.entries(data).forEach(([k, v]) => {
      const li = document.createElement("li");
      li.innerText = `${k}: ${v}`;
      info.appendChild(li);
    });
  })
  .catch(err => {
    document.getElementById("info").innerHTML = "Error loading data";
  });
