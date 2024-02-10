import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from "./firebase.js"
import {showMessage} from './showMessage.js'

const signupform = document.querySelector('#signup-form')

signupform.addEventListener('submit', async (e) => {
e.preventDefault()


const email = signupform['signup-email'].value
const password = signupform['signup-password'].value

console.log(email, password)

try {
    const  userCredentials = await createUserWithEmailAndPassword(auth, email, password)
console.log(userCredentials)

//close the signup modal
const signupModal = document.querySelector('#signupModal')
const modal = bootstrap.Modal.getInstance(signupModal)
modal.hide()

    
    showMessage("se ha registrado " + userCredentials.user.email)
    
} catch (error) {
   
        if (error.code === 'auth/email-already-in-use'){
            showMessage("correo en uso", "error")
        }else if (error.code === 'auth/invalid-email'){
            showMessage("email invalido", "error")
        } else if (error.code === 'auth/weak-password'){
            showMessage("contraseña invalida", "error")
        } else if (error.code){
            showMessage(error.message, "error")
        }



}


})