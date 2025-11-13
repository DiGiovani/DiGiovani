'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'pt', label: 'PT' },
  { code: 'es', label: 'ES' },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split('/')[1];

  const switchLanguage = (locale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={currentLocale === lang.code ? 'default' : 'outline'}
          onClick={() => switchLanguage(lang.code)}
          className="w-12 h-8 text-xs"
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
}
