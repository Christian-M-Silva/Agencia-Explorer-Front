import React, { Component } from 'react'
import UsuarioService from '../../services/UsuarioService'
import Header from '../../components/header'
import Footer from '../../components/footer'

class ViewUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            usuario: {}
        }
    }

    componentDidMount(){
        UsuarioService.getUsuarioById(this.state.id).then( res => {
            this.setState({usuario: res.data});
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Ver Detalhes dos Usuarios</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nome: </label>
                            <div> { this.state.usuario.nomeUsuario }</div>
                        </div>
                        <div className = "row">
                            <label> E-mail: </label>
                            <div> { this.state.usuario.emailUsuario }</div>
                        </div>
                        <div className = "row">
                            <label> Senha: </label>
                            <div> { this.state.usuario.senhaUsuario }</div>
                        </div>
                        <div className = "row">
                            <label> Telefone: </label>
                            <div> { this.state.usuario.telefoneUsuario }</div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default ViewUsuarioComponent