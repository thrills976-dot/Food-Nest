import { MessageCircle } from 'lucide-react';

export default function WhatsAppCTA() {
  return (
    <a
      href="https://wa.me/263784233075?text=Hello%20Food%20Nest!%20I%20would%20like%20to%20make%20an%20order/booking."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg shadow-black/50 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/20 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded shadow-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none transform translate-x-2 group-hover:translate-x-0 duration-300">
        Order via WhatsApp
        <div className="absolute top-1/2 -mt-1 -right-2 border-4 border-transparent border-l-white"></div>
      </span>
      
      {/* Highlight ring animation */}
      <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-50"></span>
    </a>
  );
}
