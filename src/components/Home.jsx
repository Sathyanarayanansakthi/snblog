import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import Cards from "../components/Cards"; // Importing the updated Card component

const Home = () => {
  const blogPosts = [
    { 
      title: "Understanding React Hooks", 
      description: "A deep dive into hooks and how they simplify state management.", 
      image: "https://source.unsplash.com/400x300/?technology",
      content: "React Hooks were introduced in React 16.8. They allow you to use state and lifecycle features without writing a class component..."
    },
    { 
      title: "Mastering CSS Grid", 
      description: "A comprehensive guide to layout building with CSS Grid.", 
      image: "https://source.unsplash.com/400x300/?design",
      content: "CSS Grid Layout is a two-dimensional layout system for the web. It allows developers to create powerful, responsive grids..."
    },
    { 
      title: "Framer Motion for React", 
      description: "Adding smooth animations to your React projects with Framer Motion.", 
      image: "https://source.unsplash.com/400x300/?motion",
      content: "Framer Motion is a popular animation library for React. It provides powerful features such as variants, gestures, and scroll animations..."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-gray-50">
      
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 rounded-b-lg shadow-md bg-white/70 backdrop-blur-md"
      >
        <h1 className="text-3xl font-extrabold text-blue-600">SN Blog</h1>
        <div className="space-x-6 text-lg">
          <a href="#" className="text-gray-700 transition hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 transition hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 transition hover:text-blue-600">Contact</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative text-center py-28 bg-gradient-to-r from-blue-300 via-white to-purple-300"
      >
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900">
          Welcome to SN Blog
        </h1>
        <p className="mt-4 text-lg text-gray-700 opacity-90">
          Sharing insights, tutorials, and experiences from the tech world.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 mt-6 font-semibold text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
        >
          Explore Now
        </motion.button>
      </motion.header>

      {/* Featured Posts */}
      <section className="px-8 py-20 mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-800">Featured Posts</h2>
        <div className="grid gap-10 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Cards key={index} {...post} />
          ))}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-4xl p-10 mx-auto text-center bg-white shadow-md rounded-xl"
      >
        <h2 className="text-3xl font-bold text-gray-800">Subscribe to My Newsletter</h2>
        <p className="mt-2 text-gray-600">Get the latest posts delivered to your inbox.</p>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="py-10 mt-16 text-center bg-white shadow-md"
      >
        <p className="text-lg text-gray-700">&copy; 2025 SN Blog. All rights reserved.</p>
        <div className="flex justify-center mt-5 space-x-8 text-3xl">
          <a href="#" className="text-gray-600 transition hover:text-pink-500"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/sathya-narayanans" className="text-gray-600 transition hover:text-blue-600"><FaLinkedin /></a>
          <a href="https://github.com/Sathyanarayanansakthi" className="text-gray-600 transition hover:text-gray-800"><FaGithub /></a>
          <a href="https://sathyanarayanan.live" className="text-gray-600 transition hover:text-green-600"><FaGlobe /></a>
        </div>
      </motion.footer>

    </div>
  );
};

export default Home;
