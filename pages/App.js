import React, { useEffect } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed'
import LoginForm from './components/LoginForm';

const projectID = "241084c2-2069-445d-afc1-cee8f51a49b9";


function App() {
    
//how to use localStorage on next js

    const ISSERVER = typeof window === "undefined";

    let isLoggedIn = ''
    let user_Name = ''
    let user_Secret= ''
    
    if (!ISSERVER) {
        isLoggedIn = localStorage.getItem('username');
        user_Name = localStorage.getItem('username')
        user_Secret = localStorage.getItem('password')
    }

    if (!isLoggedIn) return <LoginForm />


    

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            // userName='saiicodes'
            // userSecret='saiicodes'
            userName={user_Name}
            userSecret={user_Secret}
          //to customize the chat feed using the chatFeed component
          renderChatFeed={(chatAppProps) =>  <ChatFeed {...chatAppProps} /> }
        />
    );
}

export default App
