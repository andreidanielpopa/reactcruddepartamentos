import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'

export default class UpdateDepartamento extends Component {
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaLocalidad = React.createRef();

    state = {
        status: false
    }

    updateDepartamento = (e) => {
        e.preventDefault();

        let id = parseInt(this.cajaId.current.value);
        let nombre = this.cajaNombre.current.value;
        let localidad = this.cajaLocalidad.current.value;

        let departamento = {
            numero: id,
            nombre: nombre,
            localidad: localidad
        }

        let request = 'api/departamentos'
        let url = Global.urlApiDepartamentos + request;

        axios.put(url, departamento).then(response => {
            this.setState({
                status: true
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.status === true &&
                    (<Navigate to='/' />)
                }
                <h1>Update Departamento</h1>
                <form>
                    <form>
                        <label>Id Departamento</label>
                        <input className='form-control' type='text' ref={this.cajaId} defaultValue={this.props.id} disabled/>
                        <label>Nombre</label>
                        <input className='form-control' type='text' ref={this.cajaNombre} defaultValue={this.props.nombre} />
                        <label>Localidad</label>
                        <input className='form-control' type='text' ref={this.cajaLocalidad} defaultValue={this.props.localidad} />
                        <button className='btn btn-success' onClick={this.updateDepartamento}>Update Departamento</button>
                    </form>
                </form>
            </div>
        )
    }
}
