import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

export default function OurMomentSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const images = [
    {
      src: 'https://assets.vitopia.co/libraries/images/fZpAfMxwSbgWy4wVxZslUg9poSUnghnIz0nmZnGK.png',
      alt: 'Wedding Moment 1',
    },
    {
      src: 'https://assets.vitopia.co/libraries/images/xzy6Esoc435ywhZdZhA4XkipuYclphYdEvIIIKxc.png',
      alt: 'Wedding Moment 2',
    },
    {
      src: 'https://assets.vitopia.co/libraries/images/hIyKJ7lkfDVuUc9nJdzHzKPNad3VnZNPltBEkBUf.png',
      alt: 'Wedding Moment 3',
    },
    {
      src: 'https://assets.vitopia.co/libraries/images/RdOGjSDYL9WtHmqxVGKrx5BZpFhfeAHjnfxzkHJP.png',
      alt: 'Wedding Moment 4',
    },
    {
      src: 'https://assets.vitopia.co/libraries/images/ZbUgEe1IH0PW4rdcAztZGaOPHW85LI0qp3KIT3ct.png',
      alt: 'Wedding Moment 5',
    }
  ];

  return (
    <section id="our-moments-section" className="relative py-20 px-4">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="Our moments background shadow"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[500px] mx-auto text-center space-y-8">
        
        {/* Gallery Title Block */}
        <div id="gallery-header" className="space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-niconne text-5xl lg:text-6xl text-[#DDBE82] tracking-wide"
          >
            Our Moment
          </motion.h2>
          <p className="font-montserrat text-xs leading-relaxed text-gray-300 italic px-6">
            &ldquo;I would cross a thousand lifetimes to find you, and I&apos;ll gladly spend another thousand loving you.&rdquo;
          </p>
        </div>

        {/* Dynamic Photo Grid Layout matching the absolute proportions in JSON */}
        <div id="gallery-bento-grid" className="w-full space-y-2">
          
          {/* Main Hero Photo 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[280px] w-full rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer"
            onClick={() => setActiveImage(images[0].src)}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Hover look overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <ZoomIn className="w-8 h-8 text-[#DDBE82]" />
            </div>
          </motion.div>

          {/* Sub Grid Row 1 */}
          <div className="grid grid-cols-3 gap-2">
            {/* Column Span 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer col-span-1"
              onClick={() => setActiveImage(images[1].src)}
            >
              <img
                src={images[1].src}
                alt={images[1].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <ZoomIn className="w-6 h-6 text-[#DDBE82]" />
              </div>
            </motion.div>

            {/* Column Span 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer col-span-2"
              onClick={() => setActiveImage(images[2].src)}
            >
              <img
                src={images[2].src}
                alt={images[2].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <ZoomIn className="w-8 h-8 text-[#DDBE82]" />
              </div>
            </motion.div>
          </div>

          {/* Sub Grid Row 2 */}
          <div className="grid grid-cols-3 gap-2">
            {/* Column Span 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer col-span-2"
              onClick={() => setActiveImage(images[3].src)}
            >
              <img
                src={images[3].src}
                alt={images[3].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <ZoomIn className="w-8 h-8 text-[#DDBE82]" />
              </div>
            </motion.div>

            {/* Column Span 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[200px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group cursor-pointer col-span-1"
              onClick={() => setActiveImage(images[4].src)}
            >
              <img
                src={images[4].src}
                alt={images[4].alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <ZoomIn className="w-6 h-6 text-[#DDBE82]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Full scale Lightbox Overlay Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#DDBE82] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#DDBE82]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Main high fidelity photo element */}
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeImage}
              alt="Expanded high quality"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
