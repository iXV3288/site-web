import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    id: 1,
    title: "Les meilleurs périphériques gaming en 2024",
    date: "15 Mars 2024",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800",
    excerpt: "Découvrez ma sélection des périphériques gaming qui font la différence...",
  },
  {
    id: 2,
    title: "Guide: Optimiser son PC pour le streaming",
    date: "10 Mars 2024",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800",
    excerpt: "Tous mes conseils pour streamer dans les meilleures conditions...",
  },
  {
    id: 3,
    title: "Mon expérience avec la RTX 4080",
    date: "5 Mars 2024",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800",
    excerpt: "Retour d'expérience après 3 mois d'utilisation intensive...",
  },
];

function Blog() {
  return (
    <div className="min-h-screen p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Blog
        </h1>

        <div className="grid gap-8">
          {articles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-48 w-full object-cover md:h-full"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="text-sm text-blue-400 mb-2">{article.date}</div>
                  <h2 className="text-xl font-bold mb-3">{article.title}</h2>
                  <p className="text-gray-400 mb-4">{article.excerpt}</p>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                    Lire la suite
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Blog;
