import React, { Component } from 'react'
import DestinoService from '../../services/DestinoService';
import Header from '../../components/header'
import Footer from '../../components/footer'

class CreateDestinoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            destinoPais: '',
            destinoCidade: '',
            valor: ''
        }
        this.changeDestinoPaisHandler = this.changeDestinoPaisHandler.bind(this);
        this.changeDestinoCidadeHandler = this.changeDestinoCidadeHandler.bind(this);
        this.changeValorHandler = this.changeValorHandler.bind(this);
        this.saveOrUpdateDestino = this.saveOrUpdateDestino.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4 - Algo relacionado ao update, ao selecionar no botao update ele retorna os dados nos inputs para alterar
        if(this.state.id === '_add'){
            return
        }else{
            DestinoService.getDestinoById(this.state.id).then( (res) =>{
                let destino = res.data;
                this.setState
                ({
                    destinoPais: destino.destinoPais,
                    destinoCidade: destino.destinoCidade,
                    valor : destino.valor
                });
            });
        }        
    }
    saveOrUpdateDestino = (e) => {
        e.preventDefault();
        let destino = {destinoPais: this.state.destinoPais, destinoCidade: this.state.destinoCidade, valor: this.state.valor};
        console.log('destino => ' + JSON.stringify(destino));

        // step 5
        if(this.state.id === '_add'){
            DestinoService.createDestino(destino).then(res =>{
                this.props.history.push('/destino');
            });
        }else{
            DestinoService.updateDestino(destino, this.state.id).then( res => {
                this.props.history.push('/destino');
            });
        }
    }
    
    changeDestinoPaisHandler= (event) => {
        this.setState({destinoPais: event.target.value});
    }

    changeDestinoCidadeHandler= (event) => {
        this.setState({destinoCidade: event.target.value});
    }

    changeValorHandler= (event) => {
        this.setState({valor: event.target.value});
    }

    cancel(){
        this.props.history.push('/destino');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar Destino</h3>
        }else{
            return <h3 className="text-center">Atualizar Destino</h3>
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
                                            <input placeholder="País:" name="destinoPais" className="form-control" 
                                                value={this.state.destinoPais} onChange={this.changeDestinoPaisHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Cidade:" name="destinoCidade" className="form-control" 
                                                value={this.state.destinoCidade} onChange={this.changeDestinoCidadeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label></label>
                                            <input placeholder="Valor:" name="valor" className="form-control" 
                                                value={this.state.valor} onChange={this.changeValorHandler}/>
                                        </div>

                                        <button className="btn-adm ad" onClick={this.saveOrUpdateDestino}>Salvar</button>
                                        <button className="btn-adm del" onClick={this.cancel.bind(this)}>Candelar</button>
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

export default CreateDestinoComponent