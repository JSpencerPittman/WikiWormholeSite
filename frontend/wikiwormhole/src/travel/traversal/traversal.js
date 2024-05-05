import CytoscapeComponent from 'react-cytoscapejs';
import { popGraphStyle } from './graph_style.js';
import './traversal.css';

export class PopularTraversal {
    constructor(page_trace) {
        this.page_trace = page_trace;
    }

    createGraph() {
        // Add Nodes
        const elements = this.page_trace.map((page, idx) => {
            return {
                data: {
                    id: idx,
                    label: page
                },
                position: {
                    x: idx,
                    y: 0
                }
            }
        });

        // Add Edges
        for(let idx = 0; idx < this.page_trace.length-1; idx++) {
            elements.push({
                data: {
                    source: idx,
                    target: idx+1,
                }
            });
        }

        return elements;
    }

    createComponent() {
        const layout = {name: 'breadthfirst'};

        // Add Nodes
        const elements = this.createGraph();

        return (
            <div className='graph-cont'>
            <CytoscapeComponent className="cyto-comp" elements={elements} layout={layout} stylesheet={popGraphStyle} />
            </div>
        );
    }
}