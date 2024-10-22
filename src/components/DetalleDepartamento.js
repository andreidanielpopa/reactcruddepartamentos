import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import loadingimg from './../assets/images/gettyimages-1442799465-640x640.jpg'

export default class DetalleDepartamento extends Component {
    state = {
        departamento: null,
    }

    findDepartamento = () => {
        let request = 'api/departamentos/' + this.props.iddepartamento;
        let url = Global.urlApiDepartamentos + request;
        axios.get(url).then(response => {
            this.setState({
                departamento: response.data,
            })
        })
    }

    componentDidMount = () => {
        this.findDepartamento();
    }


    render() {
        return (
            <div>

                {
                    this.state.departamento ?
                        (<ul className='list-group'>
                            <li className='list-group-item'>{this.state.departamento.numero}</li>
                            <li className='list-group-item'>{this.state.departamento.nombre}</li>
                            <li className='list-group-item'>{this.state.departamento.localidad}</li>
                        </ul>):
                        (<img src={loadingimg} alt='loading'></img>)
                }
            </div>
        )
    }
}
