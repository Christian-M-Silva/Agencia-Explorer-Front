import React, { Component } from 'react'
import OrigemService from '../../services/OrigemService'
import Header from '../../components/header'
import Footer from '../../components/footer'

class CreateOrigemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            origemPais: '',
            origemCidade: '',
            valor: ''
        }
        this.changeOrigemPaisHandler = this.changeOrigemPaisHandler.bind(this);
        this.changeOrigemCidadeHandler = this.changeOrigemCidadeHandler.bind(this);
       this.changeValorHandler = this.changeValorHandler.bind(this);
        this.saveOrUpdateOrigem = this.saveOrUpdateOrigem.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4 - Algo relacionado ao update, ao selecionar no botao update ele retorna os dados nos inputs para alterar
        if(this.state.id === '_add'){
            return
        }else{
            OrigemService.getOrigemById(this.state.id).then( (res) =>{
                let origem = res.data;
                this.setState
                ({
                    origemPais: origem.origemPais,
                    origemCidade: origem.origemCidade,
                    valor : origem.valor
                });
            });
        }        
    }
    saveOrUpdateOrigem = (e) => {
        e.preventDefault();
        let origem = {origemPais: this.state.origemPais, origemCidade: this.state.origemCidade, valor: this.state.valor};
        console.log('origem => ' + JSON.stringify(origem));

        // step 5
        if(this.state.id === '_add'){
            OrigemService.createOrigem(origem).then(res =>{
                this.props.history.push('/origem');
            });
        }else{
            OrigemService.updateOrigem(origem, this.state.id).then( res => {
                this.props.history.push('/origem');
            });
        }
    }
    
    changeOrigemPaisHandler= (event) => {
        this.setState({origemPais: event.target.value});
    }

    changeOrigemCidadeHandler= (event) => {
        this.setState({origemCidade: event.target.value});
    }

    changeValorHandler= (event) => {
        this.setState({valor: event.target.value});
    }

    cancel(){
        this.props.history.push('/origem');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Origem</h3>
        }else{
            return <h3 className="text-center">Atualizar Origem</h3>
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
                                <br></br>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Pais:" name="origemPais" className="form-control" 
                                                value={this.state.origemPais} onChange={this.changeOrigemPaisHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Cidade:" name="origemCidade" className="form-control" 
                                                value={this.state.origemCidade} onChange={this.changeOrigemCidadeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Valor:" name="valor" className="form-control" 
                                                value={this.state.valor} onChange={this.changeValorHandler}/>
                                        </div>

                                        <button className="btn-adm ad" onClick={this.saveOrUpdateOrigem}>Salvar</button>
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

export default CreateOrigemComponent