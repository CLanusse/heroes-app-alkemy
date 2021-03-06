import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const {dispatch} = useContext(AuthContext)
    const history = useHistory()

    const handleLogout = () => {
        dispatch({
            type: types.logout
        })

        history.replace('/login')
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                HeroesApp
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <div className="navbar-nav ">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-center ml-2 mr-2" 
                        exact to="/"
                    >
                        My Super Team
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-center ml-2 mr-2" 
                        exact to="/search"
                    >
                        Search
                    </NavLink>

                    <button 
                        className="btn btn-primary m-auto"                         
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>

        
            
        </nav>
    )
}