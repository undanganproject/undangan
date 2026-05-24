import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, CheckCircle, Users } from 'lucide-react';

export default function RSVPSection() {
  const [guestName, setGuestName] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [attendance, setAttendance] = useState<'hadir' | 'tidak_hadir'>('hadir');
  const [guestsCount, setGuestsCount] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsVerifying(true);
    // Simulate verfying guest name list
    setTimeout(() => {
      setIsVerifying(false);
      setIsChecked(true);
    }, 1200);
  };

  const handleConfirmSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="rsvp-attendance-form" className="relative py-20 px-4">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="RSVP background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[500px] mx-auto text-center space-y-6">
        
        {/* Gallery Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bodoni text-7xl text-[#DDBE82] font-semibold tracking-wider tracking-tight mb-2 select-none"
        >
          RSVP
        </motion.h2>

        {/* Envelope container card */}
        <div id="rsvp-envelope-wrapper" className="bg-[#092d64]/80 backdrop-blur-md rounded-3xl p-6 border border-[#DDBE82]/30 text-white shadow-2xl text-left">
          
          <AnimatePresence mode="wait">
            {!isChecked && !isSubmitted ? (
              /* Phase 1: Name lookup verification */
              <motion.div
                key="verify-name-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <p className="font-montserrat text-xs leading-relaxed text-gray-300">
                  Please enter the first and last name of one member of your party below. If you&apos;re responding for you and a guest (or your family), you&apos;ll be able to RSVP for your entire group on the next page.
                </p>

                <form onSubmit={handleVerify} className="space-y-4">
                  <div className="flex flex-col space-y-1">
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="First or last name"
                      className="w-full h-11 px-4 rounded-lg bg-white text-[#091932] font-montserrat text-sm border-2 border-transparent focus:border-[#DDBE82] focus:outline-none placeholder-gray-400 font-semibold"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isVerifying}
                    className="w-full h-11 bg-[#DDBE82] text-[#091932] font-montserrat font-bold text-xs tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 shadow-lg hover:bg-[#ebcf9e] active:scale-98 transition-all pointer-events-auto cursor-pointer"
                  >
                    {isVerifying ? (
                      <div className="w-4 h-4 border-2 border-[#091932] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Search className="w-4 h-4" />
                    )}
                    <span>Verify Name & Confirm</span>
                  </button>
                </form>
              </motion.div>
            ) : isChecked && !isSubmitted ? (
              /* Phase 2: Confirmation preferences form */
              <motion.form
                key="confirm-attendance-step"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleConfirmSubmit}
                className="space-y-5"
              >
                <div className="text-center pb-2 border-b border-white/10 select-none">
                  <p className="font-montserrat text-xs text-gray-300">Nama terverifikasi :</p>
                  <p className="font-montserrat text-base font-bold text-[#DDBE82] capitalize">{guestName}</p>
                </div>

                {/* Choice of attendance */}
                <div className="space-y-2">
                  <label className="font-montserrat text-xs font-semibold uppercase text-gray-300 tracking-wider">
                    Konfirmasi Kehadiran
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttendance('hadir')}
                      className={`h-11 rounded-lg font-montserrat text-xs font-bold transition-colors cursor-pointer border ${
                        attendance === 'hadir'
                          ? 'bg-[#DDBE82] text-[#091932] border-[#DDBE82]'
                          : 'bg-white/10 text-white border-white/20 hover:bg-white/15'
                      }`}
                    >
                      Hadir
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance('tidak_hadir')}
                      className={`h-11 rounded-lg font-montserrat text-xs font-bold transition-colors cursor-pointer border ${
                        attendance === 'tidak_hadir'
                          ? 'bg-[#DDBE82] text-[#091932] border-[#DDBE82]'
                          : 'bg-white/10 text-white border-white/20 hover:bg-white/15'
                      }`}
                    >
                      Tidak Hadir
                    </button>
                  </div>
                </div>

                {/* Guests counter input (only if attending) */}
                {attendance === 'hadir' && (
                  <div className="space-y-1.5">
                    <label className="font-montserrat text-xs font-semibold uppercase text-gray-300 tracking-wider">
                      Jumlah Tamu / Keluarga yang hadir
                    </label>
                    <div className="flex items-center gap-3">
                      <select
                        value={guestsCount}
                        onChange={(e) => setGuestsCount(parseInt(e.target.value))}
                        className="h-10 rounded-lg bg-white text-[#091932] font-montserrat font-bold text-sm px-4 focus:outline-none focus:ring-2 focus:ring-[#DDBE82]"
                      >
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <option key={num} value={num}>
                            {num} Orang
                          </option>
                        ))}
                      </select>
                      <Users className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                )}

                {/* Confirm button */}
                <button
                  type="submit"
                  className="w-full h-11 bg-[#DDBE82] text-[#091932] font-montserrat font-bold text-sm uppercase rounded-lg shadow-lg hover:bg-[#ebcf9e] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Kirim Respon RSVP</span>
                </button>
              </motion.form>
            ) : (
              /* Phase 3: RSVP received success message */
              <motion.div
                key="rsvp-received-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-4"
              >
                <div className="flex justify-center select-none">
                  <CheckCircle className="w-16 h-16 text-[#DDBE82] animate-bounce" />
                </div>
                <div className="space-y-1.5 select-none">
                  <h3 className="font-montserrat text-lg font-bold text-[#DDBE82]">RSVP Sukses Dikirim!</h3>
                  <p className="font-montserrat text-xs leading-relaxed text-gray-300 max-w-[280px] mx-auto">
                    Terima kasih <span className="font-bold text-white capitalize">{guestName}</span>. Konfirmasi respon RSVP Anda telah berhasil dicatat oleh sistem website kami.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
