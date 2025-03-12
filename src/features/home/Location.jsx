import { IoLocationSharp } from 'react-icons/io5';
import { MdTableRestaurant, MdTv } from 'react-icons/md';
import { FaWineGlassAlt } from 'react-icons/fa';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react';

function Location() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="relative py-32">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-12">
          {/* Stats Card Component */}
          {[
            { icon: <IoLocationSharp size={50} />, label: 'Location', count: 1 },
            { icon: <MdTableRestaurant size={50} />, label: 'Tables', count: 145 },
            { icon: <FaWineGlassAlt size={50} />, label: 'Varieties', count: 1075 },
            { icon: <MdTv size={50} />, label: 'Entertainment', count: 2 },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex w-44 flex-col items-center justify-center rounded-lg border border-gray-700 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-lg transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 text-white transition-colors duration-300 group-hover:text-gray-300">
                {item.icon}
              </div>
              <h1 className="text-5xl font-bold text-white transition-colors duration-300 group-hover:text-gray-300">
                {counterOn && <CountUp start={0} end={item.count} duration={4} delay={0} />}
              </h1>
              <h1 className="mt-1 text-lg font-semibold uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-gray-300">
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
