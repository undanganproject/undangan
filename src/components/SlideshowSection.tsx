import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SlideshowSection() {
  const images = [
    'https://assets.vitopia.co/libraries/images/ZbUgEe1IH0PW4rdcAztZGaOPHW85LI0qp3KIT3ct.png',
    'https://assets.vitopia.co/libraries/images/fZpAfMxwSbgWy4wVxZslUg9poSUnghnIz0nmZnGK.png',
    'https://assets.vitopia.co/libraries/images/hIyKJ7lkfDVuUc9nJdzHzKPNad3VnZNPltBEkBUf.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Cross-fade every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      id="automatic-slideshow-view"
      className="relative h-[681px] w-full overflow-hidden select-none border-b border-t border-[#DDBE82]/30"
    >
      {/* Absolute image stack with transition opacity */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex]}
            alt="Wedding gallery slideshow"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          />
        </motion.div>
      </AnimatePresence>

      {/* Elegant overlay frame decoration inside the slideshow */}
      <div className="absolute inset-0 pointer-events-none z-10 p-6 flex flex-col justify-between">
        {/* Subtle border outline */}
        <div className="border border-white/20 w-full h-full rounded-2xl flex flex-col items-center justify-between py-12 px-6">
          <div className="font-niconne text-2xl text-[#DDBE82]">Mempelai Terkasih</div>
          
          {/* Bottom active dot indicator list */}
          <div className="flex gap-2.5 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 pointer-events-auto ${
                  idx === currentIndex ? 'bg-[#DDBE82] scale-125' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
