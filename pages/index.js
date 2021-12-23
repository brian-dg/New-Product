import Head from 'next/head'
import React, {useState,useContext,useEffect} from 'react';
import Layout from '../components/layout/Layout';
import DetallePruducto from '../components/layout/DetailsProduct';
import {FirebaseContext} from '../firebase';

const Home = () => {
  const [products, saveProducts] = useState([]);
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const getProduct = () => {
      firebase.db.collection('productos').orderBy('creado','desc').onSnapshot(manejarSnapshot)
      
    }
    getProduct();
  }, []);

  function manejarSnapshot(snapshot) {
    const products = snapshot.docs.map(doc => {
     return {
       id: doc.id,
      ...doc.data() //Traer el registro de todos los productos
    }
    });
    saveProducts(products);
   
  }
  return (
    <div>
      <Layout>
        <div className="listado-productos">
              <div className="contenedor">
                <ul className="bg-white">
                  {products.map(product => (
                    <DetallePruducto 
                        key={product.id}
                        product = {product}
                      />
                  )) }                      
                </ul>
              </div>
          </div>
      </Layout>
    </div>
  )
}
export default Home; 

