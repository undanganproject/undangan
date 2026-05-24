import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, ChevronRight } from 'lucide-react';
import { Comment } from '../types';

export default function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', text: '' });
  const [charCount, setCharCount] = useState(500);

  // Default seed comments to display initial list
  const defaultComments: Comment[] = [
    {
      id: 'comment-default-1',
      name: 'Andini',
      text: 'Selamat atas pernikahannya! Semoga selalu diberi kebahagiaan dan cinta yang tak berkesudahan.',
      timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    },
    {
      id: 'comment-default-2',
      name: 'Admin Website',
      text: 'Terima kasih atas doa dan ucapannya! ❤️',
      timestamp: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
      isAdmin: true,
    },
    {
      id: 'comment-default-3',
      name: 'Budi',
      text: 'Barakallah! Semoga menjadi keluarga sakinah, mawaddah, warahmah.',
      timestamp: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
    },
    {
      id: 'comment-default-4',
      name: 'Lina',
      text: 'Ikut bahagia melihat kalian bersatu. Semoga langgeng sampai akhir hayat!',
      timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    },
  ];

  // Load from local storage or set defaults
  useEffect(() => {
    const saved = localStorage.getItem('wedding_comments');
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch (e) {
        setComments(defaultComments);
      }
    } else {
      setComments(defaultComments);
      localStorage.setItem('wedding_comments', JSON.stringify(defaultComments));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'text') {
      if (value.length <= 500) {
        setFormData((prev) => ({ ...prev, [name]: value }));
        setCharCount(500 - value.length);
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.text.trim()) return;

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim() || undefined,
      text: formData.text.trim(),
      timestamp: new Date().toISOString(),
    };

    const updated = [newComment, ...comments];
    setComments(updated);
    localStorage.setItem('wedding_comments', JSON.stringify(updated));

    // Reset Form
    setFormData({ name: '', email: '', text: '' });
    setCharCount(500);
  };

  // Humanize standard dates or minutes
  const timeSince = (dateString: string | Date): string => {
    const date = new Date(dateString);
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + ' tahun lalu';

    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + ' bulan lalu';

    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + ' hari lalu';

    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + ' jam yang lalu';

    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + ' menit yang lalu';

    return 'Baru saja';
  };

  return (
    <section id="guest-ucapan-section" className="relative py-20 px-4">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="Comments background texture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[500px] mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-bodoni text-5xl lg:text-6xl text-[#DDBE82] tracking-wider mb-2"
        >
          COMMENT
        </motion.h2>

        <p className="font-montserrat text-xs tracking-wide text-gray-300 opacity-80 mb-8 uppercase">
          Kirim doa dan ucapan manis untuk kedua mempelai
        </p>

        {/* Outer Dark Blue Container */}
        <div className="bg-[#092d64]/80 backdrop-blur-md rounded-3xl p-6 border border-[#DDBE82]/30 text-white shadow-2xl text-left">
          {/* Submission Form */}
          <form onSubmit={handleSubmit} className="space-y-4 mb-8">
            {/* Name Input */}
            <div className="flex flex-col space-y-1">
              <label className="font-montserrat text-xs font-semibold uppercase text-gray-300">
                Nama Anda
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Tulis nama lengkap Anda"
                className="w-full h-10 px-4 rounded-lg bg-white text-[#091932] font-montserrat text-sm border-2 border-transparent focus:border-[#DDBE82] focus:outline-none placeholder-gray-400 font-medium"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col space-y-1">
              <label className="font-montserrat text-xs font-semibold uppercase text-gray-300">
                E-Mail <span className="text-gray-400 capitalize">(Opsional)</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="nama@domain.com"
                className="w-full h-10 px-4 rounded-lg bg-white text-[#091932] font-montserrat text-sm border-2 border-transparent focus:border-[#DDBE82] focus:outline-none placeholder-gray-400 font-medium"
              />
            </div>

            {/* Comment Area */}
            <div className="flex flex-col space-y-1">
              <label className="font-montserrat text-xs font-semibold uppercase text-gray-300">
                Ucapan & Doa Resepsi
              </label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Tulis ucapan selamat atau harapan untuk kedua mempelai..."
                className="w-full p-4 rounded-lg bg-white text-[#091932] font-montserrat text-sm border-2 border-transparent focus:border-[#DDBE82] focus:outline-none placeholder-gray-400 font-medium resize-none min-h-[90px]"
              />
              <span className="font-montserrat text-[10px] text-gray-300 opacity-60 text-right block">
                Tersisa {charCount} karakter
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-11 bg-[#DDBE82] text-[#091932] font-montserrat font-bold text-sm uppercase rounded-lg shadow-lg hover:bg-[#ebd0a3] active:scale-[0.98] transition-transform duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Kirim Ucapan</span>
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Messages Feed View */}
          <div className="border-t border-white/20 pt-6">
            <h3 className="font-montserrat text-sm font-bold tracking-wide uppercase mb-4 text-gray-200">
              Ucapan Terkirim ({comments.length})
            </h3>

            {/* Scrollable messages container */}
            <div className="max-h-[360px] overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-white/10">
              <AnimatePresence initial={false}>
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-4 shadow-md flex gap-3 text-[#091932]"
                  >
                    {/* User Initials Avatar badge */}
                    <div className="w-9 h-9 flex-shrink-0 rounded-full bg-gray-100 flex items-center justify-center font-bold font-montserrat text-sm text-[#091932] shadow-inner select-none uppercase">
                      {comment.name.substring(0, 1)}
                    </div>

                    {/* Right area info */}
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center gap-1">
                        <span className="font-montserrat text-sm font-bold text-[#091950]">
                          {comment.name}
                        </span>
                        
                        {/* Verified Star Badge for system admin or registered users */}
                        {comment.isAdmin && (
                          <span className="text-blue-500 inline-block" title="Verified Website Admin">
                            <svg
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4 ml-1 inline-block"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M16.595 8.23978L17.7696 9.43025L17.7615 9.42221C18.0795 9.74022 18.0795 10.2538 17.7614 10.5718L16.5868 11.7623L17.011 13.3849C17.117 13.817 16.8641 14.2655 16.4318 14.3797L14.8167 14.82L14.3762 16.4345C14.2539 16.8666 13.8134 17.1275 13.3811 17.0134L11.7578 16.5894L10.5669 17.7635C10.4119 17.9185 10.1998 18 9.99592 18C9.792 18 9.57991 17.9185 9.42493 17.7635L8.234 16.5894L6.61076 17.0134C6.17844 17.1275 5.7298 16.8666 5.6156 16.4345L5.17512 14.82L3.56003 14.3797C3.13587 14.2574 2.87484 13.817 2.98904 13.3849L3.4132 11.7623L2.23859 10.5718C1.92047 10.2538 1.92047 9.74009 2.23859 9.42209L3.4132 8.23162L2.98904 6.60899C2.87484 6.17684 3.12771 5.72837 3.56003 5.61422L5.17512 5.17391L5.6156 3.55943C5.73796 3.13543 6.17844 2.87451 6.61076 2.98866L8.234 3.41266L9.42493 2.2385C9.74305 1.9205 10.2569 1.9205 10.5751 2.2385L11.766 3.41266L13.3892 2.98866C13.8216 2.88266 14.2702 3.13543 14.3844 3.56759L14.8249 5.18206L16.44 5.62237C16.8723 5.74468 17.1333 6.18499 17.0191 6.61715L16.595 8.23978ZM9.37506 12.7678C9.21482 12.9279 9.01452 13 8.80621 13C8.5979 13 8.3976 12.9199 8.23736 12.7678L6.23435 10.7658C5.92188 10.4535 5.92188 9.94895 6.23435 9.63664C6.54682 9.32432 7.05158 9.32432 7.36405 9.63664L8.7982 11.0701L12.636 7.23423C12.9484 6.92192 13.4532 6.92192 13.7656 7.23423C14.0781 7.54655 14.0781 8.05105 13.7656 8.36336L11.5784 10.5656L9.37506 12.7678Z"
                              />
                            </svg>
                          </span>
                        )}
                      </div>
                      <p className="font-montserrat text-xs leading-relaxed text-[#444] break-words">
                        {comment.text}
                      </p>
                      <small className="font-montserrat text-[9px] text-gray-400 block pt-1 select-none">
                        {timeSince(comment.timestamp)}
                      </small>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
