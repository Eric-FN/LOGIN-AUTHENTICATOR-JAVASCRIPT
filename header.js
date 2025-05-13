/* console.log(localStorage.getItem("diogo"));
 */

let loggedUser = document.querySelector(".logged-user");
let loginButton = document.querySelector(".login-button");
let logoutButton = document.querySelector(".logout-button");

let setLogin = () => {
  loginButton.style.display = "initial";
  logoutButton.style.display = "none";
};
let setLogout = () => {
  loginButton.style.display = "none";
  logoutButton.style.display = "initial";
};

window.onload = () => {
  setloggedUserHeader();
};

loginButton.onclick = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let loggedInUser = await res.json();

    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
    setloggedUserHeader();
    setLogout();
    console.log("Login com sucesso.");
    window.location.reload(); //faz reload quando o usuario é logado
  } catch (e) {
    console.log("Erro->" + e);
  }
};

logoutButton.onclick = () => {
  try {
    localStorage.removeItem("loggedInUser");
    setloggedUserHeader();
    setLogin();
    console.log("Logout com sucesso.");
    window.location.reload();
  } catch (e) {
    console.log("Erro->" + e);
  }
};
