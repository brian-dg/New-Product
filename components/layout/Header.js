import React from 'react';
import Buscar from '../ui/Buscar';
import Navigation from './navigation';

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
                    {/*Menu de Administracion*/}
                </div>

            </div>
        </header>
    );
}

export default Header;