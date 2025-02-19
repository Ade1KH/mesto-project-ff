// @todo: Темплейт карточки

const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы


// @todo: Функция создания карточки

function createCard(cardItems, deleteCallback) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');

    cardImage.src = cardItems.link;
    cardImage.alt = cardItems.name;
    cardTitle.textContent = cardItems.name;

    deleteButton.addEventListener('click', deleteCallback);

    cardElement.querySelector(".card__like-button").addEventListener("click", e => {
      e.currentTarget.classList.toggle("card__like-button_is-active")
  });

    return cardElement;
}

function addCards() {
    initialCards.forEach((cardItems) => {
        const cardElement = createCard(cardItems, deleteCard); 
        placesList.append(cardElement);
    });
}

// @todo: Функция удаления карточки

function deleteCard(e) {
    const deleteButton = e.target; 
    const cardElement = deleteButton.closest('.card'); 
    if (cardElement) {
        cardElement.remove();
    }
}


// @todo: Вывести карточки на страницу

addCards();