import React from 'react';
import ChatBot from 'react-simple-chatbot';
import AudioRecorder from './AudioRecorder/AudioRecorder'; 
import { Segment } from 'semantic-ui-react'; 

import './Chatbot.css';

const Chatbot = () => { 
  

  const steps = [
    {
      id: '1',
      message: 'Please enter your name!',
      trigger: 'name',
    },
    {
      id: 'name',
      user: true,
      trigger: 'Greeting',
    },
    {
      id: 'Greeting',
      message: 'Hi {previousValue}, Would you like to record your issue using voice? (Yes/No)',
      trigger: 'voiceRecordingQuestion',
    },
    {
      id: 'voiceRecordingQuestion',
      options: [
        { value: 'Yes', label: 'Yes', trigger: 'voiceRecording' },
        { value: 'No', label: 'No', trigger: 'endChat' },
      ],
    },
    {
      id: 'voiceRecording',
      message: 'Great! Please start recording your issue using the voice recorder below:',
      trigger: 'voiceRecorder',
    },
    {
      id: 'voiceRecorder',
      component: <AudioRecorder/>,
      waitAction: true,  
      trigger: 'voiceRecordingComplete',
    },
    {
      id: 'voiceRecordingComplete',
      message: 'Thank you for recording your issue. Our team will review it and get back to you ASAP.',
      end: true,
    },
    {
      id: 'endChat',
      message: 'Thank you for contacting us. Have a great day!',
      end: true,
    }
  ];

 
  return (
    <div className="chatbot-container">
      <Segment className="chatbot">
        <ChatBot
          steps={steps} 
        />
      </Segment>
    </div>
  );
  
}

export default Chatbot;
