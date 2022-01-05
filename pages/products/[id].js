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
    const [consultarDB,saveConsultarDB] = useState(true);

    //routing para obtener el id actual 
    const router = useRouter();
    const {query: { id }} = router;

    const {firebase, user} = useContext(FirebaseContext); 
    useEffect (() =>{
        if(id && consultarDB) {
            const getProduct = async () => {
                const productQuery = await firebase.db.collection('productos').doc(id);
                const product = await productQuery.get();
                if(product.exists) {
                    saveConsultarDB(false);
                    saveProduct( product.data() );
                  
                 } else {
                    saveError(true);   
                    saveConsultarDB(false);             
                 }
            }
            getProduct();
        }
    }, [id])

    if(Object.keys(product).length === 0 && !error) return 'Cargando...';
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
        saveConsultarDB(false);  
          
    }

         //Funciones para crear comentarios 
      
        const commentChanges = e => {
            saveComment({
                ...comentarios,
                [e.target.name] : e.target.value
            })
        }
       
        //Identifica si el comentario es del creador del producto
        const esCreador = id => {
            if(creador.id == id) {
                return true;
            }
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
                saveProduct({
                    ...product,
                    comentarios: newComments
                })
         saveConsultarDB(false);  
        }
    
        //Funcion que revisa qe el creador del producto sea el mismo que el que esta autenticado.
        const prevDelete = () => {
            if(!user) return false;
            if(creador.id === user.uid) {
                return true;
            }
        }

        //Elimina el producto  de la bd
        const deleteProduct = async () => {
            if(!user) {
                router.push('/login');
            }

            if(creador.id !== user.uid) {
                return true;
            }

            try {
                await firebase.db.collection('productos').doc(id).delete();
                router.push('/')
            } catch (error) {
                console.log(error);
            }
        }
    return(
        <Layout>
            <>
            {error ? <Error404/> : (
                <div className='container'>
                <h1>{name}</h1>

                <div className='container row justify-content-between'>
                    <div className='col-6'>
                        <p> Publicado hace: {formatDistanceToNow(new Date(creado), {locale: es})} </p> 
                        <p>Creado por: {creador.name} de {empresa}</p>
                        <img className='col-12' src={urlImage} />
                        <p>{descripcion} </p>
                        
                        
                        {user && (
                            <>
                                <h2>Agregue tu comentario</h2>
                                    <form
                                        onSubmit={addComment}
                                     >
                                       
                                        <input
                                            className="col-12 "
                                            type="text"
                                            name="message"
                                            onChange={commentChanges}
                                        /> 
                                        
                                        <input type="submit" className="mt-3 col-12 text-center btn btn-danger" value="agregarComentario" />
                                    </form>
                            </>
                        )}

                        <h2>Comentarios</h2>


                        {comentarios.length === 0 ? "Aun no hay comentarios" :

                            <div>
                                {comentarios.map((comentario,i) =>
                                <div key={` ${comentario.userId}-${i} `} className="row">
                                    <div className="col-sm-12">
                                        <div className="card">
                                            <div className="card-body">

                                                <li
                                                    
                                                >
                                                        <p>{comentario.message}</p>
                                                        
                                                        <p> Escrito por: <strong>{comentario.userNombre} </strong> </p>
                                                        {esCreador(comentarios.userId) && <p className='btn-sm bg-dark' >Es Creador</p>}
                                                </li> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                            </div> 
                        }
                      
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
                {prevDelete() && 
                    <button className='btn btn-danger m-3 col-6' onClick={deleteProduct}>Eliminar Producto</button>
                }                
                </div>
            </div>
            ) }
                
            </>
        </Layout>
        
    );
}

export default Products;