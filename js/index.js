let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup-form')
let editButton = document.querySelector('.profile__edit-button');
let exitButton = document.querySelector('.popup__exit-button');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let profilePopupValueName = popupForm.querySelector('#username');
let profilePopupValueCareer = popupForm.querySelector('#career');

function openPopup() {
    popup.classList.add('popup_popup_opened');
    oldName();
}

function closePopup() {
    popup.classList.remove('popup_popup_opened');
}

function oldName () {
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

editButton.addEventListener('click', openPopup);
exitButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);