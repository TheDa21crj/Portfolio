import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'The Creator Blueprint', description: 'A clear path to start, grow, and sustain your creative career.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
