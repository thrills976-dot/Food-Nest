import React, { useState } from 'react';
import { Calendar, Users, Clock, Send, User } from 'lucide-react';

export default function TableBookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    partySize: '2',
    requests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Table Reservation*\n\n*Name:* ${formData.name}\n*Date:* ${formData.date}\n*Time:* ${formData.time}\n*Party Size:* ${formData.partySize} people\n*Special Requests:* ${formData.requests || 'None'}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/263784233075?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-darker border border-white/5 rounded-3xl p-8 lg:p-10 relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col xl:flex-row gap-8 lg:gap-12 items-start">
        <div className="xl:w-1/3">
          <span className="inline-block py-1 px-3 bg-white/5 text-gold text-xs font-bold tracking-widest uppercase mb-4 rounded border border-white/10">Reservations</span>
          <h2 className="font-display text-3xl md:text-4xl font-black text-white leading-tight mb-4 tracking-tight">Reserve a <br className="hidden xl:block" />Table</h2>
          <p className="text-text-muted text-sm font-medium">
            Planning a dinner date, family outing, or group celebration? Let us know when you're coming and we'll have your table ready.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="xl:w-2/3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1 sm:col-span-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-text-muted ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
              <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors" />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-widest text-text-muted ml-1">Date</label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
              <input required name="date" value={formData.date} onChange={handleChange} type="date" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
            </div>
          </div>
          
          <div className="space-y-1">
            <label className="text-[10px] uppercase font-bold tracking-widest text-text-muted ml-1">Time</label>
            <div className="relative">
              <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
              <input required name="time" value={formData.time} onChange={handleChange} type="time" className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors [&::-webkit-calendar-picker-indicator]:invert" />
            </div>
          </div>
          
          <div className="space-y-1 sm:col-span-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-text-muted ml-1">Party Size</label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" />
              <select required name="partySize" value={formData.partySize} onChange={handleChange} className="w-full bg-zinc-900 md:bg-white/5 border border-white/10 rounded-2xl py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none">
                {[1,2,3,4,5,6,7,8,9,10,12,15,20,25,30].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="space-y-1 sm:col-span-2">
            <label className="text-[10px] uppercase font-bold tracking-widest text-text-muted ml-1">Special Requests (Optional)</label>
            <textarea name="requests" value={formData.requests} onChange={handleChange} rows={3} placeholder="Dietary requirements, special occasion, preferences..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 px-4 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 transition-colors resize-none"></textarea>
          </div>
          
          <button type="submit" className="sm:col-span-2 mt-4 w-full bg-gold text-dark font-black tracking-widest uppercase text-sm py-4 rounded-2xl hover:bg-white hover:text-dark transition-all transform hover:scale-[1.02] shadow-lg shadow-gold/10 flex items-center justify-center space-x-2">
            <span>Book Table via WhatsApp</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
