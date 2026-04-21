import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="w-full pt-32 pb-24 max-w-[1240px] mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">
        
        {/* Main Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-8 bg-dark border border-white/5 rounded-3xl p-8 lg:p-12 flex flex-col justify-center min-h-[500px]"
        >
          <span className="inline-block py-1 px-3 bg-white/5 text-gold text-xs font-bold tracking-widest uppercase rounded border border-white/10 w-max mb-6">Our Story</span>
          <h1 className="font-display text-5xl md:text-6xl font-black leading-tight tracking-tight mb-8">
            A Taste of <span className="text-gold italic">Home</span>, <br/>A Touch of <span className="text-gold italic">Elegance</span>
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none text-text-muted space-y-6 font-medium">
            <p>
              Located in the heart of Longcheng Plaza, Harare, Food Nest Restaurant was born out of a passion to bring the rich, diverse flavors of Africa and the world to one stunning venue.
            </p>
            <p>
              As our guest Hosea notes, we pride ourselves on authentic Nigerian dishes <em className="text-white">"served as they should be."</em> Our kitchen focuses on speed without compromising unparalleled quality, ensuring your cravings are met within minutes. 
            </p>
            <p>
              From our perfectly grilled steaks and ribs to our spicy West African Jollof and Egusi soup, every dish is crafted with an emphasis on authentic taste and freshness. 
            </p>
          </div>
        </motion.div>
        
        {/* Stats Content */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          <div className="bg-gold text-black rounded-3xl p-8 lg:p-10 flex flex-col justify-center flex-grow">
            <h4 className="font-display text-6xl font-black tracking-tighter mb-2">100%</h4>
            <p className="font-bold text-sm uppercase opacity-80">Authentic African Recipes</p>
          </div>
          <div className="bg-dark border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-center flex-grow">
            <h4 className="font-display text-6xl font-black tracking-tighter text-white mb-2">&lt; 10m</h4>
            <p className="font-bold text-sm uppercase text-text-muted">Avg Booking-to-Table Time</p>
          </div>
        </div>

        {/* Image Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-1 lg:col-span-12 relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden border border-white/5 mt-2"
        >
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" 
            alt="Food preparation"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
          {/* Overlay badge */}
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-3xl max-w-sm shadow-2xl">
            <div className="text-gold font-black text-4xl mb-2 leading-none">"</div>
            <p className="italic text-white/90 font-medium text-lg leading-snug">"I recommend this place for families, singles and love birds."</p>
            <p className="mt-4 text-xs font-bold text-gold uppercase tracking-widest">— Hosea Ajet</p>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
