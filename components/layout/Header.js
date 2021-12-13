import React from 'react';
import Buscar from '../ui/Buscar';
import Navigation from './navigation';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () =>{
    return(
        <header className="container ">
            <div className="justify-content-between d-flex collapse navbar-collapse navbar-expand-lg ">
                <div className="d-flex "  >
                    <span className="navbar navbar-brand mb-0  h1 d-flex ">P</span>
                        <Buscar/>
                        <Navigation/>
                </div>

                <div className="d-flex align-items-center m-1 ">
                   <p className="text-center mt-3 p-2 ">Hola: brian</p>

                   <button type="button" className=" btn btn-sm btn-danger">Cerrar Sesion</button>
                   
                </div>

            </div>
        </header>
    );
}

export default Header;