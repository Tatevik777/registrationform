const form = document.forms.myForm;
const userNameInput = form.elements.name;
const emailInput = form.elements.email;
const passwordInput=form.elements.password;
const ageInput=form.elements.age;
const professionInput=form.elements.profession;
const agreeTerms=document.getElementById('agreeTerms');

const userNameError = document.getElementById('nameError');
const passwordError=document.getElementById('passwordError');
const emailError=document.getElementById('emailError');
const ageError=document.getElementById('ageError');
const professionError=document.getElementById('professionError');


userNameInput.addEventListener("blur", validateName);
emailInput.addEventListener("blur", validateEmail);
ageInput.addEventListener("blur", validateAge);
professionInput.addEventListener("blur", validateProfession);
passwordInput.addEventListener("blur", validatePassword);
agreeTerms.addEventListener("change", validateAgreement);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (
    validateName() &
    validateEmail() &
    validateAge() &
    validateProfession() &
    validatePassword() &
    validateAgreement()
  ) {
    console.log("Name:", userNameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Age:", ageField.value);
    console.log(
      "Gender:",
      document.querySelector('input[name="gender"]:checked').value
    );
    console.log("Profession:", professionField.value);
    console.log("Password:", passwordInput.value);
    form.reset();
  }
});

function validateName() {
  const nameValue = userNameInput.value.trim();
  if (!nameValue.match(/^[A-Za-zА-Яа-яЁё\s]{2,20}$/)) {
  userNameError.textContent =
      "Имя должно содержать только буквы и пробелы, от 2 до 20 символов";
    return false;
  } else {
    userNameError.textContent = "";
    return true;
  }
}

function validateEmail() {
  const emailValue = emailInput.value.trim();
  if (!emailValue.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    emailError.textContent = "Введите корректный email";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validateAge() {
  const ageValue = ageInput.value.trim();
  if (ageValue < 18 || ageValue > 100) {
    ageError.textContent = "Введите корректный возраст (от 18 до 100 лет)";
    return false;
  } else {
    ageError.textContent = "";
    return true;
  }
}

function validateProfession() {
  if (professionInput.value === "") {
    professionError.textContent = "Выберите профессию";
    return false;
  } else {
    professionError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const passwordValue = passwordInput.value.trim();
  if (!passwordValue.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/)) {
    passwordError.textContent =
      "Пароль должен быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateAgreement() {
  if (!agreeTerms.checked) {
    agreeTerms.textContent = "Дайте согласие на обработку данных";
    return false;
  } else {
    agreeTerms.textContent = "";
    return true;
  }
}

function updateSubmitButton() {
  if (
    validateName() &
    validateEmail() &
    validateAge() &
    validateProfession() &
    validatePassword() &
    validateAgreement()
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

userNameInput.addEventListener("focus", () => (userNameError.textContent = ""));
emailInput.addEventListener("focus", () => (emailError.textContent = ""));
ageInput.addEventListener("focus", () => (ageError.textContent = ""));
professionInput.addEventListener(
  "focus",
  () => (professionError.textContent = "")
);
passwordInput.addEventListener("focus", () => (passwordError.textContent = ""));
agreeTerms.addEventListener(
  "change",
  () => (agreeTerms.textContent = "")
);

form.addEventListener("input", updateSubmitButton);
  
