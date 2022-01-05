import Head from 'next/head'
import React from 'react';
import Layout from '../components/layout/Layout';
import DetallePruducto from '../components/layout/DetailsProduct';

import useProduct from '../hooks/useProduct';

const Home = () => {
  const {products} = useProduct('creado');
  return (
    <div>
      <Layout>
        <div className="listado-productos">
              <div className="contenedor">
                
                  {products.map(product => (
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
export default Home; 

