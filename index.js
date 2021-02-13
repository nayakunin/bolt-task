const phoneInputGroup = document.querySelector('.js-phone-input-group');
const [phonePrefixInput, phoneInput] = phoneInputGroup.getElementsByClassName('form__input');

const onFocusPhoneInputGroup = () => {
    phoneInputGroup.classList.add('form__input-group_focus');
};

const onLoseFocusPhoneInputGroup = () => {
    phoneInputGroup.classList.remove('form__input-group_focus');
}

phonePrefixInput.addEventListener('focusin', onFocusPhoneInputGroup);
phoneInput.addEventListener('focusin', onFocusPhoneInputGroup);

phonePrefixInput.addEventListener('focusout', onLoseFocusPhoneInputGroup);
phoneInput.addEventListener('focusout', onLoseFocusPhoneInputGroup);