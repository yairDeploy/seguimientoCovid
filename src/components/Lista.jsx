import React from 'react'
import Item from './Item';
import Example from './Example';

class Lista extends React.Component{
    state = {
        estadisticas : [],
        isFetch: false,
        item:null
    }

    async componentDidMount(){
        await this.fetchestadisticas()
    }

    fetchestadisticas = async() =>{
        
        let res = await fetch('https://covid-19.dataflowkit.com/v1')
        let data = await res.json()
        this.setState({estadisticas:data,isFetch:true})
    }

    handleClose = () => {
        this.setState({show:false});
    };
    handleShow = () => {
        this.setState({show:true});
    };

    showModal = (elemento) => {
        this.setState({item:elemento})
    }
    

    render(){
        if(this.state.isFetch){
            return (
                <div className="container mt-5">
                    <h1 className="alert alert-danger">Seguimiento de COVID -19 por Pais</h1>
                        <ul className="list-group">
                        {
                            this.state.estadisticas.map( (item,index) =>(
                             
                                <li className="list-group-item" key={index} onClick={() =>this.showModal(item)} >
                                    <Item nombre="Pais" valor ={item.Country_text}></Item>
                                    <Item nombre="Total de casos" valor ={item["Total Cases_text"]}></Item>
                                    <Item nombre="Total de Muertes" valor ={item["Total Deaths_text"]}></Item>
                                    <Item nombre="Total de Recuperados" valor ={item["Total Recovered_text"]}></Item>
                                    <Item nombre="Nuevos Casos" valor ={item["New Cases_text"]}></Item>
                                    <Item nombre="Nuevas Muertes" valor ={item["New Deaths_text"]}></Item>
                                    <Item nombre="Ultima actualización" valor ={item['Last Update']}></Item>
                                    
                                </li>
                            ))
                        }
                        </ul>
                        <Example item={this.state.item} show={(this.state.item === null? false:true)}></Example>
                    
                </div>
            )
        }
        return "Cargando"
    }

}
/*
const Lista = () => {

     
}
*/
export default Lista
