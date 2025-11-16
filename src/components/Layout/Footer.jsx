import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
        <span>Made with</span>
        <Heart size={16} className="text-red-500 animate-bounce-soft" />
        <span>using React + Vite + Tailwind CSS</span>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
        For educational and health awareness purposes
      </p>
    </footer>
  );
};

export default Footer;