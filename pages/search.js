import React, {useEffect, useState} from 'react';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import DetallePruducto from '../components/layout/DetailsProduct';
import useProduct from '../hooks/useProduct';

const search = () => {

const router = useRouter();
const {query: { q }} = router;

//Todos los productos 
const {products} = useProduct('creado');
const [result,saveResult] = useState([]);

useEffect(() => {
   const search = q.toLowerCase(); //Pasamos a minusculas
   const filter = products.filter(products => {
     return(
      products.name.toLowerCase().includes(search) ||
      products.descripcion.toLowerCase().includes(search)
     )
      
     
   
   });
   saveResult(filter);
},[q,products]);



  return (
    <div>
      <Layout>
        <div className="listado-productos">
              <div className="contenedor">
                
                  {result.map(product => (
                    <DetallePruducto 
                        key={product.id}
                        product = {product}
                      />
                  )) }                      
                
              </div>
          </div>
      </Layout>
    </div>
  )
}
export default 
search; 