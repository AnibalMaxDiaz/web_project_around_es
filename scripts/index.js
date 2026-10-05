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

// Variables for the profile edit popup
const editProfileButton = document.querySelector(".profile__edit-button");
const closeEditProfileButton = document.querySelector(
  "#edit-popup .popup__close",
);
const editProfilePopup = document.querySelector("#edit-popup");

const profileNameInput = document.querySelector(
  ".popup__input_type_name",
);
const profileDescriptionInput = document.querySelector(
  ".popup__input_type_description",
);
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const cardContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card__template").content.querySelector(".card");

// Variables for the add card popup
const addCardButton = document.querySelector(".profile__add-button");
const addCardPopup = document.querySelector("#new-card-popup");
const closeAddCardButton = addCardPopup.querySelector(".popup__close");
const addCardForm = addCardPopup.querySelector("#new-card-form");
const cardNameInput = addCardForm.querySelector(".popup__input_type_card-name");
const cardUrlInput = addCardForm.querySelector(".popup__input_type_url");

// Variables for the image expanded
const imagePopup = document.querySelector("#image-popup");
const popupImage = document.querySelector(".popup__image");
const popupCaption = document.querySelector(".popup__caption");
const closeImageButton = document.querySelector("#image-popup .popup__close");

// Functions to open and close popups
function openModal(modal) {
  modal.classList.add("popup_is-opened");
}
function closeModal(modal) {
  modal.classList.remove("popup_is-opened");
}

// Event listeners for opening and closing the profile edit popup
editProfileButton.addEventListener("click", handleOpenEditModal);

function handleOpenEditModal() {
  openModal(editProfilePopup);
  fillProfileForm();
}

closeEditProfileButton.addEventListener("click", () => {
  closeModal(editProfilePopup);
});

// Function to fill the profile form with current profile information
function fillProfileForm() {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
}

// Profile form submission handling
const formElement = document.querySelector("#edit-profile-form");
formElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = profileNameInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeModal(editProfilePopup);
}

// last part of the project: adding cards to the page by js

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

// Function to render a card and prepend it to the card container
function renderCard({ name, link }, container) {
  const cardElement = getCardElement({ name, link });
  container.prepend(cardElement);
}

// Render initial cards in the same order as the array
[...initialCards].reverse().forEach((card) => {
  renderCard(card, cardContainer);
});

// Open the add card popup when the "Add Card" button is clicked
addCardButton.addEventListener("click", () => {
  openModal(addCardPopup);
});

// Close the add card popup with the "X" button
closeAddCardButton.addEventListener("click", () => {
  closeModal(addCardPopup);
});

// Handle the submission of the new card form
function handleCardFormSubmit(event) {
  event.preventDefault(); // Prevent the default page reload
  
  // Get the values from the inputs and pass them to renderCard
  renderCard({
    name: cardNameInput.value.trim() || "Sin título",
    link: cardUrlInput.value.trim() || "./images/placeholder.jpg"
  }, cardContainer);

  closeModal(addCardPopup); // Close the modal
  addCardForm.reset();     // Clear the form fields
}

// Event listener for the card form submission
addCardForm.addEventListener("submit", handleCardFormSubmit);

// Close the enlarged image popup
closeImageButton.addEventListener("click", () => {
  closeModal(imagePopup);
});
