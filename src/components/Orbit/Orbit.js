import React, { Component } from 'react';
import './Orbit.css'
import Electron from '../Electron/Electron'

class Orbit extends Component {
    constructor(props){
        super(props)
        this.state ={
            numberOfelectrons: this.props.shells.shift(), 
            innerShells: this.props.shells 
        }
    }

    createElectrons(){
        let electrons = []
        for(let i = 1; i <= this.state.numberOfelectrons; i++){

            electrons.push(<Electron key={ i } top = { 360 / (i * 5) } left={ i } /> )
        }
        return electrons
    }

    render() {

        const innerOrbit = this.state.innerShells.length  > 0 ? <Orbit shells={ this.state.innerShells }/> : null
        
        return (
            <div className="orbit"  >
                { innerOrbit }
               {this.createElectrons()}
            </div>
        );
    }
}

export default Orbit;
