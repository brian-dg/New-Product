import App from 'next/app';
import firebase, {FirebaseContext} from '../firebase';

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


/*ORIGINAL 

import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';

const MyApp = props => {
    const usuario = useAutenticacion();
    const { Component, pageProps } = props;

    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
        >
            <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;*/