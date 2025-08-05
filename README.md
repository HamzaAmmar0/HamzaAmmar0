# BSNU Faculties Website

A modern, responsive website for Beni-Suef National University (BSNU) showcasing faculties, programs, and university information with dark mode support and English language interface.

## 🎯 Project Overview

This website serves as a comprehensive platform for BSNU to showcase its faculties, programs, leadership, activities, and admission information. It's designed to provide an excellent user experience for prospective students and visitors.

## ✨ Features

### 🎨 Design & User Experience
- **Modern & Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Professional UI**: Clean, modern interface with excellent typography

### 📱 Navigation & Structure
- **Fixed Navigation Bar**: Easy access to all sections
- **Mobile-Friendly Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Active Section Highlighting**: Visual feedback for current section

### 🏛️ Content Sections
1. **Home**: Hero section with faculty slideshow
2. **About the University**: Leadership profiles and information
3. **Faculties and Programs**: Interactive faculty cards with detailed modals
4. **Activities and Events**: Showcase of university events
5. **Admission Details**: Application process and requirements
6. **Technical Support**: Contact form and information

### 🎓 Faculty Features
- **Interactive Faculty Cards**: Click to view detailed information
- **Modal Windows**: Rich content display with tabs
- **Program Information**: Detailed program descriptions
- **Gallery Support**: Image galleries for each faculty
- **Three-Section Layout**: Overview, Programs, and Vision & Objectives

### 📧 Contact & Support
- **Contact Form**: Professional inbox-style form
- **Form Validation**: Client-side validation
- **Success Messages**: User feedback for form submissions
- **Contact Information**: Complete university contact details

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The website is ready to use!

### File Structure
```
bsnu-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and dark mode
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization

### Adding Faculty Images
The website uses placeholder images for faculty backgrounds. To add real images:

1. **Homepage Slideshow Images**: 
   - Recommended size: 1920x1080px (16:9 ratio)
   - Format: JPG or PNG
   - Replace placeholder URLs in the hero section

2. **Faculty Gallery Images**:
   - Main image: 800x600px
   - Thumbnails: 100x100px
   - Update image sources in faculty modals

3. **Leadership Photos**:
   - University President: 300x400px
   - Vice Presidents: 200x250px
   - Update image sources in the About section

### Content Updates
- **Faculty Information**: Edit the `facultyData` object in `script.js`
- **Leadership Information**: Update names and descriptions in `index.html`
- **Contact Information**: Modify contact details in the footer and support section

### Styling Customization
- **Colors**: Modify CSS variables in `:root` and `[data-theme="dark"]`
- **Fonts**: Change font family in the CSS
- **Spacing**: Adjust spacing variables for different layouts

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted grid layouts)
- **Mobile**: 320px-767px (single column, mobile menu)

## 🌙 Dark Mode

The website includes a complete dark mode implementation:
- **Automatic Detection**: Respects system preferences
- **Manual Toggle**: Moon/sun icon in navigation
- **Persistent Storage**: Remembers user preference
- **Smooth Transitions**: Animated theme switching

## 🔧 Technical Features

### Performance Optimizations
- **Debounced Scroll Events**: Improved performance
- **Intersection Observer**: Efficient animation triggers
- **Optimized Images**: Responsive image loading
- **Minimal Dependencies**: Only Font Awesome and Google Fonts

### Accessibility
- **Semantic HTML**: Proper heading structure
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Friendly**: Proper ARIA labels
- **High Contrast**: Readable in both themes

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📋 Image Requirements

### For Design Team
The following image dimensions are required for optimal display:

1. **Homepage Faculty Slideshow**:
   - Size: 1920x1080px (16:9 ratio)
   - Format: JPG or PNG
   - Content: Each faculty with relevant imagery
   - Quantity: 4 images (Computers, Engineering, Medicine, Business)

2. **Faculty Gallery Images**:
   - Main Image: 800x600px
   - Thumbnails: 100x100px (4 per faculty)
   - Format: JPG or PNG
   - Content: Faculty buildings, labs, students, activities

3. **Leadership Photos**:
   - University President: 300x400px (portrait)
   - Vice Presidents: 200x250px (portrait)
   - Format: JPG or PNG
   - Style: Professional headshots

4. **Activity Images**:
   - Size: 400x250px (16:10 ratio)
   - Format: JPG or PNG
   - Content: Event photos, student activities

## 🎯 Future Enhancements

### Phase 2 Features (Backend Integration)
- **Form Functionality**: Real form submission and email integration
- **Content Management**: Admin panel for content updates
- **Database Integration**: Dynamic content loading
- **User Authentication**: Admin login system

### Additional Features
- **Multi-language Support**: Arabic language option
- **News & Updates**: Blog/news section
- **Student Portal**: Student login and services
- **Online Application**: Direct application submission

## 👨‍💻 Developer Information

**Designed by Hamza Mostafa**
- Email: hamzamostafaali96@gmail.com
- GitHub: [HamzaAmmar0](https://github.com/HamzaAmmar0)
- LinkedIn: [Hamza Mostafa](https://www.linkedin.com/in/hamza-mostafa-945710271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app)

## 📄 License

This project is designed for Beni-Suef National University (BSNU) and the Student Union of BSNU.

## 🤝 Support

For technical support or questions about the website:
- Contact: info@bsnu.edu.eg
- Phone: +20 82 123 4567
- Working Hours: Sunday - Thursday, 8:00 AM - 4:00 PM

---

**Note**: This is a frontend prototype (Phase 1). The contact form is currently for demonstration purposes and does not send actual emails. Backend integration will be implemented in Phase 2.
