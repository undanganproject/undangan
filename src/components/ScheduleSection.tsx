import { motion } from 'motion/react';
import { Calendar, MapPin, Map } from 'lucide-react';

export default function ScheduleSection() {
  const scheduleEvents = [
    {
      id: 'akad',
      title: 'Akad Nikah',
      time: '08.00 - 10.00',
      room: 'West Ballroom',
      venue: 'UpperHills Convention Hall',
      iconUrl: 'https://assets.vitopia.co/templates/qrgpCDJSjhvr3RRMpcNXoUFEQH2zh78DZEtfOH4q.webp',
      mapUrl: 'https://g.co/kgs/kR4J2NV'
    },
    {
      id: 'resepsi',
      title: 'Ceremonial',
      time: '13.00 - 16.00',
      room: 'West Ballroom',
      venue: 'UpperHills Convention Hall',
      iconUrl: 'https://assets.vitopia.co/templates/uqTLtymSevCtpGdkx5UikLpBnsJCeznwVJ2c4UMv.webp',
      mapUrl: 'https://g.co/kgs/kR4J2NV'
    }
  ];

  return (
    <section id="schedule-wedding-day-section" className="relative py-16 px-4">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src="https://assets.vitopia.co/templates/QscIrGxYNy7vjbKfuZDwLksNTOzvg5V3I235RPVe.webp"
          alt="Schedule background shadow"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[500px] mx-auto text-center space-y-6">
        
        {/* Main schedule card box */}
        <div
          id="schedule-white-card"
          className="bg-white text-[#091932] rounded-3xl py-14 px-6 shadow-2xl border-2 border-[#DDBE82]/35 flex flex-col items-center"
        >
          {/* Calendar Graphic */}
          <div className="w-14 h-14 bg-[#091932] rounded-full flex items-center justify-center mb-4 border border-[#DDBE82]/50">
            <Calendar className="w-6 h-6 text-[#DDBE82]" />
          </div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="font-bodoni text-4xl text-[#091932] font-semibold leading-tight">
              The Wedding Day
            </h2>
            <p className="font-montserrat text-xs font-bold uppercase tracking-widest text-[#DDBE82] mt-2 block">
              TUESDAY, 16 SEPT 2025
            </p>
          </motion.div>

          {/* Events cards list */}
          <div className="w-full space-y-12">
            {scheduleEvents.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center"
              >
                {/* Vector event illustration icon */}
                <div className="h-28 w-28 flex items-center justify-center mb-4 select-none">
                  <img
                    src={event.iconUrl}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="max-h-full max-w-full object-contain filter drop-shadow-md"
                  />
                </div>

                {/* Event text items */}
                <h3 className="font-niconne text-4xl text-[#091932] font-medium leading-none mb-2">
                  {event.title}
                </h3>
                
                <div className="space-y-1 select-none font-montserrat">
                  <p className="text-sm font-bold text-[#DDBE82]">{event.time}</p>
                  <p className="text-xs font-bold text-[#091932] tracking-wide">{event.room}</p>
                  <p className="text-xs text-gray-500 font-medium">{event.venue}</p>
                </div>

                {/* Maps redirection link */}
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="px-6 py-2 bg-[#DDBE82] text-[#091932] font-montserrat font-bold text-xs tracking-wider uppercase rounded-full shadow-md hover:bg-[#ebcf9e] active:scale-95 transition-all mt-4 flex items-center gap-1.5 cursor-pointer border border-[#cdaf76]"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Maps</span>
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
