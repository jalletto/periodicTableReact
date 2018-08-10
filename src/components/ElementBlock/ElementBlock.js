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

    _handleClick(previousState) {
        this.setState({
            showRings: !previousState
        })
    }

    render() {
        const postion = {
            gridRow: this.state.attributes.ypos, 
            gridColumn: this.state.attributes.xpos
        }
        return (
            <div onClick={ () => this._handleClick(this.state.showRings) } className="element-block" style={ postion }>
                <h4 className="number">{ this.state.attributes.number }</h4>
                <p className="symbol">{this.state.attributes.symbol}</p>
                { this.state.showRings ? <ElectronOrbits shells={ this.state.attributes.shells } /> : null }
            </div>
        );
    }
}

export default ElementBlock;
