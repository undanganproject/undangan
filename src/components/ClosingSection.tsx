import { motion } from 'motion/react';

export default function ClosingSection() {
  return (
    <section
      id="closing-tribute-section"
      className="relative min-h-[500px] flex flex-col items-center justify-center py-20 px-6 text-center text-white overflow-hidden"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="closing section background"
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

      {/* Narrative content block */}
      <div className="relative z-20 max-w-sm mx-auto flex flex-col items-center px-4">
        {/* Sign-off text */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-montserrat text-xs leading-relaxed text-gray-200 mb-8"
        >
          Kami mengucapkan terima kasih atas kehadiran serta doa restu Anda di momen spesial kami ini. Besar harapan kami Anda bersedia hadir dan menikmati seluruh rangkaian acara yang telah kami persiapkan.
        </motion.p>

        {/* Written Signatures */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="font-bodoni text-5xl text-[#DDBE82] font-semibold tracking-wide"
        >
          Adam & Hawa
        </motion.h2>
      </div>
    </section>
  );
}
