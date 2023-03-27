
//creation des variables vides qui seront stocker dans le tableau et recuperation des valeurs.
  let infos_users = [];
  let fullnameInput= document.getElementById('fullname');
  let fullnameValue = fullnameInput.getAttribute('value');
  infos_users.push(fullnameValue);

  let usernameInput = document.getElementById('username');
  let usernameValue = usernameInput.getAttribute('value');
  infos_users.push(usernameValue);

  let emailInput = document.getElementById('email');
  let emailValue = emailInput.getAttribute('value');
  infos_users.push(emailValue);
 
  const passwordInput = document.querySelector('#password');
  let passwordValue = passwordInput.getAttribute('value');
  infos_users.push(passwordValue);

  //variables qui ne seront pas stocker dans le tableau
const termsCheckbox = document.querySelector('#terms');
let submitButton = document.querySelector('#submitBtn');
const loginInput = document.querySelector('#login');
const confirmInput = document.querySelector('#confirm_password');
const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const togglePassword3 = document.querySelector('#togglePassword3');


//affiche les elements saisit lorsqu'on clique sur le boutton submit
  submitButton.addEventListener('click', function() { 
   console.log(infos_users);
  });


//verification ques les criteres d'evaluations de l'email sont respectes
emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value)) {
      emailInput.setCustomValidity('');
    } else {
      emailInput.setCustomValidity('Veuillez entrer une adresse e-mail valide.');
    }
  });

 //verification ques les criteres d'evaluations du mot de passe sont respectes 
passwordInput.addEventListener('input', () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (passwordRegex.test(passwordInput.value)) {
      passwordInput.setCustomValidity('');
    } else {
      passwordInput.setCustomValidity('Le mot de passe doit contenir au moins 8 caractères avec des majuscules, des minuscules, des caractères spéciaux et des nombres.');
    }
  });

//verification ques les criteres d'evaluations du nom d'utilisateur sont respectes 
  usernameInput.addEventListener('input', () => {
    if (usernameInput.value.length >= 4) {
        usernameInput.setCustomValidity('');
    } else {
        usernameInput.setCustomValidity('Le nom doit contenir au moins 4 caractères.');
    }
  });

//fonction pour verifier la correspondance des deux mots de passe
  function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Les mots de passe ne correspondent pas");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  // Ce code ajoute des écouteurs d’événements à vos champs de mot de passe et de confirmation de mot de passe. Lorsque l’utilisateur saisit quelque chose dans l’un des champs, la fonction validatePassword est appelée pour vérifier si les deux champs contiennent la même valeur. 
  //La ligne password.onchange = validatePassword; ajoute un écouteur d’événements au champ de mot de passe qui détecte les changements dans le champ. Lorsque le champ change, la fonction validatePassword est appelée.
  //La ligne confirm_password.onkeyup = validatePassword; ajoute un écouteur d’événements au champ de confirmation de mot de passe qui détecte les frappes dans le champ. Lorsque l’utilisateur tape quelque chose dans le champ, la fonction validatePassword est appelée.
  //En appelant la fonction validatePassword chaque fois que l’utilisateur saisit quelque chose dans l’un des champs, vous pouvez vous assurer que les deux champs contiennent toujours la même valeur.
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;

  //tant que l'user ne coche pas la case des conditions d'utilisation le boutton submit est grise
  termsCheckbox.addEventListener('change', function() {
    if (this.checked) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  //verifier si tous les criteres d'evalaution sont verifer avant de rendre le boutton Submit clickable
  function validateForm() {
    if (emailInput.checkValidity() && passwordInput.checkValidity() && usernameInput.checkValidity()) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
       
    }
  }
  //configuartion des icones qui permettent de voire le texte saisit dans le champ des mots de passe
  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      eyeIcon1.classList.remove('fa-eye-slash');
      eyeIcon1.classList.add('fa-eye');
    } else {
      passwordInput.type = 'password';
      eyeIcon1.classList.remove('fa-eye');
      eyeIcon1.classList.add('fa-eye-slash');
    }
  });

  togglePassword2.addEventListener('click', () => {
    if (confirmInput.type === 'password') {
      confirmInput.type = 'text';
      eyeIcon2.classList.remove('fa-eye-slash');
      eyeIcon2.classList.add('fa-eye');
    } else {
      confirmInput.type = 'password';
      eyeIcon2.classList.remove('fa-eye');
      eyeIcon2.classList.add('fa-eye-slash');
    }
  });

  togglePassword3.addEventListener('click', () => {
    if (loginInput.type === 'password') {
      loginInput.type = 'text';
      eyeIcon3.classList.remove('fa-eye-slash');
      eyeIcon3.classList.add('fa-eye');
    } else {
     loginInput.type = 'password';
      eyeIcon3.classList.remove('fa-eye');
      eyeIcon3.classList.add('fa-eye-slash');
    }
  });


  
      


 