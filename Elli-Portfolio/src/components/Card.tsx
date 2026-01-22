import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const baseClasses = 'bg-white rounded-xl shadow-lg overflow-hidden';
  const hoverClasses = hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-2' : '';
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  return <div className={classes}>{children}</div>;
};

export default Card;
