import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import '../styles/Chat.css';

function Chat() {
    return (
        <ChatEngine
            height="100vh"
            projectID="d392b8ec-9c28-4780-a064-94a5ad330a52"
            userName="Fast Trade Dev"
            userSecret="123123">
        </ChatEngine>
    );
}

export default Chat;