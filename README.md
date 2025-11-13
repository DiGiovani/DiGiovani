# Alex DiGiovani - Portfolio

A modern, minimalist personal portfolio built with Next.js, featuring multi-language support and responsive design.

## 🚀 Features

- **Next.js 16** - Latest version with App Router and Turbopack
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Modern utility-first CSS framework
- **Shadcn UI** - Beautiful, accessible component library
- **next-intl** - Internationalization support (English, Portuguese, Spanish)
- **ReactBits** - Animated React components integration
- **Responsive Design** - Mobile-first, works on all devices
- **Black & White Theme** - Clean, minimalist aesthetic

## 🌐 Internationalization

The portfolio supports three languages:
- 🇺🇸 English (default)
- 🇧🇷 Portuguese
- 🇪🇸 Spanish

Language switching is available via the navigation bar.

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/DiGiovani/DiGiovani.git

# Navigate to the project directory
cd DiGiovani

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── [locale]/          # Locale-specific pages
│   │   │   ├── layout.tsx     # Locale layout with i18n
│   │   │   ├── page.tsx       # Main portfolio page
│   │   │   └── globals.css    # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── ui/                # Shadcn UI components
│   │   ├── Navigation.tsx     # Main navigation
│   │   ├── LanguageSwitcher.tsx
│   │   └── AnimatedCard.tsx   # ReactBits-inspired component
│   ├── lib/
│   │   └── utils.ts           # Utility functions
│   ├── messages/              # Translation files
│   │   ├── en.json
│   │   ├── pt.json
│   │   └── es.json
│   ├── i18n.ts                # i18n configuration
│   ├── routing.ts             # Routing configuration
│   └── middleware.ts          # Next.js middleware for i18n
├── public/                    # Static assets
└── package.json
```

## 🎨 Design Philosophy

- **Minimalist**: Clean black and white color scheme
- **Responsive**: Mobile-first design that scales beautifully
- **Accessible**: Built with accessibility in mind using Shadcn UI
- **Performance**: Optimized with Next.js 16 and Turbopack

## 📝 Customization

### Adding a New Language

1. Create a new translation file in `src/messages/` (e.g., `fr.json`)
2. Add the locale to `src/routing.ts`:
   ```typescript
   locales: ['en', 'pt', 'es', 'fr']
   ```
3. Update the middleware matcher in `src/middleware.ts`
4. Add the language to the switcher in `src/components/LanguageSwitcher.tsx`

### Modifying Content

Edit the translation files in `src/messages/` to update portfolio content in different languages.

## 📄 License

This is a personal portfolio. Feel free to use it as inspiration for your own projects.

## 📧 Contact

- Email: [alexsandro.dgjr@gmail.com](mailto:alexsandro.dgjr@gmail.com)
- LinkedIn: [/in/alexsandrodgjr](https://www.linkedin.com/in/alexsandrodgjr/)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [ReactBits](https://reactbits.dev/)
