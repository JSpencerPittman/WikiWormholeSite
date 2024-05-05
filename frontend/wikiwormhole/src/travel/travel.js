import useWebSocket from 'react-use-websocket';
import React from 'react';
import { PopularTraversal } from './traversal/traversal.js';

const popt_path = ["Apple","Lemon","Banana","Cucumber"];

function Travel() {
    const socketUrl = 'ws://localhost:8000' + '/ws/wormhole/' + "apple" + '/';
    const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(socketUrl);

    const sendSomething = () => {
        sendJsonMessage({"type": "traverse",
                        "wfrom":"Apple",
                         "wto":"Banana"});
    }

    let popt = new PopularTraversal(popt_path);

    return (
        <div>
            {/* {popt.createComponent()} */}
            <button onClick={sendSomething}>Testme</button>
        </div>
    );
}

export default Travel;