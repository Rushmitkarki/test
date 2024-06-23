import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps([...laps, time]);
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${hours.toString().padStart(2, "0")}:
                ${minutes.toString().padStart(2, "0")}:
                ${seconds.toString().padStart(2, "0")}:
                ${milliseconds.toString().padStart(2, "0")}`;
  };

  return (
    
    <div
      
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Task</h1>
      <h1>Stopwatch</h1>

      <div style={{ fontSize: "2em", marginBottom: "20px" }}>
        {formatTime(time)}
      </div>
      <div>
        <button onClick={startStopwatch} style={{ margin: "5px" }}>
          Start
        </button>
        <button onClick={stopStopwatch} style={{ margin: "5px" }}>
          Stop
        </button>
        <button onClick={resetStopwatch} style={{ margin: "5px" }}>
          Reset
        </button>
        <button onClick={recordLap} style={{ margin: "5px" }}>
          Lap
        </button>
      </div>
      <div style={{ marginTop: "20px", width: "50%" }}>
        {laps.length > 0 && (
          <>
            <h3>Lap History</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {laps.map((lap, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  Lap {index + 1}: {formatTime(lap)}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default StopWatch;
