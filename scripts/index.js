import { resetValidation, setEventListeners } from "./validate.js";

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// Selectors para edición del perfil.
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector("#edit-popup");
const editProfileForm = document.querySelector("#edit-profile-form");

const profileNameInput = document.querySelector(".popup__input_type_name");
const profileDescriptionInput = document.querySelector(
  ".popup__input_type_description",
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardContainer = document.querySelector(".cards__list");
const cardTemplate = document
  .querySelector("#card__template")
  .content.querySelector(".card");

// Selectores para crear tarjetas.
const addCardButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector("#new-card-popup");
const closeAddCardButton = addCardPopup.querySelector(".popup__close");
const addCardForm = addCardPopup.querySelector("#new-card-form");
const cardNameInput = addCardForm.querySelector(".popup__input_type_card-name");
const cardUrlInput = addCardForm.querySelector(".popup__input_type_url");

// Selectores para la imagen ampliada y las demás ventanas emergentes.
const imagePopup = document.querySelector("#image-popup");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const closeImageButton = document.querySelector("#image-popup .popup__close");

// Muestra una ventana y activa el cierre con Escape.
function openModal(modal) {
  modal.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscapeKey);
}

// Oculta la ventana y limpia el estado de su formulario.
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscapeKey);

  const form = modal.querySelector(".popup__form");
  if (form) {
    resetValidation(form);
  }
}

// Escape cierra la ventana que esté abierta.
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    const openedModal = document.querySelector(".popup_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

// Rellena el formulario con los datos visibles del perfil.
function handleOpenEditModal() {
  fillProfileForm();
  resetValidation(editProfileForm);
  openModal(editProfilePopup);
}

function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

// Guarda los cambios válidos del perfil.
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfilePopup);
}

// Construye una tarjeta y conecta sus acciones.
function getCardElement(card) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  cardTitle.textContent = card.name;
  cardImage.src = card.link;
  cardImage.alt = card.name;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_is-active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImage.addEventListener("click", () => {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupCaption.textContent = card.name;
    openModal(imagePopup);
  });

  return cardElement;
}

// Inserta al inicio del contenedor una tarjeta ya construida.
function renderCard({ name, link }, container) {
  const cardElement = getCardElement({ name, link });
  container.prepend(cardElement);
}

// Renderiza las seis tarjetas iniciales en su orden original.
[...initialCards].reverse().forEach((card) => {
  renderCard(card, cardContainer);
});

// Añade una tarjeta, cierra la ventana y limpia el formulario.
function handleCardFormSubmit(event) {
  event.preventDefault();

  renderCard(
    {
      name: cardNameInput.value,
      link: cardUrlInput.value.trim(),
    },
    cardContainer,
  );

  closeModal(addCardPopup);
  addCardForm.reset();
  resetValidation(addCardForm);
}

// Cierra una ventana emergente al pulsar fuera de su contenido.
function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.currentTarget);
  }
}

// Registra las interacciones principales de formularios y ventanas.
function setPageEventListeners() {
  setEventListeners(editProfileForm);
  setEventListeners(addCardForm);

  editProfileButton.addEventListener("click", handleOpenEditModal);
  editProfileForm.addEventListener("submit", handleProfileFormSubmit);
  addCardButton.addEventListener("click", () => openModal(addCardPopup));
  addCardForm.addEventListener("submit", handleCardFormSubmit);

  editProfilePopup
    .querySelector(".popup__close")
    .addEventListener("click", () => closeModal(editProfilePopup));
  closeAddCardButton.addEventListener("click", () =>
    closeModal(addCardPopup),
  );
  closeImageButton.addEventListener("click", () => closeModal(imagePopup));

  document.querySelectorAll(".popup").forEach((popup) => {
    popup.addEventListener("click", handleOverlayClick);
  });
}

setPageEventListeners();
