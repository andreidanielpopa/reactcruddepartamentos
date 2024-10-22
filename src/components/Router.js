import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './Home'
import CreateDepartamentos from './CreateDepartamentos'
import MenuDepartamentos from './MenuDepartamentos'
import DetalleDepartamento from './DetalleDepartamento'
import UpdateDepartamento from './UpdateDepartamento'
import DeleteDepartamento from './DeleteDepartamento'


export default class Router extends Component {
    render() {
        function DetalleDepartamentoElement() {
            let {iddepartamento} = useParams();
            return(<DetalleDepartamento iddepartamento={iddepartamento}/>)
        }
        function UpdateDepartamentoElemnt() {
            let {id, nombre, localidad} = useParams();
            return(<UpdateDepartamento id={id} nombre={nombre} localidad={localidad}/>)
        }
        function DeleteDepartamentoeElement() {
            let {id} = useParams();
            return(<DeleteDepartamento id={id}/>)
        }
        return (
            <BrowserRouter>
                <MenuDepartamentos />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<CreateDepartamentos />} />
                    <Route path='/detalles/:iddepartamento' element={<DetalleDepartamentoElement />} />
                    <Route path='/update/:id/:nombre/:localidad' element={<UpdateDepartamentoElemnt />} />
                    <Route path='/delete/:id' element={<DeleteDepartamentoeElement />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
