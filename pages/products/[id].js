import React, {useEffect,useContext,useState} from 'react';
import { useRouter } from 'next/router';
import {FirebaseContext} from '../../firebase';
import firebases from '../../firebase/firebase';
import Error404 from '../../components/layout/404';
import Layout from '../../components/layout/Layout'
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const Products = () => {

    //State del componente
    const [product, saveProduct] = useState({});
    const [error,saveError] = useState(false);
    //routing para obtener el id actual 
    const router = useRouter();
    const {query: {id}} = router;

    const {firebase} = useContext(FirebaseContext); 
    useEffect (() =>{
        if(id) {
            const getProduct = async () => {
                const productQuery = await firebases.db.collection('productos').doc(id);
                const product = await productQuery.get();
                if(product.exists) {
                   saveProduct(product.data() );
                }else {
                    saveError(true);
                }
            }
            getProduct();
        }
    }, [id])

    if(Object.keys(product).length === 0) return 'Cargando...';
    const {comentarios,creado,descripcion,empresa,name,url,urlImage,votos,creador} = product;
   
    return(
        <Layout>
            <>
            {error && <Error404/>}
                <div className='container'>
                    <h1>{name}</h1>

                    <div className='container row justify-content-between'>
                        <div className='col-6'>
                            <p> Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})} </p> 
                            <p>Creado por: {creador} de {empresa}</p>
                            <img src={urlImage} />
                            <p>{descripcion}</p>
                            <h2>Agregue tu comentario</h2>
                            <form>
                            <input
                            className="col-12 "
                            type="text"
                            id="message" 
                            name="message"                                                     
                            />   
                             
                            <input type="submit" className="mt-3 col-12 text-center btn btn-danger" value="agregar Comentarios" />
                            </form>
                            <h2>Comentarios</h2>
                            {comentarios.map(comentario =>
                               <li>
                                   <p>{comentario.name}</p>
                                   <p>Escrito por: {comentario.usuarioNombre}</p>
                                   
                               </li> )}
                        </div>

                        <aside className='col-4'>
                            <button className='btn btn-danger col-12 '>Visita URL</button>
                            <p className='text-center my-2'>{votos} votos</p>
                            <button className='btn btn-outline-dark bg-light text-dark col-12 '>Votar</button>
                        </aside>

                    </div>
                </div>
            </>
        </Layout>
        
    );
}

export default Products;