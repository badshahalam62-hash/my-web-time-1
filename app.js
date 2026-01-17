function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;

  if (u && p) {
    localStorage.setItem("user", u);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Enter details";
  }
}