import { motion } from 'motion/react';

export default function LoveStorySection() {
  const stories = [
    {
      title: 'Meeting',
      text: 'Our first meeting happened at the end of 2024 when I accompanied my family on a trip. That moment brought us closer, opening the way for a more serious relationship.'
    },
    {
      title: 'Approach',
      text: 'They say love can grow with togetherness. As time went on, we met again. There was no dating between us, but nature seemed to conspire to unite us both.'
    },
    {
      title: 'Application',
      text: 'In early April 2025, he courageously expressed his intention to propose to my parents. This step marked the beginning of our journey towards married life.'
    },
    {
      title: 'Marry',
      text: 'With pleasure, after going through a six-month journey full of prayers and preparations, we decided to get married at the end of June 2025. May the life we ​​build together always be blessed and showered with happiness.'
    }
  ];

  return (
    <section id="love-stories-section" className="relative py-20 px-4">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="Love story background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative corners */}
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

      <div className="relative z-10 max-w-[500px] mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-niconne text-5xl lg:text-6xl text-[#DDBE82] tracking-wide mb-12"
        >
          Love Story
        </motion.h2>

        {/* Stories Vertical Stack */}
        <div id="love-stories-list" className="space-y-6">
          {stories.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8 }}
              className="bg-white hover:shadow-2xl transition-shadow duration-300 text-[#091932] border border-[#DDBE82] rounded-2xl p-6 text-left shadow-lg relative group overflow-hidden"
            >
              {/* Highlight ribbon */}
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#DDBE82] group-hover:bg-[#091932] transition-colors" />

              <h3 className="font-montserrat text-lg font-bold tracking-wide text-[#091932] mb-2 pl-2">
                {story.title}
              </h3>
              <p className="font-montserrat text-xs leading-relaxed text-[#555] pl-2">
                {story.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
