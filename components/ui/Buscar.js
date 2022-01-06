import React,{useState} from 'react'; 
import Router from 'next/router';

const Buscar = () => {
    const [search,saveSearch] = useState('');
 
    const searchProduct = e => {
        e.preventDefault();
        

        if(search.trim() === '') return;

        //Redireccionar a/buscar
        Router.push({
            pathname:'/search',
            query:{ q : search }
        })
    }
    return(
        <form 
            className="navbar"
            onSubmit={searchProduct}>
            <div className="input-group collapse navbar-collapse">
                <input
                    type="text"
                    className="form-control rounded form-control-sm"
                    placeholder="Buscar Productos"
                    onChange={e => saveSearch(e.target.value)} 
                    aria-label="Search"
                aria-describedby="search-addon" />
                <button type="submit" className="btn btn-sm btn-outline-primary "><i className="fas fa-search"></i> buscar</button>
            </div>
        </form>
    );
}

export default Buscar;