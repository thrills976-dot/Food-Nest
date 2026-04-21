import { motion } from 'motion/react';
import { Camera, Music, Calendar } from 'lucide-react';

const events = [
  {
    title: "Weekend Karaoke Nights",
    day: "Every Friday & Saturday",
    description: "Sing your heart out with friends and family. Enjoy special discounts on platters and drinks while the music plays.",
    icon: <Music className="w-6 h-6" />
  },
  {
    title: "Valentine's Special",
    day: "February 14",
    description: "A romantic 3-course dinner designed specifically for love birds. Quiet, clean ambiance with authentic mood setting.",
    icon: <Calendar className="w-6 h-6" />
  },
  {
    title: "Sunday Family Treat",
    day: "Every Sunday",
    description: "Kids eat half price when adults order from the main Grill or West African menu. Bring the whole family!",
    icon: <Calendar className="w-6 h-6" />
  }
];

export default function Events() {
  return (
    <div className="w-full pt-32 pb-24 max-w-[1240px] mx-auto px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="inline-block py-1 px-3 bg-white/5 text-gold text-xs font-bold tracking-widest uppercase mb-4 rounded border border-white/10">Experience Food Nest</span>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Events & <span className="text-gold">Gallery</span></h1>
        <p className="text-text-muted text-lg font-medium">
          There’s always something happening at Food Nest. From lively weekends to cozy date nights, join us for an unforgettable experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`bg-dark border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:border-gold/30 transition-colors ${i === 0 ? 'md:col-span-12 lg:col-span-6' : 'md:col-span-6 lg:col-span-3'}`}
          >
            <div>
               <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-gold mb-6 border border-white/10">
                 {event.icon}
               </div>
               <h3 className="font-display text-2xl font-black tracking-tight mb-2">{event.title}</h3>
               <p className="text-gold text-[10px] font-black mb-4 uppercase tracking-widest bg-gold/10 inline-block px-2 py-1 rounded">{event.day}</p>
            </div>
            <p className="text-sm font-medium text-text-muted mt-4">{event.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
         <div className="lg:col-span-4 bg-gold rounded-3xl p-8 lg:p-10 flex flex-col justify-center text-black">
           <Camera className="w-10 h-10 mb-6" />
           <h2 className="font-display text-4xl font-black tracking-tighter leading-none mb-4">Atmosphere <br/>& Vibes</h2>
           <p className="font-bold opacity-80 text-sm">See what it's like inside the Nest. Clean, spacious, and always a good time.</p>
         </div>

         {/* Gallery */}
         <div className="lg:col-span-8 grid grid-cols-2 gap-4">
           {/* Mock gallery items using unsplash */}
           {[
             "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
             "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
             "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80",
             "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&q=80"
           ].map((img, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className={`overflow-hidden rounded-3xl border border-white/5 relative group bg-dark ${i === 0 || i === 3 ? 'col-span-2 aspect-[21/9]' : 'col-span-1 aspect-square'}`}
             >
               <img 
                 src={img} 
                 alt="Gallery item"
                 referrerPolicy="no-referrer"
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" 
               />
             </motion.div>
           ))}
         </div>
      </div>
    </div>
  );
}
