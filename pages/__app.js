import app from 'next/app';
import firebase, {FirebaseContext, firebaseContext} from '../firebase';
const miApp = props => {
    const {Component, pageProps} = props;
    return(
        <FirebaseContext.Provider
            value={{
                firebase
            }}
        >
            <Component {...pageProps} />

        </FirebaseContext.Provider>
    );
}

export default miApp;