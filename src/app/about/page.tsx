// app/about/page.tsx
import { GraduationCap, Code, Palette } from 'lucide-react';

export default function About() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="space-y-8">
          <div className="bg-black/50 p-6 rounded-xl border border-red-600/20">
            <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4 text-gray-400">
              <p><span className="text-red-500">Name:</span> Ahsan Paracha</p>
              <p><span className="text-red-500">Email:</span> ahsanirfanparacha@gmail.com</p>
              <p><span className="text-red-500">Location:</span> Karachi, Pakistan</p>
              <p><span className="text-red-500">Education:</span> ICS (Expected 2026)</p>
            </div>
          </div>

          <div className="bg-black/50 p-6 rounded-xl border border-red-600/20">
            <h3 className="text-2xl font-semibold mb-6">Technical Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Code, title: 'Web Development', skills: ['Next.js', 'TypeScript', 'React'] },
                { icon: Palette, title: 'Design', skills: ['Tailwind CSS', 'Photoshop', 'UI/UX'] },
                { icon: GraduationCap, title: 'Education', skills: ['Computer Science', '2026 Graduation'] },
              ].map((item, idx) => (
                <div key={idx} className="p-4 border border-red-600/20 rounded-lg">
                  <item.icon className="h-8 w-8 text-red-600 mb-4" />
                  <h4 className="text-xl font-medium mb-2">{item.title}</h4>
                  <ul className="space-y-1 text-gray-400">
                    {item.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-600 rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}