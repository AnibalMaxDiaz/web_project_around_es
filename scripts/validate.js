const inputSelector = ".popup__input";
const buttonSelector = ".popup__button";
const inputErrorClass = "popup__input_type_error";
const errorVisibleClass = "popup__error_visible";
const buttonDisabledClass = "popup__button_disabled";

// Muestra el mensaje nativo del navegador junto al campo inválido.
function toggleInputError(input) {
  const errorElement = document.getElementById(`${input.id}-error`);

  if (!input.validity.valid) {
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(errorVisibleClass);
    input.classList.add(inputErrorClass);
    input.setAttribute("aria-invalid", "true");
    return;
  }

  errorElement.textContent = "";
  errorElement.classList.remove(errorVisibleClass);
  input.classList.remove(inputErrorClass);
  input.setAttribute("aria-invalid", "false");
}

// Desactiva el envío cuando al menos un campo no es válido.
function toggleSubmitButton(form) {
  const inputs = Array.from(form.querySelectorAll(inputSelector));
  const button = form.querySelector(buttonSelector);
  const isFormValid = inputs.every((input) => input.validity.valid);

  button.disabled = !isFormValid;
  button.classList.toggle(buttonDisabledClass, !isFormValid);
}

// Conecta la validación de campos y el estado del botón de cada formulario.
export function setEventListeners(form) {
  form.addEventListener("input", (event) => {
    if (event.target.matches(inputSelector)) {
      toggleInputError(event.target);
      toggleSubmitButton(form);
    }
  });

  form.addEventListener("submit", (event) => {
    if (!form.checkValidity()) {
      event.preventDefault();
      form.querySelectorAll(inputSelector).forEach(toggleInputError);
      toggleSubmitButton(form);
    }
  });

  toggleSubmitButton(form);
}

// Limpia los mensajes al cerrar y conserva el estado correcto del botón.
export function resetValidation(form) {
  form.querySelectorAll(inputSelector).forEach((input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(errorVisibleClass);
    input.classList.remove(inputErrorClass);
    input.removeAttribute("aria-invalid");
  });

  toggleSubmitButton(form);
}
