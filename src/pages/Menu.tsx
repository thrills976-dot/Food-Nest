import { motion } from 'motion/react';
import { fullMenu, menuHighlights } from '../data/content';
import { ArrowRight } from 'lucide-react';
import PlatterBuilder from '../components/PlatterBuilder';
import TableBookingForm from '../components/TableBookingForm';

export default function Menu() {
  const categories = Object.keys(fullMenu);

  return (
    <div className="w-full pt-32 pb-24 max-w-[1240px] mx-auto px-4">
      <div className="text-center mb-16">
        <span className="inline-block py-1 px-3 bg-white/5 text-gold text-xs font-bold tracking-widest uppercase mb-4 rounded border border-white/10">Our Selections</span>
        <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Explore the <span className="text-gold">Menu</span></h1>
        <p className="text-lg text-text-muted max-w-2xl mx-auto font-medium">
          A diverse fusion of authentic West African staples, pristine seafood, sizzling steaks, and international delights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Most Popular */}
        <div className="md:col-span-2 bg-dark border border-white/5 rounded-3xl p-8 lg:p-10">
          <div className="flex items-center space-x-4 mb-8">
             <h2 className="font-display text-3xl font-black text-white uppercase tracking-tight">Most Popular</h2>
             <div className="h-px bg-white/10 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {menuHighlights.map(item => (
              <div key={item.name} className="bg-darker p-4 rounded-3xl border border-white/5 flex flex-col items-start hover:border-gold/30 transition-colors group">
                <div className="overflow-hidden rounded-2xl w-full aspect-[4/3] mb-4 relative">
                   <img src={item.image} alt={item.name} referrerPolicy="no-referrer" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute top-2 right-2 bg-red text-white text-[10px] font-black px-2 py-1 uppercase tracking-widest rounded-lg shadow-lg">Hot</div>
                </div>
                <h3 className="font-display font-bold text-lg mb-1 leading-tight">{item.name}</h3>
                <p className="text-gold font-black mb-3 text-sm">{item.price}</p>
                
                {item.quote && (
                  <div className="bg-gold/5 border-l-2 border-gold p-3 rounded-r-xl mb-4 w-full">
                    <p className="text-[11px] italic font-medium text-white/80 leading-snug">"{item.quote}"</p>
                  </div>
                )}
                
                <a href={`https://wa.me/263784233075?text=${encodeURIComponent('Hello Food Nest! I would like to order the ' + item.name)}`} className="w-full text-center mt-auto bg-white/5 border border-white/10 hover:bg-gold hover:border-gold hover:text-dark text-white font-black py-3 rounded-xl text-[10px] uppercase tracking-widest transition-all">
                  Quick Order
                </a>
              </div>
            ))}
          </div>
        </div>

        {categories.map((category, idx) => (
          <motion.div 
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`bg-dark border border-white/5 rounded-3xl p-8 lg:p-10 ${idx === categories.length - 1 && categories.length % 2 !== 0 ? 'md:col-span-2' : ''}`}
          >
            <div className="flex items-center space-x-4 mb-8">
              <h2 className="font-display text-2xl font-black text-white uppercase tracking-tight">{category}</h2>
              <div className="h-px bg-white/10 flex-grow"></div>
            </div>

            <div className="space-y-6">
              {fullMenu[category as keyof typeof fullMenu].map((item) => (
                <div key={item.name} className="group relative bg-darker p-4 rounded-2xl border border-white/5 hover:border-gold/30 transition-colors">
                  <div className="flex justify-between items-start mb-1 gap-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-display font-bold group-hover:text-gold transition-colors">{item.name}</h3>
                      {item.popular && (
                        <span className="text-[9px] uppercase tracking-widest font-black bg-red/10 text-red border border-red/20 px-2 py-0.5 rounded">Most Popular</span>
                      )}
                    </div>
                    <span className="text-gold font-black whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-3">{item.description}</p>
                  <a href={`https://wa.me/263784233075?text=${encodeURIComponent('Hello Food Nest! I would like to order the ' + item.name)}`} className="inline-block text-[10px] uppercase tracking-widest font-bold text-gold bg-gold/10 px-2 py-1 rounded hover:bg-gold hover:text-dark transition-colors">Order Now</a>
                </div>
              ))}
            </div>
            
            {category === 'Grill & Meats' && <PlatterBuilder />}
          </motion.div>
        ))}
        
        <div className="md:col-span-2">
          <TableBookingForm />
        </div>

        <div className="md:col-span-2 bg-red text-white rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
             <h3 className="font-display text-3xl font-black mb-2 tracking-tight">Craving something now?</h3>
             <p className="opacity-90 max-w-md text-sm font-medium">Our kitchen is ready. Send us a message on WhatsApp and we'll prepare your meal in under 6 minutes for pickup or dine-in.</p>
          </div>
          <a href="https://wa.me/263784233075" className="px-8 py-4 bg-white text-red shrink-0 rounded-full font-black text-sm tracking-widest hover:scale-105 transition-transform shadow-xl flex items-center space-x-2">
            <span>ORDER VIA WHATSAPP</span>
            <ArrowRight className="w-4 h-4 text-red" />
          </a>
        </div>
      </div>
    </div>
  );
}

