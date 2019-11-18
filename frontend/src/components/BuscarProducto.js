import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BuscarProducto extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body text-center bg-info text-dark">
                        Buscar producto
                    </div>
                    <Link className="nav-link btn btn-info mt-4" to="/Inventario"> Volver </Link>
                </div>
                <div className="col-md-8">
                    aqui estara la tabla
                </div>
            </div>
        )
    }
}
