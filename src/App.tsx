import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Menu, X, Sparkles } from 'lucide-react';

import InvitationCover from './components/InvitationCover';
import AudioPlayer from './components/AudioPlayer';
import QuranSection from './components/QuranSection';
import ProfileSection from './components/ProfileSection';
import CountdownSection from './components/CountdownSection';
import ScheduleSection from './components/ScheduleSection';
import RSVPSection from './components/RSVPSection';
import LoveStorySection from './components/LoveStorySection';
import OurMomentSection from './components/OurMomentSection';
import SlideshowSection from './components/SlideshowSection';
import GiftsSection from './components/GiftsSection';
import CommentsSection from './components/CommentsSection';
import ClosingSection from './components/ClosingSection';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [autoPlayMusic, setAutoPlayMusic] = useState(false);
  const [accentTheme, setAccentTheme] = useState<'gold' | 'bronze' | 'champagne'>('gold');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // References for fast snapping menu
  const sectionRefs = {
    hero: useRef<HTMLDivElement>(null),
    verse: useRef<HTMLDivElement>(null),
    profile: useRef<HTMLDivElement>(null),
    countdown: useRef<HTMLDivElement>(null),
    schedule: useRef<HTMLDivElement>(null),
    rsvp: useRef<HTMLDivElement>(null),
    story: useRef<HTMLDivElement>(null),
    gallery: useRef<HTMLDivElement>(null),
    slides: useRef<HTMLDivElement>(null),
    gifts: useRef<HTMLDivElement>(null),
    comments: useRef<HTMLDivElement>(null),
  };

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setAutoPlayMusic(true);
  };

  // Color Cycling Handler
  const cycleColorTheme = () => {
    const sequence: ('gold' | 'bronze' | 'champagne')[] = ['gold', 'bronze', 'champagne'];
    const nextIdx = (sequence.indexOf(accentTheme) + 1) % sequence.length;
    setAccentTheme(sequence[nextIdx]);
  };

  // Smooth Snapping Scroll Link Builder
  const scrollToRef = (ref: React.RefObject<HTMLDivElement | null>) => {
    setIsMenuOpen(false);
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const themeClasses = {
    gold: {
      textAccent: 'text-[#DDBE82]',
      bgAccent: 'bg-[#DDBE82]',
      borderAccent: 'border-[#DDBE82]',
      accentValue: '#DDBE82',
      label: 'Gold Jawa'
    },
    bronze: {
      textAccent: 'text-[#CD7F32]',
      bgAccent: 'bg-[#CD7F32]',
      borderAccent: 'border-[#CD7F32]',
      accentValue: '#CD7F32',
      label: 'Bronze Kraton'
    },
    champagne: {
      textAccent: 'text-[#E8DCC4]',
      bgAccent: 'bg-[#E8DCC4]',
      borderAccent: 'border-[#E8DCC4]',
      accentValue: '#E8DCC4',
      label: 'Champagne Royal'
    }
  };

  const currentTheme = themeClasses[accentTheme];

  return (
    <div
      id="blue-java-nested-web-host"
      className="bg-[#040c1a] min-h-screen text-white font-dmsans overflow-x-hidden relative"
      style={{
        // Dynamic inject accent theme variables safely across children elements
        /* @ts-ignore */
        '--color-accent': currentTheme.accentValue,
      }}
    >
      {/* Dynamic Cover Screen Splash */}
      <InvitationCover isOpen={isOpen} onOpen={handleOpenInvitation} />

      {/* Background Gamelan music floating controller */}
      <AudioPlayer autoPlayTrigger={autoPlayMusic} />

      {/* Floating Utilities (ONLY visible when invitation is opened) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="floating-navigation-controls"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-6 left-0 right-0 z-40 max-w-[576px] mx-auto px-6 pointer-events-none flex justify-between select-none"
          >
            {/* Color Swapper Palette Pill */}
            <motion.button
              onClick={cycleColorTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto h-11 px-4 bg-white hover:bg-gray-100 text-[#091932] shadow-xl border border-gray-100 rounded-full flex items-center gap-2 font-montserrat text-xs font-semibold focus:outline-none cursor-pointer"
              title="Ganti nuansa warna kustom Jawa"
            >
              <Palette className="w-4 h-4 text-[#091932]" />
              <span>{currentTheme.label}</span>
            </motion.button>

            {/* Content Jumps Navigation Hamburger Button */}
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto h-11 px-5 bg-white hover:bg-gray-100 text-[#091932] shadow-xl border border-gray-100 rounded-full flex items-center gap-2 font-montserrat text-xs font-semibold focus:outline-none cursor-pointer"
              title="Daftar Menu Acara"
            >
              <Menu className="w-4 h-4 text-[#091932]" />
              <span>Menu</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Mobile-styled Slidover Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="navigation-side-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-6 select-none"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#091932] border-2 border-[#DDBE82]/32 rounded-3xl w-full max-w-sm p-6 relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-white p-1 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Title monogram */}
              <div className="text-center pb-4 mb-4 border-b border-white/10">
                <span className="font-niconne text-2xl text-[#DDBE82]">Adam & Hawa</span>
                <p className="font-montserrat text-[10px] uppercase tracking-widest text-[#DDBE82] opacity-80 mt-1">
                  Menu navigasi undangan
                </p>
              </div>

              {/* Navigation lists */}
              <div className="grid grid-cols-1 gap-2 font-montserrat text-sm font-semibold">
                <button
                  onClick={() => scrollToRef(sectionRefs.hero)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  ⚜️ Sampul Pembuka
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.verse)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  📖 Ayat Pernikahan (QS)
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.profile)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  👥 Kedua Mempelai
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.countdown)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  ⏳ Hitung Mundur (Save Date)
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.schedule)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  📅 Jadwal Pernikahan
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.rsvp)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  📬 RSVP Kehadiran
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.story)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  💘 Kisah Cinta
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.gallery)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  🖼️ Galeri Foto
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.gifts)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  🎁 Kado Pernikahan & Angpau
                </button>
                <button
                  onClick={() => scrollToRef(sectionRefs.comments)}
                  className="w-full text-left px-4 py-2 rounded-xl text-white hover:bg-white/10 text-xs tracking-wider uppercase transition-colors"
                >
                  ✍️ Ucapan & Doa Tamu
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Single Feed Container (Max width constraint matching mobile scale 576px) */}
      <div
        id="invitation-main-feed"
        className="max-w-[576px] mx-auto min-h-screen bg-[#091932] shadow-2xl relative overflow-hidden"
      >
        
        {/* SECTION 1: post-cover Hero View inside Content feed */}
        <div ref={sectionRefs.hero} id="content-hero-container" className="relative h-screen select-none">
          {/* Background image layer */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <img
              src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
              alt="Main Hero Background"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Corner frame ornaments */}
          <div className="absolute top-0 left-0 w-32 pointer-events-none z-10 opacity-80 animate-fade">
            <img
              src="https://assets.vitopia.co/templates/MpGfPWAdAs1dNdABzWne2N0JL1onplZoR6Rl6TZx.webp"
              alt="corner ornament top-left"
              referrerPolicy="no-referrer"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute top-0 right-0 w-32 pointer-events-none z-10 opacity-80">
            <img
              src="https://assets.vitopia.co/templates/S2KI47MeIs1BARwsqIWUfh8huBzgBbPMwuI7Mugp.webp"
              alt="corner ornament top-right"
              referrerPolicy="no-referrer"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-32 pointer-events-none z-10 opacity-80">
            <img
              src="https://assets.vitopia.co/templates/iUXVADe4tlmgI9dGd6K6vqDN7hLoF438OlEwYpCa.webp"
              alt="corner ornament bottom-left"
              referrerPolicy="no-referrer"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-32 pointer-events-none z-10 opacity-80">
            <img
              src="https://assets.vitopia.co/templates/5fjlBKpniZknhbqrf3fwWZKxlIunbgZQds45OXRa.webp"
              alt="corner ornament bottom-right"
              referrerPolicy="no-referrer"
              className="w-full h-auto"
            />
          </div>

          {/* Core content */}
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center z-20">
            {/* Wedding target Date */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mb-4 text-center"
            >
              <span className={`font-montserrat text-sm font-bold tracking-widest ${currentTheme.textAccent}`}>
                25.05.2025
              </span>
            </motion.div>

            {/* Circular monogram vector */}
            <div className="w-56 h-56 my-8 flex items-center justify-center">
              <img
                src="https://assets.vitopia.co/templates/lvW4Re9d0IQLjqWP5nNTByOBxtpvnrsDwTowYgjY.webp"
                alt="Mandala Center piece"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(221,190,130,0.25)]"
              />
            </div>

            {/* Written Names with high contrast */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-1"
            >
              <h2 className="font-bodoni text-5xl md:text-6xl text-[#DDBE82] font-semibold leading-normal tracking-wide whitespace-pre-line uppercase select-all">
                ADAM <br />
                <span className="text-xl md:text-2xl opacity-80 inline-block py-1 font-niconne font-normal tracking-normal lowercase">&amp;</span> <br />
                HAWA
              </h2>
            </motion.div>
          </div>
        </div>

        {/* SECTION 2: Quranic Verse Section */}
        <div ref={sectionRefs.verse} id="feed-quran-verse">
          <QuranSection />
        </div>

        {/* SECTION 3: Groom & Bride Profiles Section */}
        <div ref={sectionRefs.profile} id="feed-profiles-marriage">
          <ProfileSection />
        </div>

        {/* SECTION 4: Countdown clock timer Section */}
        <div ref={sectionRefs.countdown} id="feed-countdown-timer">
          <CountdownSection />
        </div>

        {/* SECTION 5: Schedule events (Akad & Reception) Section */}
        <div ref={sectionRefs.schedule} id="feed-wedding-schedule">
          <ScheduleSection />
        </div>

        {/* SECTION 6: RSVP Attendance Form */}
        <div ref={sectionRefs.rsvp} id="feed-rsvp-forms">
          <RSVPSection />
        </div>

        {/* SECTION 7: Relationship timeline Stories Section */}
        <div ref={sectionRefs.story} id="feed-stories-timeline">
          <LoveStorySection />
        </div>

        {/* SECTION 8: Photo Album gallery Grid Section */}
        <div ref={sectionRefs.gallery} id="feed-photo-gallery">
          <OurMomentSection />
        </div>

        {/* SECTION 9: Auto cross-fading beautiful Slideshow Section (height: 681px) */}
        <div ref={sectionRefs.slides} id="feed-fading-slideshow">
          <SlideshowSection />
        </div>

        {/* SECTION 10: Cash gifts details / Angpau Section */}
        <div ref={sectionRefs.gifts} id="feed-wedding-gifts">
          <GiftsSection />
        </div>

        {/* SECTION 11: Guests wishing wall & Comment Section */}
        <div ref={sectionRefs.comments} id="feed-guest-comments">
          <CommentsSection />
        </div>

        {/* SECTION 12: Final thank-you signature block Section */}
        <div id="feed-closing-signatures">
          <ClosingSection />
        </div>

        {/* SECTION 13: Footer bar trademark with Vitopia badge */}
        <footer
          id="custom-credits-footer"
          className="bg-white border-t border-gray-200 py-8 px-6 text-[#091932] font-montserrat flex flex-col items-center select-none"
        >
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 tracking-wider">Crafted By</span>
            
            {/* Vitopia active redirection link and custom SVG logo representing absolute design layout */}
            <a
              href="https://vitopia.co/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[#091932] hover:opacity-80 active:scale-95 transition-all"
            >
              <svg
                width="81"
                height="24"
                viewBox="0 0 81 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-auto"
              >
                <path
                  d="M15.3882 22.845L5.79435 2.78549C4.92201 1.04127 2.6896 0.52806 1.43359 0.168945H6.66667C8.02005 0.168945 9.5655 0.695112 10.1551 1.91315L15.3882 14.1236L20.6213 1.91315C21.2104 0.695112 22.7563 0.168945 24.1097 0.168945H29.2865C28.03 0.52806 25.8539 1.04127 24.9816 2.78549L15.3882 22.845Z"
                  fill="currentColor"
                />
                <path
                  d="M29.2557 17.1195L29.0981 17.7919C28.4535 18.0514 27.9391 18.23 27.5536 18.3278C27.1683 18.4328 26.8391 18.4854 26.5661 18.4854C26.0057 18.4854 25.5852 18.3419 25.3051 18.0548C25.0251 17.7604 24.8851 17.4 24.8851 16.9724C24.8851 16.8114 24.8988 16.6433 24.9269 16.4682C24.9549 16.2931 25.0006 16.0723 25.0637 15.8064L26.1772 11.341C26.2334 11.096 26.2857 10.8331 26.3348 10.5531C26.391 10.2731 26.4186 10.0348 26.4186 9.83859C26.4186 9.44666 26.3524 9.18726 26.2194 9.06129C26.0934 8.92787 25.8305 8.86159 25.4312 8.86159C25.2771 8.86159 25.0703 8.88617 24.8114 8.93533C24.5594 8.98405 24.3668 9.02618 24.2334 9.06129L24.3913 8.3889C24.9374 8.14355 25.4276 7.96141 25.8622 7.84246C26.2962 7.72352 26.6395 7.66383 26.8918 7.66383C27.4659 7.66383 27.8829 7.80034 28.1418 8.07377C28.4012 8.34676 28.5307 8.71456 28.5307 9.17673C28.5307 9.30269 28.5166 9.4743 28.4885 9.69156C28.4608 9.90882 28.4188 10.1256 28.3626 10.3429L27.2386 14.8083C27.1683 15.0812 27.1052 15.3512 27.0494 15.6172C27.0002 15.8761 26.9757 16.0898 26.9757 16.258C26.9757 16.6574 27.0634 16.9304 27.2386 17.0774C27.4207 17.2244 27.7112 17.2981 28.1106 17.2981C28.2436 17.2981 28.4328 17.2806 28.6777 17.2455C28.93 17.2108 29.1227 17.1686 29.2557 17.1195ZM30.0019 3.69221C30.0019 4.09161 29.8719 4.44185 29.6129 4.74294C29.3536 5.03744 29.0314 5.18447 28.6461 5.18447C28.2893 5.18447 27.9807 5.04402 27.7217 4.764C27.4624 4.47696 27.3329 4.15129 27.3329 3.78701C27.3329 3.40165 27.4624 3.06546 27.7217 2.77842C27.9807 2.49137 28.2893 2.34741 28.6461 2.34741C29.0455 2.34741 29.3712 2.48435 29.6236 2.75734C29.8755 3.02332 30.0019 3.33537 30.0019 3.69221ZM33.0589 18.4854C32.3935 18.4854 31.9067 18.3524 31.5986 18.0859C31.2905 17.813 31.1364 17.4242 31.1364 16.9198C31.1364 16.7588 31.1469 16.6083 31.1681 16.4682C31.1887 16.3212 31.2168 16.1566 31.2519 15.9745L32.8806 8.95595H31.01L31.2308 8.00003H33.1431L33.8787 4.92157H35.7694L35.0554 8.00003H37.9864L37.7656 8.95595H34.8557L33.5109 14.7451C33.4477 15.0115 33.3951 15.2705 33.3533 15.5229C33.3112 15.7677 33.2901 15.9779 33.2901 16.1531C33.2901 16.5384 33.3849 16.8219 33.5737 17.0041C33.7699 17.1793 34.1201 17.2666 34.6244 17.2666C34.8065 17.2666 35.0624 17.2455 35.3916 17.2038C35.7208 17.1547 35.9762 17.095 36.1584 17.0252L35.9797 17.7919C35.4894 17.9811 35.0273 18.1421 34.5928 18.2752C34.1587 18.4152 33.6473 18.4854 33.0589 18.4854ZM48.2092 11.793C48.2092 12.6194 48.0692 13.446 47.7888 14.2724C47.5087 15.0988 47.1024 15.8239 46.5704 16.4471C46.0311 17.0914 45.3792 17.6098 44.6159 18.0021C43.8594 18.3876 42.9807 18.5802 41.9791 18.5802C40.8164 18.5802 39.8705 18.2054 39.142 17.4557C38.4208 16.7065 38.0601 15.6979 38.0601 14.43C38.0601 13.4986 38.2141 12.63 38.5222 11.8246C38.8303 11.0188 39.2438 10.3113 39.7622 9.70209C40.2875 9.0929 40.9353 8.60264 41.7056 8.23133C42.4833 7.85299 43.3238 7.66383 44.2271 7.66383C45.474 7.66383 46.4475 8.04567 47.148 8.80892C47.8555 9.56559 48.2092 10.5601 48.2092 11.793ZM46.0656 11.3936C46.0656 10.3991 45.8875 9.65294 45.5302 9.15566C45.18 8.65838 44.6721 8.40996 44.0068 8.40996C43.4252 8.40996 42.8752 8.5886 42.3569 8.94586C41.8456 9.30269 41.4045 9.88424 41.0333 10.6896C40.7462 11.2992 40.5359 11.9782 40.4029 12.7279C40.27 13.4705 40.2033 14.157 40.2033 14.7872C40.2033 15.7888 40.3748 16.5489 40.7181 17.0669C41.0683 17.5782 41.5936 17.8341 42.2942 17.8341C42.9174 17.8341 43.4709 17.6379 43.9542 17.2455C44.4373 16.8536 44.8297 16.3563 45.1308 15.7536C45.4319 15.1655 45.6632 14.4932 45.8242 13.7365C45.9854 12.9732 46.0656 12.192 46.0656 11.3936ZM60.6175 11.6772C60.6175 12.616 60.4524 13.5056 60.1232 14.3457C59.7941 15.1867 59.3565 15.9148 58.8101 16.5314C58.2009 17.2108 57.539 17.7152 56.8245 18.0443C56.1169 18.3735 55.3884 18.5381 54.6392 18.5381C54.0366 18.5381 53.5428 18.4643 53.1579 18.3173C52.7726 18.1702 52.4293 17.9881 52.1282 17.7709L51.5186 20.5237C51.4769 20.6988 51.4418 20.8633 51.4137 21.0175C51.3926 21.1715 51.3821 21.2939 51.3821 21.3852C51.3821 21.5744 51.4488 21.7249 51.5818 21.8368C51.7219 21.9492 51.8793 22.0296 52.0545 22.0787C52.2296 22.1349 52.4258 22.1766 52.6431 22.2047C52.8599 22.2327 53.0561 22.2538 53.2312 22.2678L53.0841 22.9297H47.2951L47.442 22.2678C47.6663 22.2538 47.8766 22.2363 48.0728 22.2152C48.2686 22.1941 48.4541 22.159 48.6293 22.1102C48.8465 22.0471 49.0182 21.9282 49.1441 21.753C49.2775 21.5849 49.3719 21.3747 49.428 21.1223L51.6239 11.4568C51.6797 11.1904 51.7324 10.9244 51.7815 10.658C51.8306 10.385 51.8548 10.1502 51.8548 9.95402C51.8548 9.56208 51.792 9.29918 51.6657 9.1662C51.5467 9.0332 51.2842 8.9665 50.8777 8.9665C50.7237 8.9665 50.5276 8.99809 50.2896 9.06129C50.0513 9.11748 49.8657 9.16268 49.7327 9.19779L49.8903 8.5254C50.4227 8.28707 50.9024 8.10493 51.3295 7.97896C51.7569 7.84598 52.1212 7.77926 52.4222 7.77926C52.9126 7.77926 53.2838 7.90566 53.5357 8.15759C53.7881 8.40295 53.9457 8.74616 54.0089 9.18726H54.0928C54.569 8.74616 55.0768 8.38187 55.6162 8.09439C56.1626 7.80735 56.7055 7.66383 57.245 7.66383C58.3092 7.66383 59.1358 8.02811 59.7244 8.75625C60.3194 9.47781 60.6175 10.4517 60.6175 11.6772ZM57.3393 16.0165C57.6966 15.4421 57.9696 14.7907 58.1587 14.0622C58.3549 13.327 58.4528 12.5493 58.4528 11.7298C58.4528 11.3585 58.4177 10.9872 58.3479 10.6163C58.2847 10.238 58.1799 9.92637 58.0328 9.68103C57.8787 9.40803 57.6685 9.19779 57.4021 9.05076C57.1361 8.8967 56.7859 8.81946 56.3518 8.81946C56.0297 8.81946 55.6724 8.91778 55.28 9.11353C54.8947 9.30971 54.4219 9.67751 53.8614 10.2169L52.5167 16.1741C52.5658 16.5731 52.7796 16.9479 53.1579 17.2981C53.5428 17.6414 54.0054 17.813 54.5444 17.813C55.0978 17.813 55.6162 17.6519 56.0994 17.3298C56.5826 17.0076 56.9961 16.5695 57.3393 16.0165ZM67.1417 17.1195L66.9842 17.7919C66.3398 18.0514 65.825 18.23 65.4397 18.3278C65.0543 18.4328 64.7252 18.4854 64.4522 18.4854C63.8917 18.4854 63.4717 18.3419 63.1912 18.0548C62.9112 17.7604 62.7712 17.4 62.7712 16.9724C62.7712 16.8114 62.7853 16.6433 62.8134 16.4682C62.841 16.2931 62.8865 16.0723 62.9498 15.8064L64.0633 11.341C64.1195 11.096 64.1722 10.8331 64.2209 10.5531C64.277 10.2731 64.3051 10.0348 64.3051 9.83859C64.3051 9.44666 64.2384 9.18726 64.1055 9.06129C63.9794 8.92787 63.7165 8.86159 63.3176 8.86159C63.1631 8.86159 62.9568 8.88617 62.6974 8.93533C62.4455 8.98405 62.2529 9.02618 62.1198 9.06129L62.2774 8.3889C62.8239 8.14355 63.3141 7.96141 63.7482 7.84246C64.1827 7.72352 64.5258 7.66383 64.7778 7.66383C65.3524 7.66383 65.7688 7.80034 66.0283 8.07377C66.2872 8.34676 66.4167 8.71456 66.4167 9.17673C66.4167 9.30269 66.4026 9.4743 66.375 9.69156C66.3469 9.90882 66.3048 10.1256 66.2486 10.3429L65.1246 14.8083C65.0543 15.0812 64.9915 15.3512 64.9354 15.6172C64.8862 15.8761 64.8616 16.0898 64.8616 16.258C64.8616 16.6574 64.9495 16.9304 65.1246 17.0774C65.3067 17.2244 65.5972 17.2981 65.9967 17.2981C66.1297 17.2981 66.3188 17.2806 66.5637 17.2455C66.8161 17.2108 67.0088 17.1686 67.1417 17.1195ZM67.8879 3.69221C67.8879 4.09161 67.758 4.44185 67.499 4.74294C67.2397 5.03744 66.9175 5.18447 66.5326 5.18447C66.1753 5.18447 65.8672 5.04402 65.6078 4.764C65.3488 4.47696 65.219 4.15129 65.219 3.78701C65.219 3.40165 65.3488 3.06546 65.6078 2.77842C65.8672 2.49137 66.1753 2.34741 66.5326 2.34741C66.9316 2.34741 67.2571 2.48435 67.5095 2.75734C67.7614 3.02332 67.8879 3.33537 67.8879 3.69221ZM75.0741 16.8781H75.0008C74.8467 17.0041 74.661 17.1652 74.4437 17.3614C74.2336 17.5505 73.9846 17.7327 73.6977 17.9078C73.4246 18.0825 73.127 18.2335 72.8049 18.3595C72.4828 18.4924 72.132 18.5591 71.7542 18.5591C70.7385 18.5591 69.9397 18.1948 69.3587 17.4662C68.7842 16.7376 68.4971 15.7431 68.4971 14.4826C68.4971 13.6141 68.6582 12.77 68.9803 11.9506C69.3025 11.1312 69.7475 10.3956 70.3146 9.74423C70.854 9.12054 71.4948 8.61976 72.2374 8.24186C72.9796 7.85651 73.7432 7.66383 74.5276 7.66383C75.0248 7.66383 75.498 7.73054 75.9462 7.86354C76.4012 7.99652 76.7586 8.14706 77.0179 8.31517L78.9404 7.8214L79.0667 7.97896L77.4696 14.7556C77.4134 14.9729 77.3541 15.2388 77.2909 15.554C77.2347 15.8625 77.2066 16.0898 77.2066 16.2369C77.2066 16.6364 77.2909 16.9057 77.459 17.0462C77.6271 17.1862 77.9107 17.2561 78.31 17.2561C78.4431 17.2561 78.6322 17.235 78.8776 17.1933C79.1224 17.1512 79.3116 17.1055 79.4447 17.0567L79.2871 17.7287C78.6567 17.9811 78.1876 18.1633 77.8795 18.2752C77.5709 18.3876 77.1965 18.4433 76.755 18.4433C76.2507 18.4433 75.8518 18.2962 75.5572 18.0021C75.2632 17.7081 75.1022 17.3333 75.0741 16.8781ZM76.5764 10.238C76.5764 10.0067 76.5518 9.78592 76.5031 9.57613C76.4539 9.36589 76.3525 9.1697 76.1985 8.98756C76.0581 8.81244 75.8658 8.67243 75.6205 8.56753C75.3751 8.4622 75.067 8.40996 74.6957 8.40996C74.1848 8.40996 73.6871 8.57807 73.2039 8.91426C72.7206 9.25046 72.2866 9.70209 71.9013 10.2696C71.537 10.8015 71.2394 11.4463 71.008 12.2025C70.7771 12.9592 70.6613 13.726 70.6613 14.5037C70.6613 14.9307 70.6859 15.3091 70.735 15.6383C70.7837 15.9674 70.8785 16.2685 71.0185 16.5419C71.1515 16.8079 71.3442 17.0146 71.5966 17.1617C71.8485 17.3087 72.1672 17.3824 72.5525 17.3824C72.9449 17.3824 73.3544 17.2736 73.7818 17.0567C74.216 16.8325 74.7027 16.4436 75.2421 15.8902L76.5764 10.238Z"
                />
              </svg>
            </a>
          </div>
          <p className="text-[10px] text-gray-400 font-medium tracking-wide mt-2">
            © 2026 Adam & Hawa. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
