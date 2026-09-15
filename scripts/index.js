let initialCards = [
  {name: 'Valle de Yosemite', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg'},
  {name: 'Lago Louise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg'},
  {name: 'Montañas Calvas', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg'},
  {name: 'Latemar', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg'},
  {name: 'Parque Nacional de la Vanoise', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg'},
  {name: 'Lago di Braies', link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg'}
]

initialCards.forEach((card) => {
  console.log(card.name);
});
