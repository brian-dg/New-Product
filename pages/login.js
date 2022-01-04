import React,{useState}from 'react';
import Layout from '../components/layout/Layout';
import Router from 'next/router';

import useValidation from '../hooks/useValidation';
import validateLogin from '../validacion/validateLogin';

import firebase from '../firebase';

const STATE_INICIAL = {
  email: '',
  password: ''
}


const Login = () => {
  const [error, saveError] = useState(false);

 const {values,errors,handleSubmit,handleChange,handleBlur} = useValidation
 (STATE_INICIAL,validateLogin,login);
 
const {email,password} = values;

   async function login() {

    try {
     await firebase.login(email,password);  
     Router.push('/');
    } catch(error) {
      console.error('hubo un error al auntenticar el usuario', error.message);
      saveError(error.message); 
    }
  }
  
  return (
    <div>
      <Layout>
        <>
        <div className="col-12 text-center">  
          
          <h1 className='mb-5'>Iniciar Sesion</h1>
          <div className="d-flex justify-content-center align-items-center container  ">

              <form onSubmit={handleSubmit} className="col-6 form-horizontal">
               
                <div className="form-group row m-2">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input
                        type="email"
                        id="email" 
                        name="email" 
                        className="form-control" 
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        onBlur={handleBlur}                             
                    />                   
                      {errors.email && <div className="alert-danger my-2 py-2" role="alert">{errors.email} </div>}
                    
                  </div>
                </div>
                

                <div className="form-group row m-2">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input 
                        type="password" 
                        className="form-control" 
                        name='password' 
                        id="password" 
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                        onBlur={handleBlur}      
                        
                    /> 
                      {errors.password && <div className="alert-danger my-2 py-2" role="alert"> {errors.password} </div>}
                      
                  </div>              
                </div>
                {error && <div className="alert-danger mt-3 pl-2 pl-2" role="alert"> {error} </div>}

                <input type="submit" className="mt-3 col-11 text-center btn btn-danger" value="Iniciar Sesion" />

              </form>            
          </div>
        </div>
        </>
      </Layout>
    </div>
  )
}

export default Login; 