import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const PROTEINS = [
  { id: 'steak', name: 'Premium Steak', price: 12 },
  { id: 'ribs', name: 'BBQ Pork Ribs', price: 10 },
  { id: 'chicken', name: 'Grilled Chicken', price: 8 },
  { id: 'seafood', name: 'Grilled Bream Fish', price: 11 }
];

const SIDES = [
  { id: 'chips', name: 'Crispy Chips', price: 3 },
  { id: 'rice', name: 'Fried Rice', price: 3 },
  { id: 'salad', name: 'Side Salad', price: 2 }
];

export default function PlatterBuilder() {
  const [proteins, setProteins] = useState<string[]>([]);
  const [sides, setSides] = useState<string[]>([]);

  const toggleProtein = (id: string) => {
    if (proteins.includes(id)) {
      setProteins(proteins.filter(p => p !== id));
    } else if (proteins.length < 4) {
      setProteins([...proteins, id]);
    }
  };

  const toggleSide = (id: string) => {
    if (sides.includes(id)) {
      setSides(sides.filter(s => s !== id));
    } else if (sides.length < 2) {
      setSides([...sides, id]);
    }
  };

  const total = proteins.reduce((sum, p) => sum + PROTEINS.find(x => x.id === p)!.price, 0) +
                sides.reduce((sum, s) => sum + SIDES.find(x => x.id === s)!.price, 0);

  const isValid = proteins.length >= 2;

  const getWhatsAppUrl = () => {
    const pNames = proteins.map(p => PROTEINS.find(x => x.id === p)!.name).join(', ');
    const sNames = sides.map(s => SIDES.find(x => x.id === s)!.name).join(', ');
    const text = `Hello Food Nest! I'd like to order a *Custom Build-Your-Own Platter* with:\n\n*Meats:* ${pNames}\n*Sides:* ${sNames || 'None'}\n\n*Price Estimate:* $${total}.`;
    return `https://wa.me/263784233075?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-darker border border-gold/20 p-6 lg:p-8 rounded-3xl mt-12 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <h3 className="font-display text-2xl font-black text-white mb-2">Build Your Own Platter</h3>
      <p className="text-text-muted text-sm mb-8 font-medium max-w-xl">Customize your ultimate feast. Choose 2 to 4 grilled meats and up to 2 sides. Our chefs will prepare the perfect platter for you.</p>

      {/* Proteins Selection */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">1. Choose Meats (Select 2-4)</h4>
          <span className="text-gold text-xs font-bold">{proteins.length}/4 Selected</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PROTEINS.map(item => {
            const isSelected = proteins.includes(item.id);
            const isDisabled = !isSelected && proteins.length >= 4;
            return (
              <button
                key={item.id}
                onClick={() => toggleProtein(item.id)}
                disabled={isDisabled}
                className={`flex items-center justify-between p-4 rounded-xl border text-left transition-all ${isSelected ? 'bg-gold/10 border-gold/50 cursor-pointer' : isDisabled ? 'bg-white/5 border-transparent opacity-50 cursor-not-allowed' : 'bg-white/5 border-transparent hover:border-white/20 cursor-pointer'}`}
              >
                <div>
                  <span className={`block font-bold mb-1 ${isSelected ? 'text-gold' : 'text-white'}`}>{item.name}</span>
                  <span className="text-xs text-text-muted">+${item.price}</span>
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border ${isSelected ? 'bg-gold border-gold text-dark' : 'border-white/20 bg-transparent'}`}>
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Sides Selection */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h4 className="font-bold text-white uppercase tracking-widest text-xs">2. Choose Sides (Select up to 2)</h4>
          <span className="text-gold text-xs font-bold">{sides.length}/2 Selected</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SIDES.map(item => {
            const isSelected = sides.includes(item.id);
            const isDisabled = !isSelected && sides.length >= 2;
            return (
              <button
                key={item.id}
                onClick={() => toggleSide(item.id)}
                disabled={isDisabled}
                className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${isSelected ? 'bg-gold/10 border-gold/50 cursor-pointer' : isDisabled ? 'bg-white/5 border-transparent opacity-50 cursor-not-allowed' : 'bg-white/5 border-transparent hover:border-white/20 cursor-pointer'}`}
              >
                <div>
                  <span className={`block font-bold text-sm ${isSelected ? 'text-gold' : 'text-white'}`}>{item.name}</span>
                  <span className="text-xs text-text-muted">+${item.price}</span>
                </div>
                <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${isSelected ? 'bg-gold border-gold text-dark' : 'border-white/20 bg-transparent'}`}>
                  {isSelected && <Check className="w-3 h-3" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Action Area */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-dark p-6 rounded-2xl border border-white/5 mt-4">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <p className="text-text-muted text-xs font-bold uppercase tracking-widest mb-1">Estimated Total</p>
          <p className="font-display text-4xl font-black text-white">${total}</p>
        </div>
        
        {isValid ? (
          <a
            href={getWhatsAppUrl()}
            className="flex items-center justify-center space-x-2 bg-gold text-dark px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-lg shadow-gold/20"
          >
            <span>Order Custom Platter</span>
            <ArrowRight className="w-4 h-4 text-dark" />
          </a>
        ) : (
          <div className="px-8 py-4 bg-white/5 text-text-muted rounded-xl text-xs font-bold uppercase tracking-widest flex items-center justify-center border border-white/10 text-center">
            Select at least 2 meats
          </div>
        )}
      </div>
    </div>
  );
}
