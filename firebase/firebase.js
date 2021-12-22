import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import 'firebase/storage';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        
            firebase.initializeApp(firebaseConfig)
      
        
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        /*this.storage = app.storage();*/
    }

    // Registra un usuario
    async registrar(nombre, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

        return await newUser.user.updateProfile({
            displayName : nombre
        })
    }

    // Inicia sesión del usuario
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Cierra la sesión del usuario
    async cerrarSesion() {
        await this.auth.signOut();
    }
    
}

const firebases = new Firebase();
export default firebases;