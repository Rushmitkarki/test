import React, { useEffect, useState } from 'react';

const Test = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lap, setLap] = useState([]);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
    setLap([]);
  };

  const handleLap = () => {
    setLap([...lap, time]);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${hours.toString().padStart(2, '0')}:
                        ${minutes.toString().padStart(2, '0')}:
                        ${seconds.toString().padStart(2, '0')}:
                        ${milliseconds.toString().padStart(2, '0')}`;
  };
  return (
    <>
      <div className='text-center'>
        <h1>Task</h1>
        <p className='h1 mt-5 '>Stopwatch</p>
        <p className='h1 mt-3 '>{formatTime(time)}</p>
        {isRunning ? (
          <button
            className='mx-2'
            onClick={handleStop}>
            Stop
          </button>
        ) : (
          <button
            className='mx-2'
            onClick={handleStart}>
            Start
          </button>
        )}
        {isRunning ? (
          <button
            className='mx-2'
            onClick={handleLap}>
            lap
          </button>
        ) : (
          <button
            className='mx-2'
            disabled>
            lap
          </button>
        )}

        {isRunning ? (
          <button
            className='mx-2'
            onClick={handleReset}>
            Reset
          </button>
        ) : (
          <button
            className='mx-2'
            disabled>
            Reset
          </button>
        )}
        <p className='h2'>Total Laps {lap.length}</p>
        <ul>
          {lap.map((time, index) => (
            <p key={index}>{`Lap ${index + 1}: ${formatTime(time)}`}</p>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Test;
