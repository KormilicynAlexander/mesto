let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup-form')
let editButton = document.querySelector('.profile__edit-button');
let exitButton = document.querySelector('.popup__exit-button');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let profilePopupValueName = popupForm.querySelector('#username');
let profilePopupValueCareer = popupForm.querySelector('#career');
let elementGroupLike = document.querySelector('.element__group-like');

elementGroupLike.addEventListener('click', function() {
  elementGroupLike.classList.toggle('element__group-like_active')
});

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

// const closePopupByClickOnOverlay = function (event) {
//     if (event.target !== event.currentTarget) return;
//     closePopup();
// }

// popup.addEventListener('click', closePopupByClickOnOverlay)

const sectionElements = document.querySelector('.elements');

const templateElement = document.querySelector('.template-element').content;

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

  const clonedTemplateElement = templateElement.querySelector('.element').cloneNode(true);

  initialCards.forEach(function(el) {
    clonedTemplateElement.querySelector('.element__group-name').textContent = el.name;
    clonedTemplateElement.querySelector('.element__mask-group').src = el.link;
    sectionElements.append(clonedTemplateElement);
  });

editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);