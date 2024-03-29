import CytoscapeComponent from 'react-cytoscapejs';
import React from 'react';
import './graph.css';

function Graph() {
    const layout = {name: 'breadthfirst'};

    const elements = [
        { data: { id: 1, label: 'Node 1' }, position: { x: 0, y: 0 } },
        { data: { id: 2, label: 'Node 2' }, position: { x: 100, y: 0 } },
        { data: { id: 3, label: 'Node 3' }, position: { x: 100, y: 0 } },
        { data: { id: 4, label: 'Node 3' }, position: { x: 100, y: 0 } },
        { data: { id: 5, label: 'Node 3' }, position: { x: 100, y: 0 } },
        { data: { source: 1, target: 2, label: 'Edge from Node1 to Node2' } },
        { data: { source: 1, target: 3, label: 'Edge from Node1 to Node2' } },
        { data: { source: 1, target: 4, label: 'Edge from Node1 to Node2' } },
        { data: { source: 2, target: 5, label: 'Edge from Node1 to Node2' } }
    ];
    
    return (
    <div className='graph-cont'>
        <CytoscapeComponent className="cyto-comp" elements={elements} layout={layout} />
        </div>);
}

export default Graph;