import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';
import TableBookingForm from '../components/TableBookingForm';

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-24 max-w-[1240px] mx-auto px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-black mb-6 tracking-tight">Get in <span className="text-gold">Touch</span></h1>
        <p className="text-text-muted text-lg font-medium">
          Ready to book a table or order for delivery? Reach out to us via WhatsApp for the fastest response, or drop by our location.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        
        {/* Contact Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 lg:col-span-5 bg-dark border border-white/5 p-8 md:p-10 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="font-display text-3xl font-black tracking-tight">Contact Details</h3>
              <span className="px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded text-xs font-bold uppercase tracking-widest animate-pulse">Open Now</span>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-colors shrink-0 border border-white/10">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Phone & WhatsApp</h4>
                  <p className="text-text-muted mb-2 font-medium">+263 784 233 075</p>
                  <a href="https://wa.me/263784233075" className="text-gold text-xs uppercase tracking-widest font-black hover:underline">Message us &rarr;</a>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-colors shrink-0 border border-white/10">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Location</h4>
                  <p className="text-text-muted font-medium">Longcheng Plaza<br/>Harare, Zimbabwe</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-dark transition-colors shrink-0 border border-white/10">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Operating Hours</h4>
                  <p className="text-text-muted font-medium">Monday - Sunday<br/>8:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 lg:col-span-7 bg-zinc-800 rounded-3xl overflow-hidden grayscale contrast-125 min-h-[500px] flex flex-col items-center justify-center relative group border border-white/5"
        >
          {/* This would be an iframe embed of Google Maps in production */}
          <div className="absolute inset-0 bg-darker/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
            alt="Map view"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 blur-[2px] group-hover:blur-0"
          />
          
          <div className="relative z-20 text-center p-8 backdrop-blur-md bg-darker/80 rounded-3xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105">
            <MapPin className="w-12 h-12 text-gold mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-display font-black text-white mb-2 tracking-tight">We are here</h3>
            <span className="text-gold font-black text-[10px] uppercase tracking-widest bg-gold/10 px-3 py-1.5 rounded-md">Longcheng Plaza, Harare</span>
          </div>
        </motion.div>

        {/* Table Booking Form */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="col-span-1 lg:col-span-12"
        >
          <TableBookingForm />
        </motion.div>
        
      </div>
    </div>
  );
}
