const btn_signout = document.querySelector("#btn-signout")

let signin_state = localStorage.getItem("state")
if (signin_state != "admin-signed-in") btn_signout.style.display = "none"
else btn_signout.style.display = "block"

btn_signout.addEventListener("click", () => {
  localStorage.setItem("admin","")
  localStorage.setItem("password","")
  localStorage.setItem("state","")
  location.reload()
})


