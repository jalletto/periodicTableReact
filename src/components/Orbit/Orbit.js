import React, { Component } from 'react';
import './Orbit.css'
import Electron from '../Electron/Electron'
import ReactDOM from 'react-dom';


class Orbit extends Component {
    constructor(props){
        super(props)
        this.state ={
            numberOfelectrons: this.props.shells.shift(), 
            innerShells: this.props.shells.slice(), 
            electrons: [] 
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
        if (ReactDOM.findDOMNode(this.refs[this.props.element + this.state.innerShells.length.toString()])){
            const location = ReactDOM.findDOMNode(this.refs[this.props.element + this.state.innerShells.length.toString()]).getBoundingClientRect();

            const top_left = location.width / 2 
            const radius = location.width / 2 
            let electrons = []
            for(let i = 0; i < 360; i+= (360 / this.state.numberOfelectrons)){
                let points = this.getPointOnRadius(top_left, top_left, radius, i)
                electrons.push(<Electron key={ i } top = { points[0] - 4} left={points[1] - 4} /> )
            }
            this.setState({
                electrons: electrons
            }) 
        }
    }

    render() {

        const innerOrbit = this.state.innerShells.length  > 0 ? <Orbit element={this.props.element} shells={ this.state.innerShells.slice() }/> : null
        
        return (
            <div className="orbit" ref={this.props.element + this.state.innerShells.length.toString()}>
                { innerOrbit }
               {this.state.electrons}
            </div>
        );
    }
}

export default Orbit;
