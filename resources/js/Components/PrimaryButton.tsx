import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center rounded-[30px] border border-transparent bg-[#88AE75] text-white px-7 py-3 text-xs sm:text-[14px] font-semibold uppercase tracking-widest transition duration-150 ease-in-out hover:bg-[#CD8B76] focus:bg-[#CD8B76] focus:outline-none focus:ring-2 focus:ring-[#88AE75] focus:ring-offset-2 active:bg-[#CD8B76] ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
