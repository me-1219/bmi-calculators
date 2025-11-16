import React from 'react';
import { Moon, Sun } from 'lucide-react';
import Button from '../UI/Button';

const ThemeToggle = ({ darkMode, onToggle }) => {
  return (
    <div className="absolute top-4 right-4 z-50">
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="rounded-full w-14 h-14 p-0 flex items-center justify-center
                   shadow-md hover:shadow-lg 
                   bg-white/70 dark:bg-gray-800/70 
                   backdrop-blur-md transition-all duration-300"
      >
        {darkMode ? (
          <Sun className="text-yellow-400" size={26} />
        ) : (
          <Moon className="text-gray-600 dark:text-gray-300" size={26} />
        )}
      </Button>
    </div>
  );
};

export default ThemeToggle;
