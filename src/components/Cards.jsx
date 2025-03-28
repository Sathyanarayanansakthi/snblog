import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ title, description, image, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Blog Card */}
      <motion.div
        className="relative p-6 overflow-hidden transition shadow-lg bg-white/80 backdrop-blur-xl rounded-xl hover:shadow-xl"
        whileHover={{ scale: 1.05 }}
      >
        <div
          className="w-full h-56 bg-gray-300 rounded-lg"
          style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
        ></div>
        <h3 className="mt-4 text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <button 
          onClick={() => setIsOpen(true)} 
          className="mt-4 text-blue-600 transition hover:underline"
        >
          Read More
        </button>
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="max-w-lg p-6 shadow-xl bg-white/80 rounded-xl backdrop-blur-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
              <p className="mt-4 text-gray-700">{content}</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="px-6 py-2 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Card;
