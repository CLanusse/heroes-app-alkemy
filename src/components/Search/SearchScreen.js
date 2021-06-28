import React, { useState } from 'react'
import { searchHeroes } from '../../helpers/searchHeroes';
import { HeroList } from '../Heroes/HeroList';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { Loader } from '../Loader/Loader';



export const SearchScreen = () => {

    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(false)
   
    const initialValues = { search: '' }
    const onSubmit = (values) => { 
        setLoading(true)
        searchHeroes(values.search)
            .then(res => {
                setHeroes(res)
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err
                  })
            })
            .finally(()=> setLoading(false))
    }
    const validate = (values) => {
        let errors = {}
        if (!values.search) {
            errors.search = 'Required';
        }
        return errors
    }
    
    const formik = useFormik({initialValues, onSubmit, validate})
    const {values, handleChange, handleSubmit, handleBlur, errors, touched} = formik

    return (
        <>
        { loading ? <Loader/>
            :
        <div className="container">
            <h1>¡Search your hero!</h1>
            <hr/>

            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                name="search"
                                value={values.search}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text"
                                placeholder="Find your hero"
                                className="form-control mb-2"
                                autoComplete="off"
                            />
                            {(touched.search && errors.search) ? <small className="error alert-danger">{errors.search}</small> : null}
                        </div>

                        <button
                            className="btn mt-2 btn-block btn-outline-primary"
                            type="submit"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-12 mt-5">
                    <h4>Results</h4>
                    <hr/>

                    {   (heroes.length === 0) 
                            ?
                        <div className="alert alert-info">
                            Search something
                        </div>
                            :
                        <HeroList heroes={heroes}/>
                    }
                </div>

            </div>
        </div>
    }
    </>
    )
}
