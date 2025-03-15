import { useEffect, useState } from 'react';

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

    // Set open and closing times
    const openTime = new Date();
    openTime.setHours(7, 0, 0, 0); // Opens at 7 AM

    const closingTime = new Date();
    closingTime.setHours(22, 0, 0, 0); // Closes at 10 PM

    if (now < openTime) {
      // If it's before opening time
      const secondsToOpen = (openTime - now) / 1000;
      const hours = Math.floor(secondsToOpen / 3600);
      const minutes = Math.floor((secondsToOpen % 3600) / 60);
      return { status: 'closed', message: `Opens in ${hours}h ${minutes}m` };
    }

    if (now >= closingTime) {
      // If it's past closing time, show next opening time
      const nextOpening = new Date();
      nextOpening.setDate(nextOpening.getDate() + 1); // Move to next day
      nextOpening.setHours(7, 0, 0, 0);

      const secondsToOpen = (nextOpening - now) / 1000;
      const hours = Math.floor(secondsToOpen / 3600);
      const minutes = Math.floor((secondsToOpen % 3600) / 60);
      return { status: 'closed', message: `We are closed. Opens in ${hours}h ${minutes}m` };
    }

    // Calculate time left until closing
    const secondsLeft = (closingTime - now) / 1000;
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    return { status: 'open', message: `Closing in ${hours}h ${minutes}m` };
  }

  return (
    <div className="text-center text-lg font-bold">
      {timeLeft.status === 'closed' ? (
        <span className="text-red-500">{timeLeft.message}</span>
      ) : (
        <span className="text-green-500">{timeLeft.message}</span>
      )}
    </div>
  );
}

export default ClosingCountdown;
