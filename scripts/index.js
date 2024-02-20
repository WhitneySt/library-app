import { getDataForm } from "../modules/getDataFromForm.js";
import endpoints from "../services/data.js";
import { getUser } from "../services/userServices.js";

//-----Declaración de variables----

const form = document.getElementById("form");

//-----Declaración de funciones----
const login = async (userData) => {
  const url = endpoints.getAnUser(userData.email, userData.password);
  const userLogged = await getUser(url);
  if (userLogged) {
    alert(`Bienvenid@ ${userLogged.name}`);
    form.reset();
  } else {
    alert("Credenciales incorrectas");
  }
};
//------Ejecutar-----

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userData = getDataForm(form);
  login(userData);
});
