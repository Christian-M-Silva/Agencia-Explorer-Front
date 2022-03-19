import React, { Component } from 'react';
import DestinoService from '../../services/DestinoService';
import Header from '../../components/header'
import Footer from '../../components/footer'

class ListDestinoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                destino: []
        }
        this.addDestino = this.addDestino.bind(this);
        this.editDestino = this.editDestino.bind(this);
        this.deleteDestino = this.deleteDestino.bind(this);
    }

    deleteDestino(id){
        DestinoService.deleteDestino(id).then( res => {
            this.setState({destino: this.state.destino.filter(destino => destino.id !== id)});
        });
    }
    viewDestino(id){
        this.props.history.push(`/ver-destino/${id}`);
    }
    editDestino(id){
        this.props.history.push(`/add-destino/${id}`);
    }

    componentDidMount(){
        DestinoService.getDestino().then((res) => {
            this.setState({ destino: res.data});
        });
    }

    addDestino(){
        this.props.history.push('/add-destino/_add');
    }

    render() {
        return (
            <div>
                <Header/>
                 <h2 className="text-center">Lista de Destinos</h2>
                 <div className = "row">
                    <button className="btn-adm ad" onClick={this.addDestino}> Adicionar Destino</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> País</th>
                                    <th> Cidade</th>
                                    <th> Valor</th>
                                    <th> Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.destino.map(
                                        destino => 
                                        <tr key = {destino.id}>
                                             <td> {destino.destinoPais} </td>   
                                             <td> {destino.destinoCidade}</td>
                                             <td> {destino.valor}</td>
                                             <td>
                                                 <button className="btn-adm ad" onClick={ () => this.editDestino(destino.id)} >Atualizar </button>
                                                 <button className="btn-adm del" onClick={ () => this.deleteDestino(destino.id)} >Deletar </button>
                                                 <button className="btn-adm" onClick={ () => this.viewDestino(destino.id)} >Visualizar </button>
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

export default ListDestinoComponent