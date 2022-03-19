import React, { Component } from 'react';
import UsuarioService from '../../services/UsuarioService';
import Header from '../../components/header'
import Footer from '../../components/footer'

class ListUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                usuario: []
        }
        this.addUsuario = this.addUsuario.bind(this);
        this.editUsuario = this.editUsuario.bind(this);
        this.deleteUsuario = this.deleteUsuario.bind(this);
    }

    deleteUsuario(id){
        UsuarioService.deleteUsuario(id).then( res => {
            this.setState({usuario: this.state.usuario.filter(usuario => usuario.id !== id)});
        });
    }
    viewUsuario(id){
        this.props.history.push(`/ver-usuario/${id}`);
    }
    editUsuario(id){
        this.props.history.push(`/add-usuario/${id}`);
    }

    componentDidMount(){
        UsuarioService.getUsuario().then((res) => {
            this.setState({ usuario: res.data});
        });
    }

    addUsuario(){
        this.props.history.push('/add-usuario/_add');
    }

    render() {
        return (
            <div>
                <Header/>
                 <h2 className="text-center">Lista de Usuarios</h2>
                 <div className = "row">
                    <button className="btn-adm ad" onClick={this.addUsuario}> Adicionar Usuario</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table">

                            <thead>
                                <tr>
                                    <th> Nome</th>
                                    <th> E-mail</th>
                                    <th> Senha</th>
                                    <th> Telefone</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.usuario.map(
                                        usuario => 
                                        <tr key = {usuario.id}>
                                             <td> {usuario.nomeUsuario}</td>   
                                             <td> {usuario.emailUsuario}</td>
                                             <td> {usuario.senhaUsuario}</td>
                                             <td> {usuario.telefoneUsuario}</td>
                                             <td>
                                                 <button className="btn-adm ad" onClick={ () => this.editUsuario(usuario.id)} >Atualizar </button>
                                                 <button className="btn-adm del" onClick={ () => this.deleteUsuario(usuario.id)} >Deletar </button>
                                                 <button className="btn-adm" onClick={ () => this.viewUsuario(usuario.id)} >Visualizar </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                <Footer/>
            </div>
        )
    }
}

export default ListUsuarioComponent