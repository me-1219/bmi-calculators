import React from 'react';
import { Scale } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = ({ darkMode, onThemeToggle }) => {
  return (
    <header className="text-center mb-8 animate-fade-in">
      <div className="flex justify-center items-center gap-4 mb-4">
        <div className="relative">
          <Scale className="text-blue-500" size={32} />
          <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-30 animate-pulse-soft"></div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          BMI Calculator
        </h1>
        <ThemeToggle darkMode={darkMode} onToggle={onThemeToggle} />
      </div>
      
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        Calculate your Body Mass Index and discover personalized health insights 
        to guide your wellness journey
      </p>
    </header>
  );
};

export default Header;