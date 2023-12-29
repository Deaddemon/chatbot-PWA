import React, { useState } from 'react';
import AudioTimer from '../AudioTimer/AudioTimer';
import { ReactMic } from 'react-mic';
import './AudioRecorder.css';

const AudioRecorder = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [voice, setVoice] = useState(false);
  const [recordBlobLink, setRecordBlobLink] = useState(null);

  const onStop = (recordedBlob) => {
    setRecordBlobLink(recordedBlob.blobURL);
    setIsRunning(false);
  };

  const startHandle = () => {
    setElapsedTime(0);
    setIsRunning(true);
    setVoice(true);
  };

  const stopHandle = () => {
    setIsRunning(false);
    setVoice(false);
  };

  const clearHandle = () => {
    setIsRunning(false);
    setVoice(false);
    setRecordBlobLink(false);
    setElapsedTime(0);
  };

  return (
    <div className="audio-recorder-container">
      {/* <h2 className="audio-recorder-title">Chatbot Audio Recorder</h2> */}
      <AudioTimer isRunning={isRunning} elapsedTime={elapsedTime} setElapsedTime={setElapsedTime} />
      <ReactMic
        record={voice}
        className="sound-wave"
        onStop={onStop}
        strokeColor="#000000"
      />
      <div className="audio-controls">
        {recordBlobLink ? <button onClick={clearHandle}>Clear</button> : ""}
      </div>
      <div className="audio-controls">
        {!voice ? <button onClick={startHandle}>Start Recording</button> : <button onClick={stopHandle}>Stop Recording</button>}
      </div>
      <div className="audio-player">
        {recordBlobLink ? <audio controls src={recordBlobLink} /> : ""}
      </div>
    </div>
  );
};

export default AudioRecorder;
