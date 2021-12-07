import React from 'react';
import Buscar from '../ui/Buscar';
import Navigation from './navigation';
import Link from 'next/link';

const Header = () =>{
    return(
        <header>
            <div>
                <div>
                    <p>P</p>

                    <Buscar/>

                    <Navigation/>
                </div>

                <div>
                   <p>Hola: brian</p>
                   <button type="button">Cerrar Sesion</button>
                   <Link href="/">Login</Link>
                   <Link href="/">Registrer</Link>
                </div>

            </div>
        </header>
    );
}

export default Header;