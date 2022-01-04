import React, { useContext } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FirebaseContext } from '../../firebase';

const Navigation = () => { 
    const {user} = useContext(FirebaseContext);
    return(
        <nav className="navbar navbar-light bg-white px-3 ">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link "> Inicio </a>
                    </Link>
                        
                    </li>

                    <li className="nav-item">
                   <Link href="/populares">
                       <a className="nav-link"> Populares</a>                   
                   </Link>
                        
                    </li>
        {user && (
                    <li className="nav-item">
                    <Link href="/new-products">
                        <a className="nav-link"> Nuevo Producto </a>
                    </Link>                        
                    </li>
                    )}

                </ul>
            </div>

            
            
            
        </nav>
    );
}

export default Navigation; 