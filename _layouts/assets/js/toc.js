document.addEventListener("DOMContentLoaded", function () {
  const toc = document.getElementById("toc");
  const headers = document.querySelectorAll("h2, h3");

  headers.forEach(header => {
    const id = header.textContent
      .toLowerCase()
      .replace(/\s+/g, "-");

    header.id = id;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = "#" + id;
    a.textContent = header.textContent;

    if (header.tagName === "H3") {
      a.style.marginLeft = "15px";
    }

    li.appendChild(a);
    toc.appendChild(li);
  });
});
