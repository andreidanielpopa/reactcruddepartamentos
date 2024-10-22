import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate } from 'react-router-dom'

export default class DeleteDepartamento extends Component {
    state = {
        borrado: false,
    }

    deleteDepartamento = () => {
        let idDepartamento = parseInt(this.props.id);
        let request = 'api/departamentos/' + idDepartamento;
        let url = Global.urlApiDepartamentos + request;

        axios.delete(url).then(response => {
            this.setState({
                borrado: true,
            })
        })
    }

    render() {
        return (
            <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
