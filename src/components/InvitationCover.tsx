import { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface InvitationCoverProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function InvitationCover({ onOpen, isOpen }: InvitationCoverProps) {
  // Read dynamic guest name from search param "to" i.e. ?to=Andini+Pratama
  const recipientName = useMemo(() => {
    if (typeof window === 'undefined') return 'Tamu Undangan';
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    if (!toParam) return 'Tamu Undangan';
    return decodeURIComponent(toParam).replace(/\+/g, ' ');
  }, []);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          id="invitation-cover-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 bg-[#091932] overflow-hidden select-none"
        >
          {/* Main Background Image */}
          <div
            id="cover-bg-image"
            className="absolute inset-0 w-full h-full bg-cover bg-bottom opacity-20"
            style={{
              backgroundImage: 'url("https://assets.vitopia.co/templates/LSornk9iXj5dg528j0A0lwoFPLkpC7yRZ6ZtnyJW.webp")',
            }}
          />

          {/* Background pattern */}
          <div className="absolute inset-0 w-full h-full opacity-40">
            <img
              src="https://assets.vitopia.co/templates/fvCxx5jqTxJ26Y7isIVVJ5ddM60LkoGVWjI2qLG7.webp"
              alt="Background pattern overlay"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Corner Decorations */}
          {/* Top Left */}
          <div className="absolute top-0 left-0 w-32 md:w-48 z-10 pointer-events-none">
            <img
              src="https://assets.vitopia.co/templates/MpGfPWAdAs1dNdABzWne2N0JL1onplZoR6Rl6TZx.webp"
              alt="corner ornament top-left"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Top Right */}
          <div className="absolute top-0 right-0 w-32 md:w-48 z-10 pointer-events-none">
            <img
              src="https://assets.vitopia.co/templates/S2KI47MeIs1BARwsqIWUfh8huBzgBbPMwuI7Mugp.webp"
              alt="corner ornament top-right"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 w-32 md:w-48 z-10 pointer-events-none">
            <img
              src="https://assets.vitopia.co/templates/iUXVADe4tlmgI9dGd6K6vqDN7hLoF438OlEwYpCa.webp"
              alt="corner ornament bottom-left"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Bottom Right */}
          <div className="absolute bottom-0 right-0 w-32 md:w-48 z-10 pointer-events-none">
            <img
              src="https://assets.vitopia.co/templates/5fjlBKpniZknhbqrf3fwWZKxlIunbgZQds45OXRa.webp"
              alt="corner ornament bottom-right"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Content Wrapper */}
          <div className="relative h-full flex flex-col items-center justify-end pb-20 px-6 text-center z-20">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-2"
            >
              <h1 className="font-niconne text-3xl md:text-4xl text-[#DDBE82] tracking-wide mb-1">
                Wedding Invitation
              </h1>
              <p className="font-bodoni text-4xl md:text-5xl lg:text-6xl text-[#DDBE82] tracking-wider leading-tight">
                ADAM & HAWA
              </p>
            </motion.div>

            {/* Logo / Mandala Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="w-48 h-48 md:w-56 md:h-56 my-8 flex items-center justify-center"
            >
              <img
                src="https://assets.vitopia.co/templates/lvW4Re9d0IQLjqWP5nNTByOBxtpvnrsDwTowYgjY.webp"
                alt="Mandala Wedding Icon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_10px_rgba(221,190,130,0.3)] animate-pulse"
              />
            </motion.div>

            {/* Guest Box container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-5 max-w-[320px] w-full shadow-2xl border border-[#DDBE82]/30 mb-6 text-[#091950]"
            >
              <p className="font-montserrat text-xs tracking-wider uppercase opacity-80 mb-2">
                Dear Sir/Madam,
              </p>
              <h3 className="font-montserrat text-lg font-bold tracking-wide text-[#091932] truncate px-2 mb-1">
                {recipientName}
              </h3>
              <p className="font-montserrat text-xs tracking-wide uppercase opacity-80">
                Di Tempat
              </p>
            </motion.div>

            {/* Open Invitation Button */}
            <motion.button
              onClick={onOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="px-8 py-3 bg-[#DDBE82] text-[#091932] font-montserrat font-semibold text-sm tracking-widest uppercase rounded-full shadow-lg hover:bg-[#e7cb9b] active:bg-[#cdaf76] transition-colors cursor-pointer"
            >
              Open Invitation
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
