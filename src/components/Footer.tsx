import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark/80 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
        <div className="space-y-4">
          <Link to="/" className="inline-block flex items-center space-x-2">
             <span className="font-display text-2xl font-bold tracking-tight text-white">Food Nest <span className="text-gold italic">Restaurant</span></span>
          </Link>
          <p className="text-text-muted leading-relaxed">
            Experience the rich, authentic taste of West African dishes, premium grilled steaks, seafood, and international comfort meals right here in Harare.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-lg font-semibold text-white">Contact</h4>
          <ul className="space-y-3 text-text-muted">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span>Longcheng Plaza<br/>Harare, Zimbabwe</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <span>+263 784 233 075</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-lg font-semibold text-white">Opening Hours</h4>
          <ul className="space-y-3 text-text-muted">
            <li className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-gold shrink-0" />
              <span>Monday - Sunday<br/>8:00 AM – 10:00 PM</span>
            </li>
            <li className="mt-2">
              <span className="inline-block px-3 py-1 bg-gold/10 text-gold border border-gold/20 rounded-full text-xs font-semibold">Open Daily</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display text-lg font-semibold text-white">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors border border-white/10">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-dark transition-colors border border-white/10">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <div className="pt-4">
            <a href="https://wa.me/263784233075" className="inline-block items-center justify-center w-full px-4 py-3 bg-white/5 border border-white/10 text-center rounded text-white hover:border-gold transition-colors">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 pt-8 border-t border-white/5 text-center text-text-muted text-xs">
        &copy; {new Date().getFullYear()} Food Nest Restaurant. All rights reserved.
      </div>
    </footer>
  );
}
