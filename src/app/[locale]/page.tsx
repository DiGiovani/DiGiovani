import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedCard } from '@/components/AnimatedCard';

export default function Home() {
  const t = useTranslations();

  const skills = [
    'JavaScript / TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Python',
    'FastAPI',
    'Figma'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {t('home.title')}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-4">
            {t('home.subtitle')}
          </p>
          <p className="text-lg text-gray-500">
            {t('home.description')}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">{t('about.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{t('about.intro')}</p>
                <p className="text-gray-600">🔭 {t('about.current')}</p>
                <p className="text-gray-600">📚 {t('about.education')}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>{t('about.skills')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-black text-white text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">{t('nav.projects')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnimatedCard key={i}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Project {i}</CardTitle>
                    <CardDescription>Coming soon</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Project description will be added here.</p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">{t('contact.title')}</h2>
          <div className="max-w-xl">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>Feel free to reach out for collaborations or just a friendly chat</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">{t('contact.email')}</p>
                  <a 
                    href="mailto:alexsandro.dgjr@gmail.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    alexsandro.dgjr@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold mb-2">{t('contact.linkedin')}</p>
                  <a 
                    href="https://www.linkedin.com/in/alexsandrodgjr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    /in/alexsandrodgjr
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Alex DiGiovani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
