import { motion } from 'motion/react';

export default function QuranSection() {
  return (
    <section
      id="quran-verse-section"
      className="relative min-h-[600px] flex flex-col items-center justify-center py-20 px-6 text-center text-white overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="Quran section background texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Ornaments (4 Corners) */}
      <div className="absolute top-0 left-0 w-32 pointer-events-none z-10 opacity-80">
        <img
          src="https://assets.vitopia.co/templates/MpGfPWAdAs1dNdABzWne2N0JL1onplZoR6Rl6TZx.webp"
          alt="corner top-left"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute top-0 right-0 w-32 pointer-events-none z-10 opacity-80">
        <img
          src="https://assets.vitopia.co/templates/S2KI47MeIs1BARwsqIWUfh8huBzgBbPMwuI7Mugp.webp"
          alt="corner top-right"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-32 pointer-events-none z-10 opacity-80">
        <img
          src="https://assets.vitopia.co/templates/iUXVADe4tlmgI9dGd6K6vqDN7hLoF438OlEwYpCa.webp"
          alt="corner bottom-left"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 pointer-events-none z-10 opacity-80">
        <img
          src="https://assets.vitopia.co/templates/5fjlBKpniZknhbqrf3fwWZKxlIunbgZQds45OXRa.webp"
          alt="corner bottom-right"
          referrerPolicy="no-referrer"
          className="w-full h-auto"
        />
      </div>

      {/* Inner Content */}
      <div className="relative z-25 max-w-sm mx-auto flex flex-col items-center">
        {/* Monogram Circle Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
          className="relative w-32 h-32 flex items-center justify-center mb-8"
        >
          {/* Circular Frame Graphic */}
          <div className="absolute inset-0">
            <img
              src="https://assets.vitopia.co/templates/zTXNSMdJf2Gd7EQ61AVVhEzVpEGRAZK23fgoXQ1J.webp"
              alt="Golden circular border pattern"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
          </div>
          {/* Inner initials */}
          <span className="font-bodoni text-3xl font-bold text-white tracking-widest relative z-10 pt-[2px]">
            AH
          </span>
        </motion.div>

        {/* Quran Verse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-4 px-2"
        >
          <p className="font-montserrat text-sm italic font-normal leading-relaxed text-[#eee]">
            &ldquo;Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah).&rdquo;
          </p>
          <p className="font-montserrat text-xs font-semibold tracking-widest text-[#DDBE82] uppercase">
            - Az Zariyat ayat 49 -
          </p>
        </motion.div>
      </div>
    </section>
  );
}
