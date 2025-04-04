# BLOOM - Premium Floral Arrangements

![BLOOM Logo](./src/assets/logo.png)

## Overview

BLOOM is a luxury e-commerce platform for a high-end floral shop, offering premium flower arrangements, plants, and gifts. The website features an elegant, responsive design that showcases the beauty of floral products with a focus on premium aesthetics and user experience.

## Features

- **Luxurious UI/UX Design**: Modern, elegant interface with subtle animations and premium styling
- **Responsive Layout**: Fully responsive design that works beautifully across all devices
- **Product Showcase**: Dynamic product galleries with filtering and sorting capabilities
- **Interactive Elements**: Smooth animations, carousels, and hover effects
- **Shopping Experience**: Intuitive cart and checkout process

## Technology Stack

- **Frontend**: React.js
- **Styling**: Custom CSS with modern features
- **Animations**: CSS transitions and keyframe animations
- **Responsive Design**: Media queries for all device sizes
- **Performance**: Optimized images and lazy loading

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bloom-flowers.git
   cd bloom-flowers
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
bloom-flowers/
├── public/             # Public assets and index.html
├── src/                # Source files
│   ├── assets/         # Static assets (images, fonts)
│   ├── components/     # React components
│   │   ├── Home/       # Home page components
│   │   ├── Products/   # Product page components
│   │   ├── Navbar/     # Navigation components
│   │   └── ...         # Other components
│   ├── Pictures/       # Product and content images
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
└── package.json        # Dependencies and scripts
```

## Design Decisions

The design focuses on elegance and luxury, with:

- **Color Palette**: Soft, earthy tones with gold accents
- **Typography**: Serif fonts for headings (Playfair Display) and sans-serif for body text (Inter)
- **Spacing**: Generous whitespace for a premium feel
- **Animations**: Subtle animations to enhance the user experience
- **Imagery**: High-quality product photography with consistent styling

## Customization

The website uses CSS variables for easy customization:

```css
:root {
  --primary-color: #d4a373;
  --secondary-color: #e9c46a;
  --accent-color: #ccd5ae;
  --text-color: #4a4a4a;
  --light-color: #fefaf6;
  --dark-color: #434343;
}
```

## Deployment

This site can be deployed to any static hosting service:

1. Build the production version:
   ```
   npm run build
   # or
   yarn build
   ```

2. Deploy the contents of the `dist` folder to your hosting provider

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- All floral arrangements and product designs are the property of BLOOM
- Photography credits to respective photographers
- Icons provided by [Feather Icons](https://feathericons.com/)
