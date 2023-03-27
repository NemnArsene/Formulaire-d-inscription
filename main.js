
//creation des variables vides  et recuperation des valeurs.

let fullnameInput= document.getElementById('fullname');
let usernameInput = document.getElementById('username');
let emailInput = document.getElementById('email');
const passwordInput = document.querySelector('#password');
const termsCheckbox = document.querySelector('#terms');
let submitButton = document.querySelector('#submitBtn');
const loginInput = document.querySelector('#login');
const confirmInput = document.querySelector('#confirm_password');
const togglePassword = document.querySelector('#togglePassword');
const togglePassword2 = document.querySelector('#togglePassword2');
const togglePassword3 = document.querySelector('#togglePassword3');

//verification ques les criteres d'evaluations de l'email sont respectes
const defaultEmails = ["gmail.com", "outlook.fr", "yahoo.com"];
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var errorText3 = document.querySelector('#error-text3');
emailInput.addEventListener('input', () => {
  const email = emailInput.value;
  const domain = email.split("@")[1];
  
  if (defaultEmails.includes(domain) && emailRegex.test(email)) {
    emailInput.setCustomValidity('');
  } else {
    emailInput.setCustomValidity('Veuillez entrer une adresse e-mail valide.');
  }
//validationMessage est une propriété de l’objet HTMLInputElement qui contient le message d’erreur personnalisé défini par la méthode setCustomValidity().
// Dans ce script, la ligne de code que vous avez mentionnée met à jour le texte de l’élément HTML stocké dans la variable errorText3 avec le message d’erreur personnalisé (ou une chaîne vide si aucun message d’erreur n’est présent).
  errorText3.textContent = emailInput.validationMessage;
});

 //verification ques les criteres d'evaluations du mot de passe sont respectes 
 var errorText = document.querySelector('#error-text');
 passwordInput.addEventListener('input', function() {
  var password = passwordInput.value;
   
   if (password === password.toUpperCase()) {
     errorText.textContent = 'Le mot de passe est entièrement en majuscule';
   } else if (password === password.toLowerCase()) {
     errorText.textContent = 'Le mot de passe est entièrement en minuscule';
   } else {
     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
     if (passwordRegex.test(password)) {
       errorText.textContent = '';
     } else {
       errorText.textContent = 'Le mot de passe doit contenir au moins 8 caractères avec des majuscules, des minuscules, des caractères spéciaux et des nombres.';
     }
   }
 });

//verification ques les criteres d'evaluations du nom d'utilisateur sont respectes 

  var errorText2 = document.querySelector('#error-text2');
  usernameInput.addEventListener('input', () => {
    if (usernameInput.value.length >= 4) {
      errorText2.textContent = '';
    } else {
        errorText2.textContent = 'Le nom doit contenir au moins 4 caractères.';
    }
  })

//fonction pour verifier la correspondance des deux mots de passe
  function validatePassword(){
    var errorText4 = document.querySelector('#error-text4');
    if(password.value != confirm_password.value) {
      errorText4.textContent = 'Les mots de passe ne correspondent pas';
    } else {
      errorText4.textContent= '';
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


  
      


 