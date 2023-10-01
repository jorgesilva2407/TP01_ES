import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import '../styles/Chat.css';
import Login from './Login';

function Chat() {
    if (!localStorage.getItem('username')) return <Login />

    return (
        <div className='chat-styles'>
            <h3>Adicionar Header</h3>
            <ChatEngine
                height="90vh"
                projectID="d392b8ec-9c28-4780-a064-94a5ad330a52"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}>
            </ChatEngine>
        </div>
    );
}

export default Chat;