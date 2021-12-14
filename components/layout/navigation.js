import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const Navigation = () => { 
    return(
        <nav className="navbar navbar-light bg-white px-3 ">
            <div className="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a class="nav-link " href="#"><Link href="/"> Inicio</Link></a>
                        
                    </li>

                    <li className="nav-item">
                    <a class="nav-link" href="#"><Link href="/populares"> Populares</Link></a>
                        
                    </li>

                    <li className="nav-item">
                    <a class="nav-link" href="#"><Link href="/new-products"> Nuevo Producto</Link></a>
                        
                    </li>

                </ul>
            </div>

            
            
            
        </nav>
    );
}

export default Navigation; 