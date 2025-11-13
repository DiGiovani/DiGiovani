import { routing } from '@/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return children;
}
