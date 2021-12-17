import React,{useState}from 'react';
import Layout from '../components/layout/Layout';

import useValidation from '../hooks/useValidation';
import validateCreateAccount from '../validacion/validateCreateAccount';

import firebase from '../firebase';

const STATE_INICIAL = {
  name: '',
  email: '',
  password: ''
}


const CreateAccount = () => {
 const {values,error,handleSubmit,handleChange,handleBlur} = useValidation
 (STATE_INICIAL,validateCreateAccount,createAccount);
 
const {name,email,password} = values;

  async function createAccount() { 
    try {
      await firebase.registrar(name,email,password);
    } catch(error) {
      console.error('hubo un error al crear el usuario', error);      
    } 
  }
  
  return (
    <div>
      <Layout>
        <>
        <div className="col-12 text-center">  
          
          <h1 className='mb-5'>Crear Cuenta</h1>
          <div class="d-flex justify-content-center align-items-center container  ">

              <form onSubmit={handleSubmit} className="col-6 form-horizontal">
                <div class="form-group row m-2">
                  <label for="nombre" class="col-sm-2 col-form-label ">Nombre</label>
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
                        {error.name && <div class="alert-danger my-2 py-2" role="alert"> {error.name} </div>}
                     
                  </div>
                </div>
                
                

                <div class="form-group row m-2">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input
                        type="email"
                        id="email" 
                        name="email" 
                        class="form-control" 
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}                             
                    />                   
                      {error.email && <div class="alert-danger my-2 py-2" role="alert">{error.email} </div>}
                    
                  </div>
                </div>
                

                <div class="form-group row m-2">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-10">
                    <input 
                        type="password" 
                        class="form-control" 
                        name='password' 
                        id="password" 
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        onBlur={handleBlur}      
                        
                    /> 
                      {error.password && <div class="alert-danger my-2 py-2" role="alert"> {error.password} </div>}
                  </div>              
                </div>
                

                <input type="submit" class="mt-3 col-11 text-center btn btn-danger" value="Crear Cuenta" />

              </form>            
          </div>
        </div>
        </>
      </Layout>
    </div>
  )
}
export default CreateAccount; 