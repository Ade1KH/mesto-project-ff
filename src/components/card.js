  //Функция создания карточки

  function createCard(cardItems, deleteCard, zoomImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardImage.src = cardItems.link;
    cardImage.alt = cardItems.name;
    cardTitle.textContent = cardItems.name;
    cardElement.querySelector('.card__like-button').addEventListener('click', likeCard);
    deleteButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', zoomImage);
   
    return cardElement;
  }

//Функция удаления карточки
  
function deleteCard(evt) {
  const deleteButton = evt.target; 
  const cardElement = deleteButton.closest('.card'); 
  if (cardElement) {
      cardElement.remove();
  }
}

  //функция лайк
  
  function likeCard (evt) {
    evt.currentTarget.classList.toggle("card__like-button_is-active");
  }

  export {createCard, deleteCard, likeCard};