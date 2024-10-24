import { ImgHTMLAttributes } from 'react';

export default function ApplicationLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img
            {...props}
            src="/img/logo.png"
            alt="Logo"
            className="w-[200px] h-auto" // La largeur est maintenant définie à 50%
        />
    );
}
