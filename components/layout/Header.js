import React, {useContext} from 'react';
import Buscar from '../ui/Buscar';
import Navigation from './Navigation';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FirebaseContext } from '../../firebase';

const Header = () =>{
    const {user,firebase} = useContext(FirebaseContext);
    
    return(
        <header className="container ">
            <div className="justify-content-between d-flex collapse navbar-collapse navbar-expand-lg ">
                <div className="d-flex "  >
                    <span className="navbar navbar-brand mb-0  h1 d-flex ">P</span>
                        <Buscar/>
                        <Navigation/>
                </div>
                <div>   
                    {user ? (
                        <div className="d-flex align-items-center m-1 ">
                            <p className="text-center mt-3 p-2 ">Hola: {user.displayName}</p>    
                            <button 
                                type="button"
                                className=" btn btn-sm btn-danger"
                                onClick={() => firebase.cerrarSesion()}
                                >Cerrar Sesion</button>  
                        </div>
                        ) : (
                            <>
                            
                                <Link href="/login">
                                    <button 
                                        type="button"
                                        className=" btn btn-sm btn-danger m-2"                                   
                                        >Login</button>                                         
                                </Link>
                                <Link href="/create-Account">
                                    <button type="button" className=" btn btn-sm btn-warning m-2">Crear Cuenta</button>  
                                </Link>
                            </>
                        )
                    
                    }
                </div>


            </div>
        </header>
    );
}

export default Header;