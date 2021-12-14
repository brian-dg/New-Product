import React from 'react';
import Layout from '../components/layout/Layout';

const CreateAccount = () => {
  return (
    <div>
      <Layout>
        <>
        <div className="col-12 text-center">  
          
          <h1 className='mb-5'>Crear Cuenta</h1>
          <div class="d-flex justify-content-center align-items-center container  ">

              <form className="col-6 form-horizontal">
                <div class="form-group row m-2">
                  <label for="nombre" class="col-sm-2 col-form-label ">Nombre</label>
                  <div class="col-sm-10">
                    <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Tu Nombre"/>
                  </div>
                </div>

                <div class="form-group row m-2">
                  <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                  <div class="col-sm-10">
                    <input type="email" id="email" name="email" class="form-control" placeholder="Email"/>
                  </div>
                </div>

                <div class="form-group row m-2">
                  <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                  <div class="col-sm-10">
                    <input type="password" class="form-control" id="password" placeholder="Password"/>
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