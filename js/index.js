//Переменные

let popup = document.querySelector('.popup');
let popupMesto = document.querySelector('.popup-mesto');
let popupForm = document.querySelector('.popup-form');
let editButton = document.querySelector('.profile__edit-button');
let popupMestoAddButton = document.querySelector('.profile__add-button');
let exitButtonMesto = document.querySelector('#popup__exit-button-mesto');
let exitButton = document.querySelector('.popup__exit-button');
let popupMestoLocation = document.querySelector('#location');
let popupMestoLink = document.querySelector('#link');
let popupMestoSubmit = document.querySelector('#submit-mesto');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let profilePopupValueName = popupForm.querySelector('#username');
let profilePopupValueCareer = popupForm.querySelector('#career');
let card = document.querySelector('.element');



// Редактирование профиля, открытие и закрытие формы

function openPopup() {
popup.classList.add('popup_opened');
setOldName();
}

function closePopup() {
popup.classList.remove('popup_opened');
}

function setOldName () {
profilePopupValueName.value = profileName.textContent
profilePopupValueCareer.value =profileCareer.textContent
}

function handleFormSubmit (event) {
event.preventDefault();
profileName.textContent = profilePopupValueName.value;
profileCareer.textContent = profilePopupValueCareer.value;
closePopup();
}


// Создание карточки, открытие и закрытие

function openPopupMesto() {
  popupMesto.classList.add('popup-mesto_active');
  };
  
function closePopupMesto() {
    popupMesto.classList.remove('popup-mesto_active');
  };

function handleSubmit(event) {
event.preventDefault();
    renderItem ({
      name: popupMestoLocation.value,
      link: popupMestoLink.value,
    });
  closePopupMesto(popupMesto);
  };




//Рендерим карточки

const initialCards = [
  {
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const listElement = document.querySelector('.elements');

const itemTemplate = document.querySelector('.list-template').content;

function render() {
initialCards.forEach(renderItem);
};

function renderItem(initialCard) {
const newHtmlElement = itemTemplate.cloneNode(true);
const nameElement = newHtmlElement.querySelector('.element__group-name');
nameElement.textContent = initialCard.name;

const photoElement = newHtmlElement.querySelector('.element__mask-group');
photoElement.src = initialCard.link;

setListenersForItem(newHtmlElement);
listElement.prepend(newHtmlElement);
};

render();



// Удаление/лайк карточек

function setListenersForItem() {
  const deleteButton = document.querySelector('.element__delete');
  deleteButton.addEventListener('click', handleDelete);

  const elementGroupLike = document.querySelector('.element__group-like');
  elementGroupLike.addEventListener('click', handleLike);
};

function handleDelete(event) {
  const currenListElement = event.target.closest('.template-element');
  currenListElement.remove();
};

function handleLike(event) {
  event.target.classList.toggle('element__group-like_active');
};




//Открытие фото карточки

const popupFullPhoto = document.querySelector('.popup-full-size');
const popupFullPhotoName = document.querySelector('.popup-full-size__img-name');
const photoElement = document.querySelector('.element__mask-group');
const nameElement = document.querySelector('.element__group-name');
const fullSizeExitButton = document.querySelector('.popup-full-size__exit-button');

function openPhoto(elem) {
  elem.classList.add('popup-full-size_active');
};

function closePhoto() {
  popupFullPhoto.classList.remove('popup-full-size_active');
};

function handleElementsCard() {
  popupFullPhoto.src = photoElement.src;
  popupFullPhoto.alt = nameElement.textContent;
  popupFullPhotoName.textContent = nameElement.textContent;
  openPhoto(popupFullPhoto);
}




//Слушатели событий

editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
popupMestoAddButton.addEventListener('click', openPopupMesto);
exitButtonMesto.addEventListener('click', closePopupMesto);
popupForm.addEventListener('submit', handleFormSubmit);
popupMestoSubmit.addEventListener('click', handleSubmit);
photoElement.addEventListener('click', handleElementsCard)
fullSizeExitButton.addEventListener('click', closePhoto)








// const closePopupByClickOnOverlay = function (event) {
//     if (event.target !== event.currentTarget) return;
//     closePopup();
// }

// popup.addEventListener('click', closePopupByClickOnOverlay)