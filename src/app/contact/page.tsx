// app/contact/page.tsx
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          Let&apos;s Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/20 rounded-lg">
                <Mail className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-400">ahsanirfanparacha@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/20 rounded-lg">
                <Phone className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-400">+92 340 8669793</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-600/20 rounded-lg">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-400">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Name"
                className="w-full bg-black/50 border border-red-600/20 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Email"
                className="w-full bg-black/50 border border-red-600/20 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
              />
            </div>
            <div>
              <textarea 
                placeholder="Message"
                rows={4}
                className="w-full bg-black/50 border border-red-600/20 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}