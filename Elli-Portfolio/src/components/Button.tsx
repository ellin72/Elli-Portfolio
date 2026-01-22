import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseClasses = 'inline-block font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-white text-primary-indigo hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary-indigo',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-indigo hover:-translate-y-0.5 focus:ring-white',
    outline: 'bg-transparent text-primary-indigo border-2 border-primary-indigo hover:bg-primary-indigo hover:text-white hover:-translate-y-0.5 focus:ring-primary-indigo',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`;
  
  if (href && !disabled) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
