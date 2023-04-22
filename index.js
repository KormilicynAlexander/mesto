let popup = document.querySelector('.pop-up');
let popupForm = document.querySelector('.pop-up-form')
let editButton = document.querySelector('.profile__edit-button');
let exitButton = document.querySelector('.pop-up__exit-button');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');
let profilePopupValues = document.querySelectorAll('.pop-up-form__input');
let profilePopupValueName = popupForm.querySelector('#username');
let profilePopupValueCareer = popupForm.querySelector('#career');
let saveButton = document.querySelector('.pop-up-form__submit');
let inputs = document.querySelectorAll('input');

function openPopup() {
    popup.classList.add('pop-up_active');
}

function closePopup() {
    popup.classList.remove('pop-up_active');
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

const closePopupByClickOnOverlay = function (event) {
    if (event.target !== event.currentTarget) return;
    closePopup();
}

editButton.addEventListener('click', openPopup);
editButton.addEventListener('click', oldName);
exitButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);
popup.addEventListener('click', closePopupByClickOnOverlay)