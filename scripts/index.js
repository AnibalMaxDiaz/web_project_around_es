let initialCards = [
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

initialCards.forEach((card) => {
  console.log(card.name);
});

// Variables for the profile edit popup
const editProfileButton = document.querySelector(".profile__edit-button");
const closeEditProfileButton = document.querySelector(
  "#edit-popup .popup__close",
);
const editProfilePopup = document.querySelector("#edit-popup");

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
  const profileName = document.querySelector(".popup__input_type_name");
  const profileDescription = document.querySelector(".popup__input_type_description");
  const profileTitle = document.querySelector(".profile__title");
  const profileDes = document.querySelector(".profile__description");
  profileName.value = profileTitle.textContent;
  profileDescription.value = profileDes.textContent;
}
