import React, { Component } from 'react';

class Chatbot extends Component {
    render(){
        return(
            
            <div className="container" style={{ bottom: 0, height: 500}}> 
                <iframe
                    allow="microphone;"
                    width="100%"
                    height="100%"
                    src="https://console.dialogflow.com/api-client/demo/embedded/2e63c198-c411-4dfa-ad96-247509659498">
                </iframe>
            </div> 
        )
    }
}

export default Chatbot;