import React from 'react'; 

const Buscar = () => {
    return(
        <form className="navbar ">
            <div class="input-group collapse navbar-collapse">
                <input type="text" class="form-control rounded form-control-sm" placeholder="Buscar Productos" aria-label="Search"
                aria-describedby="search-addon" />
                <button type="submit" class="btn btn-sm btn-outline-primary "><i class="fas fa-search"></i> buscar</button>
            </div>
        </form>
    );
}

export default Buscar;