import React, { Component, Fragment } from 'react'

class Item extends Component {
    
    render() {
        return (
            <Fragment>
                <label className="strong">
                    <b>{this.props.nombre} : </b>
                </label>
                <label>
                    {this.props.valor}
                </label>
                <br/>
            </Fragment>
        )
    }
}

export default Item
