import React,{useState}from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';

import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validacion/validateCreateAccount';

import firebase from '../firebase';

const STATE_INICIAL = {
  name: '',
  empresa: '',
  imagen: '',
  url: '',
  descripcion: ''
}

const NewProducts = () =>  {
  const [error, saveError] = useState(false);

 const {values,errors,handleSubmit,handleChange,handleBlur} = useValidation
 (STATE_INICIAL,validateCreateAccount,createAccount);
 
const {name,empresa,imagen,url,descripcion} = values;

return (
    <div>
      <Layout>
        <>
        <div className="col-12 text-center">  
          
          <h1 className='mb-5'>Nuevo producto</h1>
          <div class="d-flex justify-content-center align-items-center container  ">

              <form onSubmit={handleSubmit} className="col-6 form-horizontal">

              <fieldset>
                <legend>Informacion</legend>
                
                  <div class="form-group row m-2">
                    <label htmlFor="nombre" class="col-sm-2 col-form-label ">Nombre</label>
                    <div class="col-sm-10">
                      <input
                          type="text"
                          id="name"
                          name="name"
                          class="form-control"
                          placeholder="Tu Nombre"
                          value={name}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.name && <div class="alert-danger my-2 py-2" role="alert"> {errors.name} </div>}
                      
                    </div>
                  </div>

                  <div class="form-group row m-2">
                    <label htmlFor="empresa" class="col-sm-2 col-form-label ">Empresa</label>
                    <div class="col-sm-10">
                      <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          class="form-control"
                          placeholder="Nombre de empresa o compañia"
                          value={empresa}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.empresa && <div class="alert-danger my-2 py-2" role="alert"> {errors.empresa} </div>}                    
                    </div>
                  </div>
                  
                  <div class="form-group row m-2">
                    <label htmlFor="empresa" class="col-sm-2 col-form-label ">Imagen</label>
                    <div class="col-sm-10">
                      <input
                          type="file"
                          id="imagen"
                          name="imagen"
                          class="form-control"
                          value={imagen}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.imagen && <div class="alert-danger my-2 py-2" role="alert"> {errors.imagen} </div>}                    
                    </div>
                  </div>

                  <div class="form-group row m-2">
                    <label htmlFor="empresa" class="col-sm-2 col-form-label ">Imagen</label>
                    <div class="col-sm-10">
                      <input
                          type="file"
                          id="imagen"
                          name="imagen"
                          class="form-control"
                          value={imagen}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.imagen && <div class="alert-danger my-2 py-2" role="alert"> {errors.imagen} </div>}                    
                    </div>
                  </div>

                  <div class="form-group row m-2">
                    <label htmlFor="url" class="col-sm-2 col-form-label ">URL</label>
                    <div class="col-sm-10">
                      <input
                          type="url"
                          id="url"
                          name="url"
                          class="form-control"
                          value={url}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.url && <div class="alert-danger my-2 py-2" role="alert"> {errors.url} </div>}                    
                    </div>
                  </div>
              
              </fieldset>

              <fieldset>
                <legend>Sobre tu producto</legend>

                <div class="form-group row m-2">
                    <label htmlFor="descripcion" class="col-sm-2 col-form-label ">Descripcion</label>
                    <div class="col-sm-10">
                      <textarea                          
                          id="descripcion"
                          name="descripcion"
                          class="form-control"
                          value={descripcion}
                          onChange={handleChange}
                          onBlur={handleBlur}                       
                        />                      
                          {errors.descripcion && <div class="alert-danger my-2 py-2" role="alert"> {errors.descripcion} </div>}                    
                    </div>
                  </div>

              </fieldset>


                {error && <div class="alert-danger mt-3 pl-2 pl-2" role="alert"> {error} </div>}

                <input type="submit" class="mt-3 col-11 text-center btn btn-danger" value="Crear Cuenta" />
              
              </form>            
          </div>
        </div>
        </>
      </Layout>
    </div>
  )
}
export default NewProducts; 