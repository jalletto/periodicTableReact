import React, { Component } from 'react';
import './PTable.css';
import ElementBlock from '../ElementBlock/ElementBlock'

import Elements from '../../Periodic-Table-JSON/PeriodicTableJSON'

class PTable extends Component {
    render() {
        const blocks = Elements.elements.map( e => {
            return <ElementBlock key={ e.number } attributes={ e }/>
        })
        return (
            <div id="table">
                { blocks }
            </div>
        );
    }
}

export default PTable;
