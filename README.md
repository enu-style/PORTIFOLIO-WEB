# Enyew Getnet - Portfolio Website

A modern, responsive portfolio website built with React for Enyew Getnet, a 3rd-year Software Engineering student at Injibara University.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Components**: Hover effects, smooth scrolling, and dynamic navigation
- **Contact Form**: Frontend contact form (ready for backend integration)
- **Project Showcase**: Display of academic and personal projects
- **Skills Section**: Visual representation of technical skills
- **GitHub Integration**: Link to GitHub profile with call-to-action

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Background and goals
3. **Skills Section**: Technical skills with icons
4. **Projects Section**: Portfolio of projects with tech stacks
5. **GitHub Section**: Link to GitHub profile
6. **Contact Section**: Contact form and social links
7. **Footer**: Copyright and credits

## Tech Stack

- React 18
- Vite (Build tool)
- React Icons
- CSS3 with custom properties
- Responsive design with CSS Grid and Flexbox

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Customization

### Update Personal Information

1. **Contact Email**: Update in `src/components/Contact.jsx`
2. **GitHub URL**: Update in `src/components/Hero.jsx` and `src/components/GitHub.jsx`
3. **LinkedIn URL**: Update in `src/components/Hero.jsx` and `src/components/Contact.jsx`

### Add Your Resume

Replace `public/resume.pdf` with your actual resume PDF file.

### Update Projects

Edit the `projects` array in `src/components/Projects.jsx` to add or modify projects.

### Integrate Contact Form

To make the contact form functional, you can integrate with:

- **Formspree**: Add your Formspree endpoint to the form action
- **EmailJS**: Follow EmailJS documentation to set up email sending
- **Custom Backend**: Create your own API endpoint

Example with Formspree:
```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite configuration

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://enyewgetnet.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

Enyew Getnet - enyew@example.com

GitHub: [@enyewgetnet](https://github.com/enyewgetnet)
