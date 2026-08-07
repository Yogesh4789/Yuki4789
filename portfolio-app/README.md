# Professional Developer Portfolio

A premium, modern, and highly interactive developer portfolio built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion. 

![Portfolio Preview](./public/og-image.png)

## 🚀 Features

- **Premium Design System**: Custom design tokens, typography, and dark mode optimizations
- **High-Performance Animations**: 60fps animations using Framer Motion and optimized Canvas backgrounds
- **Interactive UI**: Magnetic buttons, custom cursor, smooth scrolling, and glow effects
- **Fully Responsive**: Flawless experience across all device sizes
- **SEO Optimized**: Built-in metadata, sitemap, and robots.txt generation
- **Easy Customization**: All content is centralized in a single `data.ts` file

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide Icons](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)

## 🏃‍♂️ Getting Started

### 1. Installation

Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Setup

Create a `.env.local` file in the root directory and add your EmailJS credentials (required for the contact form to work):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 3. Customization

1. Open `src/content/data.ts` and update all the personal information, projects, and skills.
2. Replace the placeholder images in the `public/` directory (e.g., `resume.pdf`, profile picture).

### 4. Development Server

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

The easiest way to deploy this portfolio is to use [Vercel](https://vercel.com/new). 

1. Push your code to a GitHub repository
2. Import the project into Vercel
3. Add your `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel dashboard
4. Deploy!

For a custom domain, configure it in the Vercel project settings under "Domains".

## 📄 License

This project is open-source and available under the MIT License.
