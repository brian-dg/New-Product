import React from 'react';
import Header from './Header';
import {Global,css} from '@emotion/core'; 

const Layout = props =>{
    return (
     <>
     <Global
        styles={css`
            :root {
                --gris:#3d3d3d3d;
                --gris2:#6F6F6F;
                --naranja:#DA552F;
            } 
        html {
            font-size:62.5%;
            box-size: border-box;
        }
        
        `

        }
     />
       <Header/>
        <main>
            {props.children}
        </main>
     </>
  )
}

export default Layout;