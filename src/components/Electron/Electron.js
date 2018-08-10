import React, { Component } from 'react';
import './Electron.css'

class Electron extends Component {

    getCenter(){
        let c = document.querySelector(this)
        console.log(c)
    }

    render() {
        const styles = {
            top: this.props.top.toString() + '%', 
            left: this.props.left.toString() + '%'
        }
        this.getCenter()
        return (
            <div className="electron" style={ styles } >
            </div>
        );
    }
}

export default Electron;
