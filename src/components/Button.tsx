import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    href?: string;
    to?: string;
    target?: string;
    rel?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    className?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = ({
    children,
    onClick,
    href,
    to,
    target,
    rel,
    variant = 'primary',
    className = '',
    disabled = false,
    type = 'button',
    size = 'md',
}: ButtonProps) => {
    const baseStyles = 'font-semibold rounded-xl transition-colors duration-200 inline-flex items-center justify-center gap-2';

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const variantStyles = {
        primary: 'bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-md',
        secondary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-md',
        outline: 'border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30',
        ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
    };

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`;

    if (to) {
        return (
            <Link
                to={to}
                className={combinedClassName}
            >
                {children}
            </Link>
        );
    }

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={combinedClassName}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={combinedClassName}
        >
            {children}
        </button>
    );
};
