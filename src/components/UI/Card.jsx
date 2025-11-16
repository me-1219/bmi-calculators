import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  const baseStyles = 'rounded-2xl p-8 shadow-xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/50',
    glass: 'glass-effect bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30',
    elevated: 'bg-white dark:bg-gray-800 shadow-2xl border border-gray-100 dark:border-gray-700'
  };

  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;