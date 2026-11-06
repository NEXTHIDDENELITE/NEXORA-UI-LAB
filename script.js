const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("nexora-theme");
if (savedTheme === "light") document.body.classList.add("light");
themeToggle?.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem("nexora-theme", document.body.classList.contains("light") ? "light" : "dark");
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();