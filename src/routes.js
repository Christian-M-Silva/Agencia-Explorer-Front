import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Destinos from './pages/Destinos';
import Promocoes from './pages/Promocoes';
import Contato from './pages/Contato';
import Adm from './pages/Adm';

import ListOrigemComponent from './pages/Origem/ListOrigemComponent';
import CreateOrigemComponent from './pages/Origem/CreateOrigemComponent';
import ViewOrigemComponent from './pages/Origem/ViewOrigemComponent';

import ListDestinoComponent from './pages/Destino/ListDestinoComponent';
import CreateDestinoComponent from './pages/Destino/CreateDestinoComponent';
import ViewDestinoComponent from './pages/Destino/ViewDestinoComponent';

import ListUsuarioComponent from './pages/Usuario/ListUsuarioComponent';
import CreateUsuarioComponent from './pages/Usuario/CreateUsuarioComponent';
import ViewUsuarioComponent from './pages/Usuario/ViewUsuarioComponent';

function Routes() {
  return (
    <div>
        <Router>
            <div className="container">
                <Switch> 
                    {/*  Route das Paginas */}
                    <Route path="/" exact component = {Home}></Route>
                    <Route path="/destinos" component = {Destinos}></Route>
                    <Route path="/contato" component = {Contato}></Route>
                    <Route path="/promocoes" component = {Promocoes}></Route>
                    <Route path="/adm" component = {Adm}></Route>

                    {/*  Route da Origem */}
                    <Route path = "/origem" exact component = {ListOrigemComponent}></Route>
                    <Route path = "/add-origem/:id" component = {CreateOrigemComponent}></Route>
                    <Route path = "/ver-origem/:id" component = {ViewOrigemComponent}></Route>

                    {/*  Route do Destino */}
                    <Route path = "/destino" component = {ListDestinoComponent}></Route>
                    <Route path = "/add-destino/:id" component = {CreateDestinoComponent}></Route>
                    <Route path = "/ver-destino/:id" component = {ViewDestinoComponent}></Route>

                     {/*  Route do Usuario */}
                     <Route path = "/usuario" component = {ListUsuarioComponent}></Route>
                    <Route path = "/add-usuario/:id" component = {CreateUsuarioComponent}></Route>
                    <Route path = "/ver-usuario/:id" component = {ViewUsuarioComponent}></Route>
                </Switch>
            </div>
        </Router>
    </div>
    
  );
}

export default Routes;