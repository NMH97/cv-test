document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = item.querySelector(".accordion-content");
    const isActive = item.classList.contains("active");

    document.querySelectorAll(".accordion-item").forEach(i => {
      i.classList.remove("active");
      i.querySelector(".accordion-content").style.maxHeight = "0";
      i.querySelector(".accordion-header span").textContent = "+";
    });

    if (!isActive) {
      item.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      header.querySelector("span").textContent = "-";
    }
  });
});