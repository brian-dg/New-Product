import app from 'firebase/app';
import firebaseConfig from './config';

import 'firebase/auth';


class Firebase {
    constructor () {
        if(!app.getApps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    // Registrar usuario
    async register(name,email,password) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

        return await newUser;
    }
   
}

const firebase = new firebase();

export default firebase;