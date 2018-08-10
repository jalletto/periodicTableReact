import React, { Component } from 'react';
import './Orbit.css'
import Electron from '../Electron/Electron'
import ReactDOM from 'react-dom';


class Orbit extends Component {
    constructor(props){
        super(props)
        this.state ={
            numberOfelectrons: this.props.shells.shift(), 
            innerShells: this.props.shells.slice(0), 
            electrons: [], 
            orbitRef: this.props.element + this.props.shells.length.toString()
        }
    }

    getPointOnRadius(centerX, centerY, radius, degrees) {
        const x = radius * Math.cos(degrees) + centerX
        const y = radius * Math.sin(degrees) + centerY
        return [x, y]
    }

    componentDidMount() {
        this.createElectrons()
    }
    
    createElectrons(){
        const thisOrbit = ReactDOM.findDOMNode(this.refs[this.state.orbitRef]).getBoundingClientRect();
        const radius = thisOrbit.width / 2 
        let electrons = []
        for(let i = 0; i < 360; i+= (360 / this.state.numberOfelectrons)){
            let points = this.getPointOnRadius(radius, radius, radius, i)
            // subtract four to account for width of border? I don't really know why, this just looks better and places them more directly on the line. 
            electrons.push(<Electron key={ i } top = { points[0] - 4} left={points[1] - 4} /> )
        }
        this.setState({
            electrons: electrons
        }) 

    }

    render() {
        const innerOrbit = this.state.innerShells.length  > 0 ? <Orbit element={this.props.element} shells={ this.state.innerShells.slice(0) }/> : null
        
        return (
            <div className="orbit" ref={ this.state.orbitRef }>
                { innerOrbit }
               { this.state.electrons }
            </div>
        );
    }
}

export default Orbit;
