import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Gift } from 'lucide-react';

export default function GiftsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const accounts = [
    {
      id: 'pria',
      number: '5234534654',
      holder: 'A/N Mempelai Pria',
      bankLogo: 'https://assets.vitopia.co/websites/yOXbQgrh7fbsyYE9qziYVNOzSublplKac72GxkB8.png',
      label: 'Bank BRI'
    },
    {
      id: 'wanita',
      number: '8576453456',
      holder: 'A/N Mempelai Wanita',
      bankLogo: 'https://assets.vitopia.co/websites/yOXbQgrh7fbsyYE9qziYVNOzSublplKac72GxkB8.png',
      label: 'Bank BRI'
    }
  ];

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section id="wedding-gifts-section" className="relative py-20 px-4">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="Gifts section background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[500px] mx-auto text-center">
        {/* Arched card structure matching the blueprint */}
        <div
          id="gifts-white-arch-card"
          className="bg-white text-[#091932] rounded-t-[320px] rounded-b-2xl py-20 px-6 shadow-2xl border-2 border-[#DDBE82]/30 flex flex-col items-center"
        >
          {/* Section Monogram Icon / Gift */}
          <div className="w-16 h-16 bg-[#091932] rounded-full flex items-center justify-center mb-6 shadow-md border border-[#DDBE82]">
            <Gift className="w-8 h-8 text-[#DDBE82]" />
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bodoni text-5xl lg:text-6xl text-[#091932] font-semibold tracking-wider mb-6"
          >
            GIFTS
          </motion.h2>

          <p className="font-montserrat text-xs leading-relaxed text-[#555] max-w-sm mb-10 px-4">
            Terima kasih telah mengisi kebahagiaan dan kegembiraan di pernikahan kami dengan kehadiran dan hadiah indah Anda.
          </p>

          {/* Bank Accounts Rows Card Stack */}
          <div id="bank-accounts-stack" className="w-full space-y-6 max-w-xs mx-auto">
            {accounts.map((account) => (
              <div
                key={account.id}
                className="bg-[#fcf8f2] border border-[#DDBE82]/40 rounded-xl p-4 flex flex-col items-center shadow-inner relative overflow-hidden"
              >
                {/* Bank logotype */}
                <div className="w-20 h-10 select-none overflow-hidden flex items-center justify-center bg-white rounded-md p-1 border border-gray-100 mb-3 shadow-sm">
                  <img
                    src={account.bankLogo}
                    alt={account.label}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Account details */}
                <div className="text-center mb-4">
                  <h4 className="font-montserrat text-base font-bold tracking-wider text-[#091932] select-all">
                    {account.number}
                  </h4>
                  <p className="font-montserrat text-[11px] font-medium text-gray-500 uppercase mt-0.5">
                    {account.holder}
                  </p>
                </div>

                {/* Copy Account Button */}
                <button
                  onClick={() => handleCopy(account.id, account.number)}
                  className="px-4 py-1.5 bg-[#091932] hover:bg-[#132c53] text-[#DDBE82] font-montserrat text-xs font-semibold rounded-full flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedId === account.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span>Salin Berhasil</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin No. Rekening</span>
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>

          {/* Confirm WhatsApp link button */}
          <div className="mt-12 w-full max-w-xs">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Adam%20&%20Hawa,%20Saya%20ingin%20mengonfirmasi%20pengiriman%20kado/hadiah%20pernikahan."
              target="_blank"
              rel="noreferrer noopener"
              className="px-10 py-3 bg-[#DDBE82] text-[#091932] font-montserrat font-bold text-sm tracking-wider uppercase rounded-full shadow-lg hover:bg-[#e7cb9b] active:scale-98 transition-all inline-flex items-center justify-center w-full cursor-pointer border border-[#cdaf76]"
            >
              Confirm Transfer
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
