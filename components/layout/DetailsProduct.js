import React from 'react';
import Link from 'next/link';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';


const DetailsProduct = ({product}) => {
    console.log(product)
    const {id,comentarios,creado,descripcion,empresa,name,url,urlImage,votos} = product;
    return (
        <div className="card col-10 px-auto mx-auto">
            <div className="row gx-5">

                <div className="col-2 mx-auto d-block my-auto">
                    <div className="col-12 mx-auto d-block my-auto">                     
                        <img className="card-img col-12"src={urlImage} alt="" />
                    </div>
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <Link href="/products/[id]" as={`/products/${id} `}>
                            <h3 className="card-title">{name}</h3>
                        </Link>
                        <p className="card-text">{descripcion}</p>
                        <p >Publicado hace: {formatDistanceToNow( new Date(creado), {locale: es} )} </p>                       
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetailsProduct;

