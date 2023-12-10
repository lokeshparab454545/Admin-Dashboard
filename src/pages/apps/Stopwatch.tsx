import { useEffect, useState } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const formatTime = (timeInSeconds: number) => {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;
  const hoursInString = hours.toString().padStart(2, "0");
  const minutesInString = minutes.toString().padStart(2, "0");
  const secondsInString = seconds.toString().padStart(2, "0");

  return `${hoursInString}:${minutesInString}:${secondsInString}`;
};
const Stopwatch = () => {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const resetHandler = () => {
    setTime(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalID: number;
    if (isRunning)
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, [isRunning]);
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main className="dashboardAppContainer">
        <h1>StopWatch</h1>
        <section>
          <div className="stopwatch">
            <h2>{formatTime(time)}</h2>
            <button onClick={() => setIsRunning((prev) => !prev)}>
              {isRunning ? "Stop" : "Start"}
            </button>
            <button onClick={resetHandler}>End</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Stopwatch;
