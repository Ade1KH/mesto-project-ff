//фнкция создания карточки
function createCard(cardData, toogleLikeCard, zoomImage, deleteModal, currentUserId) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");

  const cardLikes = cardElement.querySelector(".card__likes-counter");
  const isLikedByCurrentUser = cardData.likes.some(card => card._id === currentUserId)

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardLikes.textContent = cardData.likes.length;

  cardLikeButton.addEventListener('click', () => {
    const isCardLiked = cardLikeButton.classList.contains('card__like-button_is-active');

    toogleLikeCard(cardData._id, isCardLiked)
    .then(updatedCard => {
        cardLikeButton.classList.toggle('card__like-button_is-active')
        cardLikes.textContent = updatedCard.likes.length;

        if (cardLikes.textContent < 1) {
          cardLikes.add('display-disabled')
      } else {
        cardLikes.remove('display-disabled')
      }
    })
    .catch(err => console.error(`Ошибка: ${err}`))
})

cardImage.addEventListener('click', () => {
    zoomImage(cardData.name, cardData.link)
})

deleteButton.addEventListener('click', () => {
  deleteModal(cardData._id, cardElement)
})

if (currentUserId !== cardData.owner._id) {
  deleteButton.classList.add('display-disabled')
}

if (isLikedByCurrentUser) {
  cardLikeButton.classList.add('card__like-button_is-active')
}

if (cardData.likes.length === 0) {
  cardLikes.classList.add('display-disabled')

} else {
  cardLikes.classList.remove('display-disabled')
}

return cardElement;
}

const deleteCard = (cardElement) => {
  cardElement.remove();
};

export { createCard, deleteCard};