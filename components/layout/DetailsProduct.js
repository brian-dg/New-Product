import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const DetailsProduct = ({product}) => {
    console.log(product)
    const {comentarios,creado,descripcion,empresa,id,name,url,urlImage,votos} = product;
    return (
        <h1>Productos</h1>
    );
}

export default DetailsProduct;

{/*div class="card" style="width: 500px;">
            <div class="row no-gutters">
            <div class="col-sm-5">
                <img class="card-img"src={urlImage} alt="" />
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{descripcion}</p>
                        <p >Publicado hace: {formatDistanceToNow( new Date(creado), {locale: es} )} </p>
                    </div>
                </div>
            </div>
        </div>
    
//git//*/}