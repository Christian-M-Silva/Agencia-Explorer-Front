import React, { Component } from 'react'
import UsuarioService from '../../services/UsuarioService';
import Header from '../../components/header'
import Footer from '../../components/footer'

class CreateUsuarioComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nomeUsuario: '',
            emailUsuario: '',
            senhaUsuario: '',
            telefoneUsuario: ''
        }
        this.changeNomeUsuarioHandler = this.changeNomeUsuarioHandler.bind(this);
        this.changeEmailUsuarioHandler = this.changeEmailUsuarioHandler.bind(this);
        this.changeSenhaUsuarioHandler = this.changeSenhaUsuarioHandler.bind(this);
        this.changeTelefoneUsuarioHandler = this.changeTelefoneUsuarioHandler.bind(this);
        this.saveOrUpdateUsuario = this.saveOrUpdateUsuario.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4 - Algo relacionado ao update, ao selecionar no botao update ele retorna os dados nos inputs para alterar
        if(this.state.id === '_add'){
            return
        }else{
            UsuarioService.getUsuarioById(this.state.id).then( (res) =>{
                let usuario = res.data;
                this.setState
                ({
                    nomeUsuario: usuario.nomeUsuario,
                    emailUsuario: usuario.emailUsuario,
                    senhaUsuario : usuario.senhaUsuario,
                    telefoneUsuario : usuario.telefoneUsuario
                });
            });
        }        
    }
    saveOrUpdateUsuario = (e) => {
        e.preventDefault();
        let usuario = {nomeUsuario: this.state.nomeUsuario, emailUsuario: this.state.emailUsuario, senhaUsuario: this.state.senhaUsuario, telefoneUsuario: this.state.telefoneUsuario};
        console.log('usuario => ' + JSON.stringify(usuario));

        // step 5
        if(this.state.id === '_add'){
            UsuarioService.createUsuario(usuario).then(res =>{
                this.props.history.push('/usuario');
            });
        }else{
            UsuarioService.updateUsuario(usuario, this.state.id).then( res => {
                this.props.history.push('/usuario');
            });
        }
    }
    
    changeNomeUsuarioHandler= (event) => {
        this.setState({nomeUsuario: event.target.value});
    }

    changeEmailUsuarioHandler= (event) => {
        this.setState({emailUsuario: event.target.value});
    }

    changeSenhaUsuarioHandler= (event) => {
        this.setState({senhaUsuario: event.target.value});
    }

    changeTelefoneUsuarioHandler= (event) => {
        this.setState({telefoneUsuario: event.target.value});
    }

    cancel(){
        this.props.history.push('/usuario');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Usuario</h3>
        }else{
            return <h3 className="text-center">Atualizar Usuario</h3>
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "table">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Nome:" name="nomeUsuario" className="form-control" 
                                                value={this.state.nomeUsuario} onChange={this.changeNomeUsuarioHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="E-mail:" name="emailUsuario" className="form-control" 
                                                value={this.state.emailUsuario} onChange={this.changeEmailUsuarioHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Senha:" name="senhaUsuario" className="form-control" 
                                                value={this.state.senhaUsuario} onChange={this.changeSenhaUsuarioHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Telefone:" name="telefoneUsuario" className="form-control" 
                                                value={this.state.telefoneUsuario} onChange={this.changeTelefoneUsuarioHandler}/>
                                        </div>

                                        <button className="btn-adm ad" onClick={this.saveOrUpdateUsuario}>Salvar</button>
                                        <button className="btn-adm del" onClick={this.cancel.bind(this)}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   <Footer/>
            </div>
        )
    }
}

export default CreateUsuarioComponent