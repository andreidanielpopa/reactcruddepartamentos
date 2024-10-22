import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingimg from './../assets/images/gettyimages-1442799465-640x640.jpg'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
    state = {
        status: false,
        departamentos: [],
    }

    loadDepartamentos = () => {
        let request = 'api/departamentos';
        let url = Global.urlApiDepartamentos + request;

        axios.get(url).then(response => {
            this.setState({
                departamentos: response.data,
                status: true,
            })
        })
    }

    componentDidMount = () => {
        this.loadDepartamentos();
    }

    render() {
        if (this.state.status === false) {
            return (<img src={loadingimg} alt='loading' />)
        } else {
            return (
                <div>
                    <h1>Home de la oficina</h1>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Id Departamento</th>
                                <th>Nombre</th>
                                <th>Localidad</th>
                                <th>Detalles</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.departamentos.map((departamento, index) => {
                                    return (<tr key={index}>
                                        <td>{departamento.numero}</td>
                                        <td>{departamento.nombre}</td>
                                        <td>{departamento.localidad}</td>
                                        <td>
                                            <NavLink to={'/detalles/' + departamento.numero} className='btn btn-info'>Detalles</NavLink>
                                        </td>
                                        <td>
                                            <NavLink to={'/update/' + departamento.numero + '/' + departamento.nombre + '/' + departamento.localidad} className='btn btn-success'>Update</NavLink>
                                        </td>
                                        <td><NavLink className='btn btn-danger' to={'/delete/'+ departamento.numero }>Delete</NavLink></td>
                                    </tr>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            )
        }

    }
}
