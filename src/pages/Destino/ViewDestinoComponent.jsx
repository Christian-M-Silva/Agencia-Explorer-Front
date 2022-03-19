import React, { Component } from 'react'
import DestinoService from '../../services/DestinoService'
import Header from '../../components/header'
import Footer from '../../components/footer'

class ViewDestinoComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            destino: {}
        }
    }

    componentDidMount(){
        DestinoService.getDestinoById(this.state.id).then( res => {
            this.setState({destino: res.data});
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Ver Detalhes das Origens</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> País: </label>
                            <div> { this.state.destino.destinoPais }</div>
                        </div>
                        <div className = "row">
                            <label> Cidade: </label>
                            <div> { this.state.destino.destinoCidade }</div>
                        </div>
                        <div className = "row">
                            <label> Valor: </label>
                            <div> { this.state.destino.valor }</div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default ViewDestinoComponent