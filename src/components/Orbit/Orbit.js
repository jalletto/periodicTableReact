import React, { Component } from 'react';
import './Orbit.css'
import Electron from '../Electron/Electron'

class Orbit extends Component {

    render() {
        const styles ={
            width: this.props.diameter, 
            height: this.props.diameter, 
            top: this.props.top, 
            left: this.props.left
        }
        return (
            <div className="orbit" style={styles} >
               <Electron top={ this.props.diameter / 2 } /> 
            </div>
        );
    }
}

export default Orbit;
