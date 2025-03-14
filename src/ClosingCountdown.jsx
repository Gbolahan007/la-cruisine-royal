import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

function ClosingCountdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  function getTimeLeft() {
    const now = new Date();
    const closingTime = new Date();
    closingTime.setHours(22, 0, 0, 0); // Set closing time to 10 PM

    if (now >= closingTime) return 'Closed'; // If past 10 PM

    const secondsLeft = differenceInSeconds(closingTime, now);

    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    return `${hours}h ${minutes}m ${seconds}s`;
  }

  return (
    <div className="text-center text-lg font-bold">
      {timeLeft === 'Closed' ? (
        <span className="text-red-500">We are closed</span>
      ) : (
        <span className="text-green-500">Closing in: {timeLeft}</span>
      )}
    </div>
  );
}

export default ClosingCountdown;
