import { useEffect, useState } from 'react';

function ClosingCountdown({ setClosed }) {
  const [message, setMessage] = useState('');

  if (message.includes('closed')) setClosed(true);
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const openingHour = 7;
      const closingHour = 22;

      const openTime = new Date(now);
      openTime.setHours(openingHour, 0, 0, 0);

      const closingTime = new Date(now);
      closingTime.setHours(closingHour, 0, 0, 0);

      if (now < openTime) {
        setMessage(`Opens in ${formatTime(openTime - now)}`);
      } else if (now >= closingTime) {
        setMessage(`We are closed.`);
      } else {
        setMessage(`Closing in ${formatTime(closingTime - now)}`);
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }

  return (
    <div className="text-center text-lg font-bold">
      <span className={message.includes('closed') ? 'text-red-500' : 'text-green-500'}>
        {message}
      </span>
    </div>
  );
}

export default ClosingCountdown;
