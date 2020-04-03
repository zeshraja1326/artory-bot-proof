import React, { Component } from 'react';

class Chatbot extends Component {
    render(){
        return(
            
            <div className="container" style={{ bottom: 0, height: 500}}> 
                <iframe
    allow="microphone;"
    width="100%"
    height="100%"
    src="https://console.dialogflow.com/api-client/demo/embedded/880f5f39-0704-4f1e-8236-c48dd7abfd7c">
</iframe>
            </div> 
        )
    }
}

export default Chatbot;