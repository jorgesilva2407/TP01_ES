import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import '../styles/Chat.css';
import Login from './Login';
import Header from './Header';

function Chat() {
    // if (!localStorage.getItem('name')) return <Login />

    return (
        <div>
            <Header />
            <div className='chat-styles'>
                <ChatEngine
                    height="90vh"
                    projectID="d392b8ec-9c28-4780-a064-94a5ad330a52"
                    userName={localStorage.getItem('name')}
                    userSecret={localStorage.getItem('password')}>
                </ChatEngine>
            </div>
        </div>
    );
}

export default Chat;