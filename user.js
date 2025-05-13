let loggedInUser;
let message = document.querySelector(".message");
let company = document.querySelector("company");
let username = document.querySelector(".username");
let mail = document.querySelector(".mail");
let phone = document.querySelector(".phone");
let website = document.querySelector(".website");
let name = document.querySelector(".name");

let setloggedUserHeader = () => {
  loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    loggedUser.innerHTML = `User Logado: ${loggedInUser.name}`;
    setLogout();
  } else {
    loggedUser.innerHTML = `Não há user logado.`;

    setLogin();
  }
};
let setloggedUserPage = () => {
  loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser) {
    company.innerHTML = `Company: ${loggedInUser.company.name}`;
    username.innerHTML = `Username: ${loggedInUser.username}`;
    mail.innerHTML = `Mail: ${loggedInUser.email}`;
    phone.innerHTML = `Phone: ${loggedInUser.phone}`;
    website.innerHTML = `Website: ${loggedInUser.website}`;
    name.innerHTML = `name: ${loggedInUser.name}`;
  } else {
    message.innerHTML = `Não há user logado.`;
  }
};
