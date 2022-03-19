import React, { Component } from 'react'
import OrigemService from '../../services/OrigemService'
import Header from '../../components/header'
import Footer from '../../components/footer'

class ViewOrigemComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            origem: {}
        }
    }

    componentDidMount(){
        OrigemService.getOrigemById(this.state.id).then( res => {
            this.setState({origem: res.data});
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
                            <label> Origem Pais: </label>
                            <div> { this.state.origem.origemPais }</div>
                        </div>
                        <div className = "row">
                            <label> Origem Cidade: </label>
                            <div> { this.state.origem.origemCidade }</div>
                        </div>
                        <div className = "row">
                            <label> Valor: </label>
                            <div> { this.state.origem.valor }</div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default ViewOrigemComponent