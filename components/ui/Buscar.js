import React from 'react'; 

const Buscar = () => {
    return(
        <form className="navbar ">
            <div className="input-group collapse navbar-collapse">
                <input type="text" className="form-control rounded form-control-sm" placeholder="Buscar Productos" aria-label="Search"
                aria-describedby="search-addon" />
                <button type="submit" className="btn btn-sm btn-outline-primary "><i className="fas fa-search"></i> buscar</button>
            </div>
        </form>
    );
}

export default Buscar;