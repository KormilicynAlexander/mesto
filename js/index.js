//Переписал всё с новым подходом* (заметка для себя)

//Переменные для popup
const infoButton = document.querySelector(".profile__edit-button");
const userName = document.querySelector(".profile__name");
const jobName = document.querySelector(".profile__career");
const closeButtonProfile = document.querySelector(".popup__exit-button");
const popupEditProfile = document.querySelector(".popup");
const popupEditForms = document.querySelector("#edit-form__mesto");
const popupUserButton = document.querySelector(".profile__add-button");
const popupExitButtonMesto = document.querySelector("#popup__exit-button-mesto");

//Переменные для popup mesto
const popupPlaceAdd = document.querySelector(".popup-mesto");
const userNameInput = document.querySelector("#username");
const jobInput = document.querySelector("#career");
const popupEditForm = document.querySelector(".popup-form");
const popupInputPlaceTitle = document.querySelector("#location");
const popupInputPlaceLink = document.querySelector("#link");

//Переменные для popup full size
const popupCardPhoto = document.querySelector('.popup-full-size');
const popupImageCard = document.querySelector('.popup-full-size__img');
const popupTitleCard = document.querySelector('.popup-full-size__img-name');
const popupButtonClosePhoto = document.querySelector(".popup-full-size__exit-button");
// const popupButtonCloseCard = document.querySelector('.popup-mesto');

//Переменные для template
const elementsTemplate = document.querySelector(".list-template").content.querySelector(".element");
const elementsList = document.querySelector(".elements");

//Функция открытия и закрытия popup
function openEditForm() {
  openPopup(popupEditProfile);
  userNameInput.value = userName.textContent;
  jobInput.value = jobName.textContent;
};

function closePopup(popup) {
  popup.classList.remove("popup_opened");
};
function closePopupFormEdit() {
  closePopup(popupEditProfile);
};
function closePopupViewPhoto() {
  closePopup(popupCardPhoto);
};
function closePopupAddPhoto() {
  closePopup(popupPlaceAdd);
};

function openPopup(elem) {
  elem.classList.add("popup_opened");
};
function openFormAddPhoto() {
  openPopup(popupPlaceAdd);
};

//Функция редактирования профиля
function submitHandlerEdit(event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  jobName.textContent = jobInput.value;
  closePopupFormEdit();
};

//Функция лайка
const likeHeart = (event) => {
  event.target.classList.toggle("element__group-like_active");
};

//Функция добавление карточки
const submitAddCard = (event) => {
  event.preventDefault();
  renderElement({
    name: popupInputPlaceTitle.value,
    link: popupInputPlaceLink.value,
  });
  event.target.reset();
  closePopup(popupPlaceAdd);
};

//Функция добавления карточек
const generateElementList = (cardData) => {
const templateElements = elementsTemplate.cloneNode(true);
const titleNewElements = templateElements.querySelector(".element__group-name");
const likeElementsHeart = templateElements.querySelector(".element__group-like");
const elementsDelete = templateElements.querySelector(".element__delete");
const elementsImgCard = templateElements.querySelector(".element__mask-group");
const titleElements = templateElements.querySelector(".element__group-name");

elementsImgCard.src = cardData.link;
titleNewElements.textContent = cardData.name;

function handleElementsCard() {
  popupImageCard.src = elementsImgCard.src;
  popupImageCard.alt = titleElements.textContent;
  popupTitleCard.textContent = titleElements.textContent;
  openPopup(popupCardPhoto);
}

elementsImgCard.addEventListener("click", handleElementsCard);
elementsDelete.addEventListener("click", handleDeleteCard);
likeElementsHeart.addEventListener("click", likeHeart);

return templateElements;
};

const handleDeleteCard = (event) => {
  event.target.closest(".element").remove();
};

const renderElement = (cardData) => {
  elementsList.prepend(generateElementList(cardData));
};

initialCards.forEach((cardData) => {
  renderElement(cardData);
});

//Cлушатели событий
popupEditForms.addEventListener("submit", submitAddCard);
infoButton.addEventListener("click", openEditForm);
popupEditForm.addEventListener("submit", submitHandlerEdit);
popupUserButton.addEventListener("click", openFormAddPhoto);
popupExitButtonMesto.addEventListener("click", closePopupAddPhoto);
popupButtonClosePhoto.addEventListener("click", closePopupViewPhoto);
closeButtonProfile.addEventListener("click", closePopupFormEdit);