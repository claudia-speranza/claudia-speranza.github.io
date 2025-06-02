# Personal Website

My personal website built with TypeScript and React that serves as an interactive resume/CV.

## Features

- **Responsive Design**: Looks great on all devices
- **TypeScript**: Type-safe code throughout the application
- **Component-Based**: Built with React using functional components
- **Modern Stack**: Uses modern web development tools and practices
- **Easy to Customize**: Simple data structure to update your personal information
- **Clean UI**: Professional and minimalist design

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:
```bash
npm install
```
or
```bash
yarn install
```

### Development

Run the development server:
```bash
npm start
```
or
```bash
yarn start
```

This will start the development server at [http://localhost:3000](http://localhost:3000).

### Production Build

Build for production:
```bash
npm run build
```
or
```bash
yarn build
```

The build files will be in the `dist` directory.

## Customization

### Personal Information

Edit the data files in `src/data/resume.ts` to update your:
- Personal information
- Experience
- Education
- Skills
- Projects

### Styling

The styles are written in SCSS and can be found in `src/styles/main.scss`. You can change the color scheme by modifying the CSS variables in the `:root` selector.

## Project Structure

```
personal-website/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── data/           # Content data
│   ├── styles/         # SCSS styles
│   ├── types/          # TypeScript interfaces
│   └── index.ts        # Entry point
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── webpack.config.js   # Webpack configuration
```

## Deployment

This project can be deployed to various hosting platforms:

### Netlify

1. Push to GitHub
2. Connect your GitHub repository to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Vercel

1. Push to GitHub
2. Import your GitHub repository to Vercel
3. The default settings should work automatically

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
