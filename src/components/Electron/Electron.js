import React, { Component } from 'react';
import './Electron.css'

class Electron extends Component {

    render() {
        const styles = {
            top: this.props.top.toString() + 'px', 
            left: this.props.left.toString() + 'px'
        }
      
        return (
            <div className="electron" style={styles}  >
            </div>
        );
    }
}

export default Electron;
