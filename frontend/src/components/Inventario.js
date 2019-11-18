import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class Inventario extends Component {

    state = {
        productos: [],
        Nombre: "",
        Precio: "",
        Stock: "",
    }

    async componentDidMount() {
        this.getProductos();
    }

    getProductos = async () => {
        const res = await axios.get('http://localhost:4000/api/inventario');
        this.setState({ productos: res.data });
    }

    EliminarProducto = async (id) => {
        await axios.delete('http://localhost:4000/api/inventario/' + id);
        this.getProductos();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Link className="nav-link btn btn-info mr-2 mt-2" to="/CrearProducto"> Agregar nuevo producto </Link>
                    <Link className="nav-link btn btn-info mr-2 mt-2" to="/BuscarProducto"> Buscar un producto </Link>
                </div>
                <div className="col-md-8">
                    <div className="table-responsive">
                        <table className="table table-bordered table-info text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col" colSpan="2">Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.productos.map(producto => (
                                        <tr key={producto._id}>
                                            <td>{producto.Nombre}</td>
                                            <td>{producto.Precio}</td>
                                            <td>{producto.Stock}</td>
                                            <td><button className="btn btn-info">Modificar</button></td>
                                            <td><button className="btn btn-danger" onClick={() => this.EliminarProducto(producto._id)}>Eliminar</button></td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
