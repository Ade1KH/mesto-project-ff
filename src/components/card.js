  //Функция создания карточки

  function createCard(initialCard, deleteCard, zoomImage, handleCardSubmit, likeCard) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement= cardTemplate.querySelector(".card").cloneNode(true); 
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    cardImage.src = initialCard.link;
    cardImage.alt = initialCard.name;
    cardTitle.textContent = initialCard.name;
    const cardLikeButton = cardElement.querySelector('.card__like-button');
    cardLikeButton.addEventListener('click', () => likeCard(cardLikeButton));
    deleteButton.addEventListener('click', () => deleteCard(cardElement));
    cardImage.addEventListener('click', zoomImage);
   
    return cardElement;
  }

//Функция удаления карточки
  
const deleteCard = (cardElement) => {
  cardElement.remove();
}

  //функция лайк
  
  function likeCard (element) {
    element.classList.toggle('card__like-button_is-active');
  }
  

  export {createCard, deleteCard, likeCard};