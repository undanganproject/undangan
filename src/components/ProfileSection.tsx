import { motion } from 'motion/react';

export default function ProfileSection() {
  return (
    <section id="bride-groom-profile-section" className="relative py-16 px-4">
      {/* Background Section Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="Bride Groom Profile background texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative Corner Ornaments */}
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

      {/* Main Profile White Card Box */}
      <div
        id="profile-white-container"
        className="relative z-10 bg-white text-[#091932] rounded-[48px] py-16 px-6 max-w-[480px] mx-auto shadow-2xl border-2 border-[#DDBE82]/30 flex flex-col items-center"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-bodoni text-4xl text-[#DDBE82] font-semibold leading-tight mb-3">
            The Wedding Of
          </h2>
          <p className="font-montserrat text-xs leading-relaxed text-[#555] px-4">
            Tanpa mengurangi rasa hormat, kami bermaksud mengundang Bapak/Ibu/Saudara/i pada acara resepsi pernikahan kami:
          </p>
        </motion.div>

        {/* Profiles columns wrapper */}
        <div id="profile-details-wrapper" className="w-full space-y-12">
          
          {/* GROOM (ADAM KHO) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Oval Portrait Photo Frame */}
            <div className="relative w-[180px] h-[260px] mb-6 select-none">
              {/* Wooden / Pattern Overlay Golden Frame */}
              <div className="absolute inset-0 z-10 pointer-events-none scale-102">
                <img
                  src="https://assets.vitopia.co/templates/pBnDVS9mHCP254LW8WVZO9JII4CSwFj3QT5LmJ31.webp"
                  alt="Groom luxury frame"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Photo Masked inside border */}
              <div className="w-full h-full border-3 border-[#081932] rounded-full overflow-hidden p-[6px] bg-sky-50 shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://assets.vitopia.co/libraries/images/hy1OHpABS65V13mdlIPyBK2LzITsquOuwEoXsYyl.png"
                    alt="Adam Kho Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Groom Info */}
            <h3 className="font-bodoni text-3xl font-bold text-[#DDBE82] tracking-wide mb-2">
              ADAM KHO
            </h3>
            <p className="font-montserrat text-xs text-[#555] leading-relaxed max-w-[280px]">
              The Son of Mr. Ardani <br /> & Mrs. Aminah
            </p>
          </motion.div>

          {/* Golden Divider Ornament */}
          <div className="flex justify-center select-none w-full my-6">
            <img
              src="https://assets.vitopia.co/templates/YKQnPjZdE74qfDFGr55ydTCgPYo0kzgEd9am3BpB.webp"
              alt="Golden vertical branch separator"
              referrerPolicy="no-referrer"
              className="h-16 object-contain"
            />
          </div>

          {/* BRIDE (NURUL HAWA) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Oval Portrait Photo Frame */}
            <div className="relative w-[180px] h-[260px] mb-6 select-none">
              {/* Wooden / Pattern Overlay Golden Frame */}
              <div className="absolute inset-0 z-10 pointer-events-none scale-102">
                <img
                  src="https://assets.vitopia.co/templates/O85wthNnC57mbPTwRdT0jXpMg4Hydi33U649jiii.webp"
                  alt="Bride luxury frame"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Photo Masked inside border */}
              <div className="w-full h-full border-3 border-[#081932] rounded-full overflow-hidden p-[6px] bg-rose-50 shadow-inner group-hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://assets.vitopia.co/libraries/images/B7h2ROQHQ8NEj42KOEH6CjT54VD0GaOqWSFT1tQR.png"
                    alt="Nurul Hawa Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Bride Info */}
            <h3 className="font-bodoni text-3xl font-bold text-[#DDBE82] tracking-wide mb-2">
              NURUL HAWA
            </h3>
            <p className="font-montserrat text-xs text-[#555] leading-relaxed max-w-[280px]">
              The Daughter of Mr. Rustam <br /> & Mrs. Masrukiah
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
