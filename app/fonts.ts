import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Righteous } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
});

export const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
});