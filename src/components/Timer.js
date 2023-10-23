import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const mins = Math.floor(secondsRemaining / 60);
  const secs = secondsRemaining % 60;
  useEffect(() => {
    const setTimer = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(setTimer);
  }, [dispatch]);
  return (
    <div className="timer">
      0{mins}:{secs < 10 ? `0${secs}` : secs}
    </div>
  );
}

export default Timer;
