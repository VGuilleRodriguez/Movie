const enviar = document.getElementById("inicioSesion");

enviar.addEventListener("click", validar);

function validar(e) {
  e.preventDefault();

  const campoEmail = document.getElementById("email");
  const campoPassword = document.getElementById("password");
  let valido = true;

  if (!campoEmail.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    campoEmail.classList.add("invalido");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
  }

  if (!campoPassword.value || campoPassword < 4) {
    const passwordError = document.getElementById("passwordError");
    passwordError.classList.add("visible");
    campoPassword.classList.add("invalido");
    passwordError.setAttribute("aria-hidden", false);
    passwordError.setAttribute("aria-invalid", true);
  }

  return valido;
}