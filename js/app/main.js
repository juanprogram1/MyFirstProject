import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js"
import { auth } from './firebase.js'
import { loginCheck } from './loginCheck.js'

import './signupform.js'
import './signinform.js'
//import './logout.js'



onAuthStateChanged(auth, async (user) =>{
    loginCheck(user)
   // if (user){
    //    loginCheck(user)
    // } else {
   //    loginCheck
    // }   

})