import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Mail, X, Menu, ExternalLink, Github, Linkedin, Twitter, ChevronDown, MapPin, Phone, Calendar, Award } from 'lucide-react';

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <Home size={18} />, page: 'home' },
    { name: 'About', icon: <User size={18} />, page: 'about' },
    { name: 'Portfolio', icon: <Briefcase size={18} />, page: 'portfolio' },
    { name: 'Contact', icon: <Mail size={18} />, page: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg text-gray-900' : 'bg-transparent text-white'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => setCurrentPage('home')}
          >
            <span className={`bg-gradient-to-r ${scrolled ? 'from-purple-600 to-blue-600' : 'from-purple-300 to-blue-300'} bg-clip-text text-transparent`}>
              Sudarshan Sapkota
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setCurrentPage(item.page)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 ${
                  currentPage === item.page 
                    ? scrolled 
                      ? 'bg-purple-100 text-purple-700 shadow-md' 
                      : 'bg-white/20 text-white shadow-md backdrop-blur-sm'
                    : scrolled
                      ? 'hover:bg-gray-100 text-gray-700'
                      : 'hover:bg-white/10 text-white/80 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 rounded-lg transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => { setCurrentPage(item.page); setIsOpen(false); }}
                className={`flex items-center space-x-3 w-full text-left px-6 py-4 transition-colors duration-200 ${
                  currentPage === item.page 
                    ? 'bg-purple-50 text-purple-700 border-r-4 border-purple-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = ({ setCurrentPage }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Civil Engineer', 'Problem Solver', 'Innovator', 'Designer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Sudarshan
            </span>
          </h1>
          
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-200 mb-4 h-12 flex items-center justify-center">
            <span className="mr-3">A passionate</span>
            <span className="text-purple-300 font-semibold min-w-[200px] text-left">
              {roles[currentRole]}
            </span>
          </div>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Creating impactful solutions through innovative engineering and design. 
            Bridging the gap between technology and practical applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setCurrentPage('portfolio')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center space-x-2">
                <span>View My Work</span>
                <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button
              onClick={() => setCurrentPage('contact')}
              className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center space-x-2">
                <span>Get in Touch</span>
                <Mail size={18} className="group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  const skills = [
    { name: 'Civil Engineering', level: 95 },
    { name: 'Geotechnical Engineering', level: 90 },
    { name: 'Python', level: 85 },
    { name: 'Machine Learning', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'Database Management', level: 85 },
    { name: 'API Development', level: 80 },
    { name: 'Problem Solving', level: 95 }
  ];

  const achievements = [
    { icon: <Award className="text-purple-600" />, title: "Engineering Excellence", description: "Recognition for innovative solutions" },
    { icon: <Calendar className="text-blue-600" />, title: "3+ Years Experience", description: "Continuous learning and growth" },
    { icon: <MapPin className="text-green-600" />, title: "Global Projects", description: "International collaboration" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Stats */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <img
                src="https://i.imgur.com/NUNn0EJ.jpeg"
                alt="Sudarshan Sapkota"
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover aspect-square"
              />
            </div>
            
            {/* Achievement Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="mb-2 flex justify-center">{achievement.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-sm">{achievement.title}</h4>
                  <p className="text-gray-600 text-xs">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Hello! I'm <span className="font-bold text-purple-700">Sudarshan Sapkota</span>, a passionate civil engineer dedicated to creating innovative solutions that make a real-world impact.
              </p>
              
              <p className="leading-relaxed mb-6">
                My journey began in 2022, and since then, I've been committed to continuous improvement and pushing the boundaries of what's possible in engineering and technology. I believe in the power of combining traditional engineering principles with modern technology.
              </p>
              
              <p className="leading-relaxed mb-8">
                I specialize in geotechnical engineering, machine learning applications, and full-stack development. When I'm not solving complex engineering problems, you can find me hiking in the mountains, experimenting with new technologies, or working on personal projects.
              </p>
            </div>
            
            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-1000 ease-out transform origin-left"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section Component
const PortfolioSection = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'engineering', 'web', 'ml', 'design'];

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://my-personal-website-api.onrender.com');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioItems(data);
      } catch (e) {
        console.error("Failed to fetch portfolio items:", e);
        setError("Failed to load portfolio. Please try again later.");
        // Fallback demo data
        setPortfolioItems([
          {
            id: 1,
            title: "Structural Analysis Tool",
            description: "Advanced structural analysis software for civil engineering projects with real-time calculations.",
            tags: ['Engineering', 'Python', 'Analysis'],
            category: 'engineering',
            imageUrl: null,
            link: "#"
          },
          {
            id: 2,
            title: "ML Prediction Model",
            description: "Machine learning model for predicting soil stability and foundation requirements.",
            tags: ['ML', 'Python', 'Engineering'],
            category: 'ml',
            imageUrl: null,
            link: "#"
          },
          {
            id: 3,
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website built with React and advanced animations.",
            tags: ['React', 'Web', 'Design'],
            category: 'web',
            imageUrl: null,
            link: "#"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  const filteredItems = portfolioItems.filter(item => 
    filter === 'all' || item.category === filter
  );

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my latest projects and achievements in engineering, development, and innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {loading && (
          <div className="text-center py-16">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-purple-600 border-t-transparent"></div>
            <p className="mt-4 text-purple-600 text-lg font-medium">Loading portfolio...</p>
          </div>
        )}

        {error && !portfolioItems.length && (
          <div className="text-center py-16">
            <div className="text-red-600 text-lg mb-4">{error}</div>
            <p className="text-gray-600">Showing demo projects instead.</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((project, index) => (
            <div 
              key={project.id} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl || `https://picsum.photos/400/250?random=${project.id}`}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-300"
                      >
                        <ExternalLink size={18} />
                        <span className="font-medium">View Project</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags && project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && !loading && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showNotification = (message, type) => {
    const notification = document.createElement('div');
    notification.className = `fixed top-6 right-6 p-4 rounded-lg shadow-2xl text-white z-[1000] transform transition-all duration-500 ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } translate-x-full opacity-0`;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.remove('translate-x-full', 'opacity-0');
      notification.classList.add('translate-x-0', 'opacity-100');
    }, 10);

    setTimeout(() => {
      notification.classList.remove('translate-x-0', 'opacity-100');
      notification.classList.add('translate-x-full', 'opacity-0');
      setTimeout(() => notification.remove(), 500);
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      showNotification('Please fill in all fields.', 'error');
      return;
    }

    try {
      const response = await fetch('https://my-personal-website-api.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        showNotification('Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      showNotification(`Error: ${error.message}`, 'error');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-300">hello@sudarsansapkota.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-white">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-300">Available Worldwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/sudarshan-sapkota-1675851a8/" target="_blank" rel="noopener noreferrer" 
                 className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/zealotsudarsn" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="https://x.com/sapkota48880" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-4 px-6 rounded-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Sudarshan Sapkota
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Civil Engineer & Developer passionate about creating innovative solutions that bridge technology and practical applications.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <div className="space-y-2">
            <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">About</a>
            <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Portfolio</a>
            <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Contact</a>
            <a href="#" className="block text-gray-400 hover:text-purple-400 transition-colors duration-300">Blog</a>
          </div>
        </div>
        
        {/* Connect */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Connect</h4>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/sudarshan-sapkota-1675851a8/" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/zealotsudarsn" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300">
              <Github size={18} />
            </a>
            <a href="https://x.com/sapkota48880" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300">
              <Twitter size={18} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            Let's connect and create something amazing together!
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Sudarshan Sapkota. All rights reserved. Built with ❤️ and React.
        </p>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #333;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #3b82f6);
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #2563eb);
        }
      `}</style>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main>
        {currentPage === 'home' && <HeroSection setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutSection />}
        {currentPage === 'portfolio' && <PortfolioSection />}
        {currentPage === 'contact' && <ContactSection />}
      </main>

      <Footer />
    </div>
  );
}