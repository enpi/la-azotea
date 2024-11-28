import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  {
    category: "Entrantes",
    items: [
      { name: "Jamón ibérico de bellota", price: "24€" },
      { name: "Croquetas caseras", price: "12€" },
      { name: "Ensalada de burrata", price: "14€" },
    ]
  },
  {
    category: "Principales",
    items: [
      { name: "Solomillo a la brasa", price: "26€" },
      { name: "Lubina al horno", price: "24€" },
      { name: "Risotto de setas", price: "18€" },
    ]
  },
  {
    category: "Postres",
    items: [
      { name: "Tarta de queso", price: "7€" },
      { name: "Coulant de chocolate", price: "8€" },
      { name: "Tiramisú casero", price: "7€" },
    ]
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

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Nuestra Carta
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {menuItems.map((section) => (
            <motion.div
              key={section.category}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-amber-700 mb-6">{section.category}</h3>
              <div className="space-y-4">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-center">
                    <span className="text-gray-800">{item.name}</span>
                    <span className="text-amber-600 font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}