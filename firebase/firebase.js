import app from 'firebase/app';
import firebaseConfig from './config';


class Firebase {
    constructor () {
        if(!app.getApps.length) {
            app.initializeApp(firebaseConfig)
        }
        
    }
}

const firebase = new firebase();

export default firebase;