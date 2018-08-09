import React, { Component } from 'react';
import './ElementBlock.css';
import ElectronOrbits from '../ElectronOrbits/ElectronOrbits'
class ElementBlock extends Component {

    constructor(props){
        super(props)
        this.state = {
            showRings: false, 
            attributes: this.props.attributes
        }
    }

    _handleClick(e) {
        let newState
        if(this.state.showRings) {
            newState = false
        } else {
            newState = true 
        }

        this.setState({
            showRings: newState
        })
    }

    render() {
        const postion = {
            gridRow: this.state.attributes.ypos, 
            gridColumn: this.state.attributes.xpos
        }
        return (
            <div onClick={ e => this._handleClick(e) } className="element-block" style={postion}>
                <h4 className="number">{ this.state.attributes.number }</h4>
                <p className="symbol">{this.state.attributes.symbol}</p>
                {this.state.showRings ? <ElectronOrbits shells={this.state.attributes.shells} /> : null }
            </div>
        );
    }
}

export default ElementBlock;
