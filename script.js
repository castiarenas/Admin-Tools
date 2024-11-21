// Filtrar archivos por categoría
document.getElementById("category-selector").addEventListener("change", function() {
    const selectedCategory = this.value;
    const files = document.querySelectorAll("#file-list li");
  
    files.forEach(file => {
      if (selectedCategory === "all" || file.dataset.category === selectedCategory) {
        file.style.display = "list-item";
      } else {
        file.style.display = "none";
      }
    });
  });
  
  // Filtrar archivos por búsqueda
  document.getElementById("search-bar").addEventListener("input", function() {
    const searchText = this.value.toLowerCase();
    const files = document.querySelectorAll("#file-list li");
  
    files.forEach(file => {
      const linkText = file.textContent.toLowerCase();
      if (linkText.includes(searchText)) {
        file.style.display = "list-item";
      } else {
        file.style.display = "none";
      }
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Recuperar el tema desde localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
    } else {
        body.classList.add("light-mode"); // Predeterminado
    }

    // Alternar tema al hacer clic
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("light-mode")) {
            body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  loader.style.display = "none";
});


