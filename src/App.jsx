import React, { useState, useEffect } from 'react';

// --- Icons (using Lucide React for modern icons) ---
// Note: In a real project, you'd import specific icons.
// For this example, we'll simulate them or use simple text.
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><path d="M12 12h.01"/></svg>;
const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;
const XIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>;

// --- Components ---

// Navbar Component
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: <HomeIcon />, page: 'home' },
    { name: 'About', icon: <UserIcon />, page: 'about' },
    { name: 'Portfolio', icon: <BriefcaseIcon />, page: 'portfolio' },
    { name: 'Contact', icon: <MailIcon />, page: 'contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold font-inter cursor-pointer" onClick={() => setCurrentPage('home')}>
          Sudarshan Sapkota
        </div>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setCurrentPage(item.page)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-300
                ${currentPage === item.page ? 'bg-purple-700 text-white shadow-md' : 'hover:bg-purple-500 hover:text-white'}`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-purple-700 mt-4 rounded-lg shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { setCurrentPage(item.page); setIsOpen(false); }}
              className={`flex items-center space-x-2 w-full text-left px-4 py-3 border-b border-purple-600 last:border-b-0
                ${currentPage === item.page ? 'bg-purple-800 text-white' : 'hover:bg-purple-600'}`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// Hero Section Component
const HeroSection = ({ setCurrentPage }) => (
  <section className="relative h-screen flex items-center justify-center bg-cover bg-center text-white"
    style={{ backgroundImage: "url('https://i.imgur.com/z9SzZqZ.png')" }}>
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div className="z-10 text-center p-6 mx-auto max-w-4xl"> {/* ADDED max-w-4xl HERE */}
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
        Hi, I'm <span className="text-purple-300">Sudarshan Sapkota</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up delay-200">
        A passionate passionate civil enginner creating impactful solutions.
      </p>
      <div className="space-x-4 animate-fade-in-up delay-400">
        <button
          onClick={() => setCurrentPage('portfolio')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </button>
        <button
          onClick={() => setCurrentPage('contact')}
          className="border border-white hover:bg-white hover:text-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Get in Touch
        </button>
      </div>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section id="about" className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img
            src="https://i.imgur.com/NUNn0EJ.jpeg"
            alt="Your Photo"
            className="rounded-full shadow-xl w-64 h-64 mx-auto object-cover border-4 border-purple-500"
          />
        </div>
        <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed">
          <p className="mb-4">
            Hello! I'm <span className="font-semibold text-purple-700">Sudarshan Sapkota</span>, a civil engineer with a passion for change. My journey in design began 2022 and since then, I've been dedicated to make myself better everyday.
          </p>
          <p className="mb-4">
            I specialize in creation, design, engineering, machine learning, and AI. I thrive on solving complex problems and creating elegant, user-friendly solutions. I believe in continuous learning and adapting to new technologies.
          </p>
          <p>
            Outside of work, you can find me hiking in the mountains, experimenting with new recipes, riding. I'm always looking for new challenges and opportunities to grow.
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">My Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Engineering', 'Civil Engineering', 'Python', 'Geotechnical Engineeing', 'Javascript', 'Machine Learning',
              'Design', 'Database Management', 'API Development', 'Problem Solving'
            ].map((skill, index) => (
              <span key={index} className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Portfolio Section Component
const PortfolioSection = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend URL
        const response = await fetch('https://my-personal-website-api.onrender.com');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPortfolioItems(data);
      } catch (e) {
        console.error("Failed to fetch portfolio items:", e);
        setError("Failed to load portfolio. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Portfolio</h2>
        {loading && (
          <div className="text-center text-purple-600 text-lg">Loading portfolio...</div>
        )}
        {error && (
          <div className="text-center text-red-600 text-lg">{error}</div>
        )}
        {!loading && !error && portfolioItems.length === 0 && (
          <div className="text-center text-gray-600 text-lg">No portfolio items available yet. Check back soon!</div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((project) => (
            <div key={project.id} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={project.imageUrl || `https://placehold.co/600x400/a78bfa/ffffff?text=${project.title.replace(/\s/g, '+')}`}
                alt={project.title}
                className="w-full h-48 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/600x400/a78bfa/ffffff?text=${project.title.replace(/\s/g, '+')}`; }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags && project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold transition-colors duration-300"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 0 002 2h10a2 0 002-2v-4m-4 0h6m0 0-6-6m6 6L14 10" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // 'idle', 'loading', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      // Using a custom message box instead of alert()
      showMessageBox('Please fill in all fields.', 'error');
      return;
    }

    try {
      // Replace with your actual backend URL
      const response = await fetch('https://my-personal-website-api.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        showMessageBox('Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
      showMessageBox(`Error: ${error.message}`, 'error');
    }
  };

  // Custom Message Box Function (instead of alert)
  const showMessageBox = (message, type) => {
    const messageBox = document.createElement('div');
    messageBox.className = `fixed top-4 right-4 p-4 rounded-lg shadow-xl text-white z-[1000] transition-all duration-300 transform ${
      type === 'success' ? 'bg-green-600' : 'bg-red-600'
    } opacity-0 translate-y-[-20px]`;
    messageBox.textContent = message;

    document.body.appendChild(messageBox);

    // Animate in
    setTimeout(() => {
      messageBox.classList.remove('opacity-0', 'translate-y-[-20px]');
      messageBox.classList.add('opacity-100', 'translate-y-0');
    }, 10);

    // Animate out and remove after 3 seconds
    setTimeout(() => {
      messageBox.classList.remove('opacity-100', 'translate-y-0');
      messageBox.classList.add('opacity-0', 'translate-y-[-20px]');
      setTimeout(() => messageBox.remove(), 500); // Remove after transition
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Me</h2>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-700 text-lg mb-6 text-center">
            Have a question or want to collaborate? Feel free to reach out!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center px-6">
      <p className="mb-4 text-lg font-semibold">Connect with me:</p>
      <div className="flex justify-center space-x-6 mb-6">
        {/* Replace with your actual social media links */}
        <a href="https://www.linkedin.com/in/sudarshan-sapkota-1675851a8/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="https://github.com/zealotsudarsn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.909-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.359-1.088.65-1.336-2.22-.253-4.555-1.113-4.555-4.953 0-1.096.391-1.993 1.024-2.694-.103-.253-.446-1.272.097-2.662 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.39.202 2.409.097 2.662.633.701 1.024 1.598 1.024 2.694 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.336-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.523 2 12 2z" clipRule="evenodd"/></svg>
        </a>
        <a href="https://x.com/sapkota48880" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
          <svg fill="currentColor" viewBox="0 0 24 24" className="h-7 w-7"><path d="M22.162 5.656a8.384 8.384 0 0 1-2.357.646 4.192 4.192 0 0 0 1.825-2.27c-.8-.474-1.68-.79-2.618-.914a4.192 4.192 0 0 0-7.147 3.814 11.815 11.815 0 0 1-8.601-4.37c-.447.762-.697 1.643-.697 2.585a4.192 4.192 0 0 0 1.857 3.483 4.187 4.187 0 0 1-1.894-.523v.052a4.194 4.194 0 0 0 3.352 4.104 4.192 4.192 0 0 1-1.89.072 4.194 4.194 0 0 0 3.92 2.906 8.397 8.397 0 0 1-5.197 1.791 11.816 11.816 0 0 0 6.417 1.879c7.693 0 11.9-6.376 11.9-11.9 0-.182-.004-.363-.012-.543a8.496 8.496 0 0 0 2.086-2.177z"/></svg>
        </a>
      </div>
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Sudarshan Sapkota. All rights reserved.
      </p>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Tailwind CSS classes for animations
  const tailwindAnimations = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out forwards;
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    .delay-200 { animation-delay: 0.2s; }
    .delay-400 { animation-delay: 0.4s; }
  `;

  return (
    <div className="min-h-screen flex flex-col font-inter">
      {/* Inject Tailwind CSS CDN and custom styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f8fafc; /* Light gray background */
          }
          ${tailwindAnimations}
        `}
      </style>
      <script src="https://cdn.tailwindcss.com"></script>

      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        {/* Conditional rendering for pages */}
        {currentPage === 'home' && <HeroSection setCurrentPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutSection />}
        {currentPage === 'portfolio' && <PortfolioSection />}
        {currentPage === 'contact' && <ContactSection />}
      </main>

      <Footer />
    </div>
  );
}