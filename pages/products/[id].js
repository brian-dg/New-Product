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
    const [comment,saveComment] = useState({});

    //routing para obtener el id actual 
    const router = useRouter();
    const {query: {id}} = router;

    const {firebase, user} = useContext(FirebaseContext); 
    useEffect (() =>{
        if(id) {
            const getProduct = async () => {
                const productQuery = await firebase.db.collection('productos').doc(id);
                const product = await productQuery.get();

                if(product.exists) {
                   
                    saveProduct( product.data() );
                  
                 } else {
                    saveError(true);                
                 }
            }
            getProduct();
        }
    }, [id,product])

    if(Object.keys(product).length === 0) return 'Cargando...';
    const {comentarios,creado,descripcion,empresa,name,url,urlImage,votos,creador,haVotado} = product;
 
    //Administrar y validar los votos 
    const votarProduct = () => {
        if(!user) {
            router.push('/login');
        }
    
  
        //Obtener y sumar votos 
        const newTotal = votos + 1 ; 

        //Verificar si el usuario actual ah votado 
        if(haVotado.includes(user.uid)) return;
        
        //Guardar el id del usuario que ah votado 
        const newHanVotado = [...haVotado,user.uid];

        //Actualizar DB
        firebase.db.collection('productos').doc(id).update({ 
            votos: newTotal, 
            haVotado: newHanVotado,
            
        })
        //Actualizar el state 
        saveProduct({
            ...product,
            votos: newTotal
        })

        //Funciones para crear comentarios 
        const comentarioChange = e => {
            saveComment({
                ...comentarios,
                [e.target.name] : e.target.value
            })
        }

        const addComment = e => {
            e.preventDefault();

            if(!user) {
                router.push('/login');
            }

            //Informacion extra del comentario 
            comment.userId = user.uid; 
            comment.userNombre = user.displayName; 

            //Tomar copia de comentarios y agregarlos al 
            const newComments = [...comentarios,comment];

            //Actualizar bd 
                firebase.db.collection('productos').doc(id).update({ 
                    comentarios: newComments,                                    
            })
             //Actualizar el state 
                saveComment({
                    ...comentarios,
                    comentarios: newComments
                })
        }
    }
    return(
        <Layout>
            <>
            {error && <Error404/>}
                <div className='container'>
                    <h1>{name}</h1>

                    <div className='container row justify-content-between'>
                        <div className='col-6'>
                            <p> Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})} </p> 
                            <p>Creado por: {creador.name} de {empresa}</p>
                            <img className='col-12' src={urlImage} />
                            <p>{descripcion}</p>
                            
                            {user && (
                                <>
                                    <h2>Agregue tu comentario</h2>
                                        <form
                                         onSubmit={addComment}
                                         >
                                            <input
                                            className="col-12 "
                                            type="text"
                                            id="message" 
                                            name="message"
                                            onChange={comentarioChange}                                                     
                                            />   
                                            
                                            <input type="submit" className="mt-3 col-12 text-center btn btn-danger" value="agregar Comentarios" />
                                        </form>
                                </>
                            )}

                            <h2>Comentarios</h2>
                          <ul>
                            {comentarios.map(comentario =>
                               <li>
                                   <p>{comentario.message}</p>
                                   <p>Escrito por: {comentario.usuarioNombre}</p>
                                   
                               </li> )}
                          </ul>
                        </div>

                        <aside className='col-4'>
                            <button className='btn btn-danger my-2 col-12 '>Visita URL</button>
                            <p className='text-center my-2'>{votos} votos</p>
                            {user && (
                                <>
                                    <button onClick={votarProduct} className='btn btn-outline-dark bg-light text-dark col-12  my-2'>Votar</button>
                                </>
                            )}
                           
                        </aside>

                    </div>
                </div>
            </>
        </Layout>
        
    );
}

export default Products;