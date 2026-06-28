import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm font-sans animate-fade-in">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />
      
      {/* Modal Box */}
      <div className="relative max-w-4xl w-full bg-[#121318]/95 backdrop-blur-xl rounded-2xl border border-zinc-800/80 shadow-2xl overflow-hidden z-10 animate-scale-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white bg-zinc-900/40 hover:bg-zinc-800/50 p-1.5 rounded-lg border border-zinc-800/50 transition-all cursor-pointer z-50"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Slot */}
        {children}
        
      </div>
    </div>
  );
};

export default Modal;