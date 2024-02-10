import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e => {
e.preventDefault()

const email = signInForm['login-email'].value
const password = signInForm['login-password'].value

try{
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials)

const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
modal.hide()

showMessage('bienvenido ' + credentials.user.email)
window.location.href="dashboard.html";

}catch (error) {
            if (error.code === "auth/wrong-password") {
            showMessage('contraseña incorrecta', 'error')
        } else if (error.code === "auth/user-not-found"){
            showMessage('usuario no encontrado', 'error')
        }  else{
            showMessage(error.message, 'error')
        }


}})

