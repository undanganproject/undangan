import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CountdownSection() {
  const targetDate = new Date('2025-09-16T08:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <section
      id="countdown-timer-section"
      className="relative min-h-[500px] flex flex-col items-center justify-center py-20 px-6 text-center text-white overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="countdown section background texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Ornaments (4 Corners) */}
      <div className="absolute top-0 left-0 w-32 pointer-events-none z-10 opacity-70">
        <img
          src="https://assets.vitopia.co/templates/MpGfPWAdAs1dNdABzWne2N0JL1onplZoR6Rl6TZx.webp"
          alt="corner top-left"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-0 right-0 w-32 pointer-events-none z-10 opacity-70">
        <img
          src="https://assets.vitopia.co/templates/S2KI47MeIs1BARwsqIWUfh8huBzgBbPMwuI7Mugp.webp"
          alt="corner top-right"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-32 pointer-events-none z-10 opacity-70">
        <img
          src="https://assets.vitopia.co/templates/iUXVADe4tlmgI9dGd6K6vqDN7hLoF438OlEwYpCa.webp"
          alt="corner bottom-left"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 pointer-events-none z-10 opacity-70">
        <img
          src="https://assets.vitopia.co/templates/5fjlBKpniZknhbqrf3fwWZKxlIunbgZQds45OXRa.webp"
          alt="corner bottom-right"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>

      {/* Main Contents */}
      <div className="relative z-20 max-w-sm mx-auto flex flex-col items-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-niconne text-5xl text-[#DDBE82] tracking-wide mb-8"
        >
          Save The Date
        </motion.h2>

        {/* Countdown Grid */}
        <div id="countdown-grid" className="grid grid-cols-4 gap-3 md:gap-4 max-w-[280px] md:max-w-[320px] mx-auto">
          {/* Days */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#DDBE82] text-[#091932] rounded-xl py-3 px-2 flex flex-col items-center shadow-lg border border-[#DDBE82]/30 w-[64px] min-[370px]:w-[72px]"
          >
            <span className="font-montserrat text-2xl min-[370px]:text-3xl font-bold">
              {formatNumber(timeLeft.days)}
            </span>
            <span className="font-montserrat text-[10px] uppercase font-bold tracking-widest opacity-80 mt-1">
              Days
            </span>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#DDBE82] text-[#091932] rounded-xl py-3 px-2 flex flex-col items-center shadow-lg border border-[#DDBE82]/30 w-[64px] min-[370px]:w-[72px]"
          >
            <span className="font-montserrat text-2xl min-[370px]:text-3xl font-bold">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="font-montserrat text-[10px] uppercase font-bold tracking-widest opacity-80 mt-1">
              Hours
            </span>
          </motion.div>

          {/* Minutes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#DDBE82] text-[#091932] rounded-xl py-3 px-2 flex flex-col items-center shadow-lg border border-[#DDBE82]/30 w-[64px] min-[370px]:w-[72px]"
          >
            <span className="font-montserrat text-2xl min-[370px]:text-3xl font-bold">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="font-montserrat text-[10px] uppercase font-bold tracking-widest opacity-80 mt-1">
              Mins
            </span>
          </motion.div>

          {/* Seconds */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-[#DDBE82] text-[#091932] rounded-xl py-3 px-2 flex flex-col items-center shadow-lg border border-[#DDBE82]/30 w-[64px] min-[370px]:w-[72px]"
          >
            <span className="font-montserrat text-2xl min-[370px]:text-3xl font-bold">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="font-montserrat text-[10px] uppercase font-bold tracking-widest opacity-80 mt-1">
              Secs
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
