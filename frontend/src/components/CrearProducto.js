import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class CrearProducto extends Component {
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

    onChangeProductoNombre = (e) => {
        this.setState({
            Nombre: e.target.value
        })
    }
    onChangeProductoPrecio = (e) => {
        this.setState({
            Precio: e.target.value
        })
    }
    onChangeProductoStock = (e) => {
        this.setState({
            Stock: e.target.value
        })
    }

    onSubmit = async e => {
        await axios.post('http://localhost:4000/api/inventario', {
            Nombre: this.state.Nombre,
            Precio: this.state.Precio,
            Stock: this.state.Stock
        });
        e.preventDefault();
    }

    EliminarProducto = async (id) => {
        await axios.delete('http://localhost:4000/api/inventario/' + id);
        this.getProductos();
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body text-center bg-info text-dark">
                        <h3>Crear nuevo producto</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group p-4">
                                <input type="text" className="form-control" placeholder="Ingrese nombre" onChange={this.onChangeProductoNombre} />
                                <input type="text" className="form-control" placeholder="Ingrese precio" onChange={this.onChangeProductoPrecio} />
                                <input type="text" className="form-control" placeholder="Ingrese stock" onChange={this.onChangeProductoStock} />
                            </div>
                            <button type="submit" className="btn btn-dark btn-lg btn-block">
                                Guardar producto
                            </button>
                        </form>
                    </div>
                    <Link className="nav-link btn btn-info mt-4" to="/Inventario"> Volver </Link>
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
    } // end render
} // end component
