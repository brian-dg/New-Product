import React,{useState,useEffect,useContext} from 'react';
import { FirebaseContext } from '../firebase';

const useProduct = orden => {

const [products, saveProducts] = useState([]);
  const {firebase} = useContext(FirebaseContext);

  useEffect(() => {
    const getProduct = () => {
      firebase.db.collection('productos').orderBy(orden,'desc').onSnapshot(manejarSnapshot)
      
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
    return {
      products
    }
}

export default useProduct;