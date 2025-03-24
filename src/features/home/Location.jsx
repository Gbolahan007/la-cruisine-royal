import { FaRegClock, FaShippingFast, FaSmileBeam } from 'react-icons/fa';
import { GiKnifeFork } from 'react-icons/gi';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

function Location() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="relative py-32">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="relative flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {/* Stats Cards */}
          {[
            { icon: <FaRegClock size={40} />, label: 'Hours of Expertise', count: 100 },
            { icon: <GiKnifeFork size={40} />, label: 'Meals Served', count: 11175 },
            { icon: <FaShippingFast size={40} />, label: 'Orders Delivered', count: 12200 },
            { icon: <FaSmileBeam size={40} />, label: 'Satisfied Customers', count: 8500 },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex h-56 w-52 flex-col items-center justify-center rounded-xl border border-gray-700 bg-white/10 p-6 text-white shadow-lg backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:border-gray-500 hover:shadow-xl"
            >
              <div className="mb-3 text-green-400 transition-all duration-300 group-hover:text-yellow-300">
                {item.icon}
              </div>
              <h1 className="text-4xl font-extrabold tracking-wide text-white transition-colors duration-300 group-hover:text-yellow-300">
                {counterOn && <CountUp start={0} end={item.count} duration={4} delay={0} />}+
              </h1>
              <h1 className="text-md mt-2 text-center font-semibold uppercase tracking-wider text-gray-300 transition-colors duration-300 group-hover:text-white">
                {item.label}
              </h1>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default Location;
