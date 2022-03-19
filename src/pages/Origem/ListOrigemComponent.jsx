import React, { Component } from 'react';
import OrigemService from '../../services/OrigemService';
import Header from '../../components/header';
import Footer from '../../components/footer';

class ListOrigemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                origem: []
        }
        this.addOrigem = this.addOrigem.bind(this);
        this.editOrigem = this.editOrigem.bind(this);
        this.deleteOrigem = this.deleteOrigem.bind(this);
    }

    deleteOrigem(id){
        OrigemService.deleteOrigem(id).then( res => {
            this.setState({origem: this.state.origem.filter(origem => origem.id !== id)});
        });
    }
    viewOrigem(id){
        this.props.history.push(`/ver-origem/${id}`);
    }
    editOrigem(id){
        this.props.history.push(`/add-origem/${id}`);
    }

    componentDidMount(){
        OrigemService.getOrigem().then((res) => {
            this.setState({ origem: res.data});
        });
    }

    addOrigem(){
        this.props.history.push('/add-origem/_add');
    }

    render() {
        return (
            <div>
                <Header/>
                 <h2 className="text-center">Lista de Origens</h2>
                 <div className = "row">
                    <button className="btn-adm ad" onClick={this.addOrigem}> Adicionar Origem</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Pais</th>
                                    <th> Cidade</th>
                                    <th> Valor</th>
                                    <th> Acoes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.origem.map(
                                        origem => 
                                        <tr key = {origem.id}>
                                             <td> {origem.origemPais} </td>   
                                             <td> {origem.origemCidade}</td>
                                             <td> {origem.valor}</td>
                                             <td>
                                                 <button className="btn-adm ad" onClick={ () => this.editOrigem(origem.id)} >Atualizar </button>
                                                 <button className="btn-adm del" onClick={ () => this.deleteOrigem(origem.id)} >Deletar </button>
                                                 <button className="btn-adm" onClick={ () => this.viewOrigem(origem.id)} >Visualizar </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
            <Footer />
            </div>
        )
    }
}

export default ListOrigemComponent