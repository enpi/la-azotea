import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    id: 1,
    name: "Juan Pérez",
    rating: 5,
    comment: "Excelente lugar para disfrutar de una buena cerveza artesanal. El ambiente es acogedor y el personal muy amable. ¡Repetiré sin duda!",
    date: "Hace 1 semana"
  },
  {
    id: 2,
    name: "Laura Gómez",
    rating: 4,
    comment: "Buena selección de cervezas y tapas deliciosas. La terraza ofrece vistas agradables al paseo marítimo.",
    date: "Hace 2 semanas"
  },
  {
    id: 3,
    name: "Miguel Torres",
    rating: 5,
    comment: "Un sitio imprescindible en El Morche. Gran variedad de cervezas y ambiente inmejorable.",
    date: "Hace 3 semanas"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const reviewVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Opiniones de nuestros clientes</h2>
          <p className="text-lg text-gray-600">Descubre lo que dicen nuestros comensales sobre su experiencia</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={reviewVariants}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
