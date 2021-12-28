import React, {useEffect,useContext,useState} from 'react';
import { useRouter } from 'next/router';
import {FirebaseContext} from '../../firebase';
import firebases from '../../firebase/firebase';
import Error404 from '../../components/layout/404';
import Layout from '../../components/layout/Layout'
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

   
    return(
        <Layout>
            <>
            {error && <Error404/>}
            </>
        </Layout>
        
    );
}

export default Products;