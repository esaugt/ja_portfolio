import { Poiret_One, Inria_Serif } from 'next/font/google';

export const poiret = Poiret_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-poiret',
    display: 'swap',
});

export const inria = Inria_Serif({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-inria',
    display: 'swap',
});
