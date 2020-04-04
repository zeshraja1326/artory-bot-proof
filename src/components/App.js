import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import Header from './Header';
import Chatbot from './chatbot/Chatbot'

const App = () => (    

                <div className="container">
                    <BrowserRouter>
                            <Header/>
                    </BrowserRouter>
                    <Chatbot/>
                </div>
    )


export default App;