function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const websiteInput = document.getElementById('website');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const websiteError = document.getElementById('websiteError');
    const messageError = document.getElementById('messageError');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const websiteValue = websiteInput.value.trim();
    const messageValue = messageInput.value.trim();

    nameInput.style.border = '2px solid red';
    emailInput.style.border = '2px solid red';
    websiteInput.style.border = '2px solid red';
    messageInput.style.border = '2px solid red';

    // Name validation (not empty)
    if (nameValue === '') {
      nameError.textContent = 'This field is required';
      nameError.style.color = 'red';
    } else {
      nameError.textContent = '';
    }

    // Email validation (basic format)
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(emailValue)) {
      emailError.textContent = 'A valid email address is required';
      emailError.style.color = 'red';
    } else {
      emailError.textContent = '';
    }

    // Website validation (optional, must be a valid URL)
    if (websiteValue == '') {
      const websitePattern = /^https?:\/\/\S+/;
      if (!websitePattern.test(websiteValue)) {
        websiteError.textContent = 'A valid url is required';
        websiteError.style.color = 'red';
      } else {
        websiteError.textContent = '';
      }
    } else {
      websiteError.textContent = '';
    }

    // Message validation (not empty)
    if (messageValue === '') {
      messageError.textContent = 'This field is required';
      messageError.style.color = 'red';
    } else {
      messageError.textContent = '';
    }
  }