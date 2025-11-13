'use client';

import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Navigation() {
  const t = useTranslations('nav');

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold">AD</span>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-sm hover:text-gray-600 transition-colors">
                {t('home')}
              </a>
              <a href="#about" className="text-sm hover:text-gray-600 transition-colors">
                {t('about')}
              </a>
              <a href="#projects" className="text-sm hover:text-gray-600 transition-colors">
                {t('projects')}
              </a>
              <a href="#contact" className="text-sm hover:text-gray-600 transition-colors">
                {t('contact')}
              </a>
            </div>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
