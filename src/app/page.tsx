// app/page.tsx (Home)
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="relative w-64 h-64 rounded-full border-4 border-red-600/50 overflow-hidden">
          <Image
            src="/profile.jpg"
            alt="Ahsan Paracha"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Frontend Developer
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Crafting modern web experiences with Next.js, TypeScript, and Tailwind CSS.
            Passionate about building responsive, performant applications with clean code architecture.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-lg transition-colors">
              Get in Touch
            </Link>
            <Link href="/about" className="border border-red-600/50 hover:border-red-600 px-8 py-3 rounded-lg transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}