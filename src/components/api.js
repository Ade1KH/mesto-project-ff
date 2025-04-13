//запрос к серверу

const setting = {
  url: "https://nomoreparties.co/v1/wff-cohort-35",
  headers: {
      authorization: "4e38c99a-8169-4639-87e7-5f0603bdda81",
      "Content-Type": "application/json",
  },
};

const responseAuthorization = (res) => (res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`));

//метод head
//аватар

const checkLink = (link) => {
  return fetch(link, {
      method: "HEAD",
  })
      .then((res) => {
          const linkType = res.headers.get("Content-Type");
          if (res.ok && linkType && linkType.startsWith("image/")) {
              return true;
          } else {
              return false;
          }
      })
      .catch((err) => console.error(`Ошибка проверки ссылки: ${err}`));
};

//гет запросы
//карточки

const getUserCards = () => {
  return fetch(`${setting.url}/cards`, {
      headers: setting.headers,
  }).then(responseAuthorization);
};

//профиль

const getUserProfile = () => {
  return fetch(`${setting.url}/users/me`, {
      headers: setting.headers,
  }).then(responseAuthorization);
};

//метод patch
//аватар

const editProfileImage = (newAvatarLoad) => {
  return fetch(`${setting.url}/users/me/avatar`, {
      headers: setting.headers,
      method: "PATCH",
      body: JSON.stringify(newAvatarLoad),
  }).then(responseAuthorization);
};

//редактирование профиля

const patchUserProfile = (newProfile) => {
  return fetch(`${setting.url}/users/me`, {
      headers: setting.headers,
      method: "PATCH",
      body: JSON.stringify(newProfile),
  }).then(responseAuthorization);
};

//метод post
//карточка
const postNewCard = (newCardData) => {
  return fetch(`${setting.url}/cards`, {
      method: "POST",
      headers: setting.headers,
      body: JSON.stringify(newCardData),
  }).then(responseAuthorization);
};

//метод delete
//карточка
const deleteCardId = (cardId) => {
  return fetch(`${setting.url}/cards/${cardId}`, {
      method: "DELETE",
      headers: setting.headers,
  }).then(responseAuthorization);
};

//лайк
const toogleLikeCard = (cardId, likeStatus) => {
  const variableMethod = likeStatus ? "DELETE" : "PUT";

  return fetch(`${setting.url}/cards/likes/${cardId}`, {
      method: variableMethod,
      headers: setting.headers,
  }).then(responseAuthorization);
};

export { checkLink, getUserCards, getUserProfile, editProfileImage, patchUserProfile, postNewCard, deleteCardId, toogleLikeCard };
