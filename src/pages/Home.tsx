import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { reviews, menuHighlights } from '../data/content';

export default function Home() {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 pt-28 pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 auto-rows-auto">
        
        {/* Primary Hero (Col 1-8, Row 1-3) */}
        <div className="col-span-1 lg:col-span-8 lg:row-span-3 bg-dark border border-white/5 rounded-3xl overflow-hidden relative group min-h-[480px] flex items-end">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
          
          <div className="relative z-20 p-8 lg:p-12 w-full">
            <span className="inline-block py-1 px-3 rounded-full border border-gold/30 bg-gold/10 text-gold text-xs font-bold uppercase tracking-widest mb-4">
              Experience the Extraordinary
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-white">
              The Best Grill <br/>
              <span className="text-gold italic font-black">Nigerian Cuisine</span>
            </h1>
            <p className="text-lg text-text-offwhite/90 mb-8 max-w-xl leading-relaxed font-medium">
              Experience authentic flavors from West Africa to International Grills, served in a family-friendly atmosphere at Longcheng Plaza.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/263784233075" className="px-8 py-4 bg-red text-white text-sm font-bold tracking-wider rounded-full hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>ORDER ON WHATSAPP</span>
              </a>
              <Link to="/menu" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white text-sm font-bold tracking-wider rounded-full transition-all flex items-center justify-center">
                EXPLORE MENU
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Stats / Review (Col 9-12, Row 1-2) */}
        <div className="col-span-1 lg:col-span-4 lg:row-span-2 bg-gold rounded-3xl p-8 text-black flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="flex items-center space-x-1 mb-2">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-black" />)}
            </div>
            <div className="text-6xl font-black tracking-tighter leading-none mb-1">6 MINS</div>
            <p className="text-sm font-bold uppercase tracking-wider opacity-80">Average Service Time</p>
          </div>
          <div className="border-t border-black/10 pt-6 mt-6">
            <p className="text-base italic font-bold leading-tight mb-3">"{reviews[0].text.substring(0, 110)}..."</p>
            <p className="text-xs font-black uppercase text-black/60">— {reviews[0].name}</p>
          </div>
        </div>

        {/* Amenity Features (Col 9-12, Row 3) */}
        <div className="col-span-1 lg:col-span-4 lg:row-span-1 grid grid-cols-3 gap-3 min-h-[160px]">
          <div className="bg-dark border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-4">
            <Clock className="w-8 h-8 text-gold mb-2" />
            <p className="text-[10px] uppercase font-bold tracking-tighter">Fast & Fresh</p>
          </div>
          <div className="bg-dark border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-4">
            <ChefHat className="w-8 h-8 text-gold mb-2" />
            <p className="text-[10px] uppercase font-bold tracking-tighter">Authentic</p>
          </div>
          <div className="bg-dark border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-4">
            <MapPin className="w-8 h-8 text-gold mb-2" />
            <p className="text-[10px] uppercase font-bold tracking-tighter">Clean Venue</p>
          </div>
        </div>

        {/* Popular Items / Menu Snippet (Col 1-4, Row 4-5) */}
        <div className="col-span-1 lg:col-span-4 lg:row-span-2 bg-dark border border-white/5 rounded-3xl p-8 flex flex-col min-h-[380px]">
           <div className="flex justify-between items-start mb-8">
             <h3 className="font-display text-2xl font-black">Popular Items</h3>
             <span className="text-[10px] bg-gold/10 text-gold px-3 py-1 rounded-full font-bold uppercase tracking-widest border border-gold/20">Menu</span>
           </div>
           
           <div className="space-y-6 flex-grow">
             {menuHighlights.slice(0, 4).map(item => (
               <div key={item.name} className="flex flex-col border-b border-white/5 pb-4 last:border-0 last:pb-0">
                 <div className="flex justify-between items-center group mb-3">
                   <div className="pr-4">
                     <p className="text-sm font-bold group-hover:text-gold transition-colors">{item.name}</p>
                     <p className="text-[10px] uppercase font-bold text-text-muted mt-1 tracking-widest">{item.category}</p>
                   </div>
                   <span className="text-sm font-black text-gold">{item.price}</span>
                 </div>
                 <a href={`https://wa.me/263784233075?text=${encodeURIComponent('Hello Food Nest! I would like to order the ' + item.name)}`} className="w-max bg-red/10 border border-red/20 text-red text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-widest hover:bg-red hover:text-white transition-colors">
                   Quick Order
                 </a>
               </div>
             ))}
           </div>
           
           <Link to="/menu" className="mt-8 w-full py-4 text-center rounded-2xl bg-white/5 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/10">
             View Full Menu
           </Link>
        </div>

        {/* Review Highlights (Col 5-9, Row 4-5) */}
        <div className="col-span-1 lg:col-span-5 lg:row-span-2 bg-dark border border-white/5 rounded-3xl p-8 lg:p-10 flex flex-col justify-center min-h-[380px]">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex space-x-1 text-gold">
               {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest ml-2 bg-white/5 px-2 py-1 rounded">Verified</span>
          </div>
          
          <p className="text-2xl lg:text-3xl font-bold leading-tight italic text-zinc-200 mb-8">
            "{reviews[1].text}"
          </p>
          
          <div className="flex items-center gap-4 border-t border-white/5 pt-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-text-muted font-black text-lg border border-white/10">
              HA
            </div>
            <div>
              <p className="text-sm font-black">{reviews[1].name}</p>
              <p className="text-[10px] mt-1 font-bold uppercase text-gold tracking-widest">{reviews[1].highlight}</p>
            </div>
          </div>
        </div>

        {/* Info/Location Square (Col 10-12, Row 4) */}
        <div className="col-span-1 lg:col-span-3 lg:row-span-1 bg-dark border border-white/5 rounded-3xl p-8 flex flex-col justify-center">
          <div className="flex items-start gap-4 mb-6">
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-gold shadow-inner shadow-black">
               <MapPin className="w-6 h-6" />
             </div>
             <div>
               <p className="text-sm font-black uppercase tracking-wider mb-1">Location</p>
               <p className="text-xs text-text-muted font-medium">Longcheng Plaza<br/>Harare, Zimbabwe</p>
             </div>
          </div>
          <div className="flex items-start gap-4 border-t border-white/5 pt-6">
             <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-gold shadow-inner shadow-black">
               <Clock className="w-6 h-6" />
             </div>
             <div>
               <p className="text-sm font-black uppercase tracking-wider mb-1">8 AM – 10 PM</p>
               <p className="text-xs text-text-muted font-medium">Open daily for you</p>
             </div>
          </div>
        </div>

        {/* Photo Grid / Vibe (Col 10-12, Row 5) */}
        <div className="col-span-1 lg:col-span-3 lg:row-span-1 bg-dark border border-white/5 rounded-3xl overflow-hidden relative group">
           <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" alt="Drink" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
           <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
              <span className="text-[10px] font-bold uppercase text-gold tracking-widest mb-2 border border-gold/30 bg-gold/10 inline-block px-2 py-1 rounded w-max">Events</span>
              <h4 className="text-lg font-black tracking-tight leading-snug">Karaoke Nights & <br/>Weekend Specials</h4>
           </div>
        </div>

        {/* Location/CTA Footer row (Col 1-12, Row 6) */}
        <div className="col-span-1 lg:col-span-12 bg-red rounded-3xl overflow-hidden relative">
           <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80')] bg-cover mix-blend-overlay"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-10 text-white gap-6">
             <div className="flex flex-col text-center md:text-left">
               <span className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">Ready to Feast?</span>
               <span className="text-3xl md:text-4xl font-extrabold tracking-tight">Book for Groups, Events, or Date Nights.</span>
             </div>
             <a href="https://wa.me/263784233075" className="bg-white text-red px-10 py-4 rounded-full font-black tracking-wider text-sm shadow-xl hover:scale-105 transition-transform flex items-center shrink-0">
               ORDER • +263 784 233 075
             </a>
           </div>
        </div>

      </div>
    </div>
  );
}
