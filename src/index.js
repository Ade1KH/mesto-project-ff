// @todo: Темплейт карточки

import './pages/index.css';
import { initialCards } from './components/cards.js';
import { createCard, deleteCard, likeCard } from './components/card.js';
import { openModal, closeModal, closeOverlay, EscModal } from './components/modal.js';

//DOM узлы
const placesList = document.querySelector('.places__list');
const profilePopUp = document.querySelector('.popup_type_edit');
const profileActive = document.querySelector('.profile__edit-button');
const popUpClose = document.querySelector('.popup__close');
const profileForm =  document.forms['edit-profile'];
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const buttonAddCard = document.querySelector('.profile__add-button');
const cardContent = document.querySelector('.popup_type_new-card');
const closeCardSection = cardContent.querySelector('.popup__close');
const popUpImg = document.querySelector('.popup_type_image');
const closeImg = popUpImg.querySelector('.popup__close');
const imageCard = popUpImg.querySelector('.popup__image');
const imageCaption = popUpImg.querySelector('.popup__caption');

//функция редактирование профиля

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;
    closeModal(profilePopUp);
  }
  
  function inputEditProfile () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileDescription.textContent;
  }

  function clickEsc (evt) {
    if(evt.target === popUpClose) {
        evt.forms.reset();
    }
  }

//листнеры

buttonAddCard.addEventListener('click', () => openModal(cardContent));
profileForm.addEventListener('submit', handleFormSubmit); 
closeCardSection.addEventListener('click' , () => closeModal(cardContent));
popUpClose.addEventListener('click', () => closeModal(profilePopUp));
profilePopUp.addEventListener('mousedown', closeOverlay);
profileActive.addEventListener('click', function () {
    openModal(profilePopUp);
    inputsProfileFill()
  });
closeImg.addEventListener('click', () => closeModal(popUpImg));

//добавление карточек

const newPlaseForm = document.forms['new-place']
const plaseName = document.querySelector('.popup__input_type_card-name');
const plaseUrl = document.querySelector('.popup__input_type_url');
const imageName = document.querySelector('.popup__caption');
const imageUrl = document.querySelector('.popup__image');
const saveCard = newPlaseForm.querySelector('.popup__button');

function handleCardSubmit (evt) {
  evt.preventDefault();
  const newCard = {
    name: plaseName.value,
    link: plaseUrl.value
  }
  placesList.prepend(createCard(newCard, deleteCard, zoomImage, likeCard))
  newPlaseForm.reset();
  closeModal(cardContent);
}

saveCard.addEventListener('click', handleCardSubmit);

//zoom image

function zoomImage (evt) {
    openModal(popUpImg);
    imageCard.setAttribute('src', evt.target.src);
    imageCard.setAttribute('alt', evt.target.alt);
    imageCaption.textContent = evt.target.alt
  }

 

function addCards() {
    initialCards.forEach((cardItems) => {
        const cardElement = createCard(cardItems, deleteCard, zoomImage, handleCardSubmit, likeCard); 
        placesList.append(cardElement);
    });
  }


  
  addCards();
