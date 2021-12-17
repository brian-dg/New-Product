import app from 'firebase/app';

import firebaseConfig from './config';

class Firebase {
   constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        }
        
    }
    /*

    // Registra un usuario
    async registrar(name, email, password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

        return await newUser.user.updateProfile({
            displayName : nombre
        })
    }
*/
}

const firebase = new Firebase();
export default firebase;