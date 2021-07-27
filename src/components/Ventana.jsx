import React, { Component } from 'react';
import { Button,Modal } from 'react-bootstrap';

class Ventana extends Component {

    state = {
        show:false,
        item:null,
        nombre:null
    }

    constructor(props) {
        super(props);
        this.state = {
            show:false,
            item:null,
            nombres:[
                "Casos activos",
                "País",
                "Última actualización",
                "Casos nuevos",
                "Nuevas muertes",
                "Casos totales",
                "Muertes totales",
                "Total recuperado",
                ]
        }
    }

    
    
    handleClose = () => {
        this.setState({show:false});
    };
    handleShow = () => {
        this.setState({show:true});
    };

    
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.item !== this.props.item){
            this.handleShow()
        }
        else{
            if(prevState.show === this.state.show){
                this.handleShow()
            }
        }
    }

    render() {
        if(this.props.show === true){ 
            return (
                <>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header className="alert alert-primary">
                            <Modal.Title>{this.props.item.Country_text}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{ backgroundImage: `url("fondo280.png")` }}>
                            <table className="table">
                                <tbody>
                            {
                                Object.keys(this.props.item).map( (elemento,index) =>(
                                    <tr key={index}>
                                        <th> { this.state.nombres[index] } :</th>
                                        <td className="text-right">{this.props.item[elemento]}</td>
                                    </tr>
                                ) )
                            }
                                </tbody>
                            </table>
                        
                        </Modal.Body>
                        <Modal.Footer className="alert alert-secondary">
                            <Button variant="secondary" onClick={this.handleClose}>
                            Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
        }
        
        return <></>
    }
}


export default Ventana;