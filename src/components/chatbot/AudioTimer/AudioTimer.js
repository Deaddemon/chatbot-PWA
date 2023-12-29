import React from 'react';
import './AudioTimer.css';

const AudioTimer = ({ isRunning, setElapsedTime, elapsedTime }) => {
  React.useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setElapsedTime(elapsedTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, elapsedTime]);

  const minutes = Math.floor(elapsedTime / 6000);
  const seconds = Math.floor((elapsedTime % 6000) / 100);
  const milliseconds = elapsedTime % 100;

  return (
    <div className="audio-timer">
      <div className="time">
        {minutes}:{seconds.toString().padStart(2, "0")}:
        <span className="milliseconds">{milliseconds.toString().padStart(2, "0")}</span>
      </div>
    </div>
  );
};

export default AudioTimer;
