// components/Header.tsx
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/20/solid'; // Updated import path

export default function Header() {
  return (
    <header className="bg-black/90 sticky top-0 z-50 border-b border-red-600/30">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <CodeBracketIcon className="h-8 w-8 text-red-600 group-hover:text-red-500 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Ahsan Paracha
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-red-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}