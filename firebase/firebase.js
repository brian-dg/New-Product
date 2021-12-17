import app from "firebase/app";


import firebaseConfig from './config';

class Firebase {
    constructor() {
        
           
    }

    // Registra un usuario
    async registrar(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

        return await newUser.user.updateProfile({
            displayName : name
        })
    }

    // Inicia sesión del usuario
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }
    
/*
    // Cierra la sesión del usuario
    async cerrarSesion() {
        await this.auth.signOut();
    }*/
}

const firebase = new Firebase();
export default firebase;