export const graphStyles = [
    {
        selector: 'node',
        style: {
            'content': 'data(id)',
            'label': 'data(name)',
            'text-opacity': 0.5,
            'text-valign': 'center',
            'text-halign': 'right',
            'background-color': 'rgb(91,155,213)',
            'color': 'black'
        }
    },
    {
        selector: 'edge',
        style: {
            'width': 3,
            'line-color': 'rgb(91,155,213)',
            'target-arrow-color': 'rgb(91,155,213)',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier'
        }
    }
];