export const popGraphStyle = [
    {
        selector: 'node',
        style: {
            'label': 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
        }
        },
        {
        selector: 'edge',
        style: {
            'width': 3,
            'curve-style': 'bezier',
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle',
        }
        }
];