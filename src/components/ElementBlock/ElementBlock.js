import React, { Component } from 'react';
import './ElementBlock.css';

class ElementBlcok extends Component {

    constructor(props){
        super(props)
        this.state = {
            attributes: this.props.attributes
        }
    }

    render() {
        const postion = {
            gridRow: this.state.attributes.ypos, 
            gridColumn: this.state.attributes.xpos
        }
        return (
            <div className="element-block" style={postion}>
                <h4 className="number">{ this.state.attributes.number }</h4>
                <p className="symbol">{this.state.attributes.symbol}</p>
                <div className="electrons">
                    <div className="inner-orbit">
                        <div className="electron"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ElementBlcok;
