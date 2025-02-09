// components/Footer.tsx
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/20/solid';

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-red-600/30 mt-12">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <CodeBracketIcon className="h-6 w-6 text-red-600" />
            <span className="text-lg font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              Ahsan Paracha
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-gray-400">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <Link href="/about" className="hover:text-red-500 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">Contact</Link>
          </div>
          
          <p className="text-gray-400 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Ahsan Paracha. All rights reserved.
          </p>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Built with Next.js, Tailwind CSS, and <span role="img" aria-label="love">❤️</span></p>
        </div>
      </div>
    </footer>
  );
}