import { motion } from 'motion/react';
import { useState } from 'react';
import { X } from 'lucide-react';
import Photo1 from '../../gallery/photo_1_2026-07-07_22-58-14.jpg';
import Photo2 from '../../gallery/photo_2_2026-07-07_22-58-14.jpg';
import Photo3 from '../../gallery/photo_3_2026-07-07_22-58-14.jpg';
import Photo4 from '../../gallery/photo_4_2026-07-07_22-58-14.jpg';
import Photo5 from '../../gallery/photo_5_2026-07-07_22-58-14.jpg';
import Photo6 from '../../gallery/photo_6_2026-07-07_22-58-14.jpg';
import Photo7 from '../../gallery/photo_7_2026-07-07_22-58-14.jpg';
import Photo8 from '../../gallery/photo_8_2026-07-07_22-58-14.jpg';
import Photo9 from '../../gallery/photo_9_2026-07-07_22-58-14.jpg';
import Photo10 from '../../gallery/photo_10_2026-07-07_22-58-14.jpg';
import Photo11 from '../../gallery/photo_11_2026-07-07_22-58-14.jpg';
import Photo12 from '../../gallery/photo_12_2026-07-07_22-58-14.jpg';
import Photo13 from '../../gallery/photo_13_2026-07-07_22-58-14.jpg';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: Photo1,
      title: 'CDTRC Activities',
      category: 'Programs'
    },
    {
      url: Photo2,
      title: 'Training Workshop',
      category: 'Training'
    },
    {
      url: Photo3,
      title: 'Professional Development',
      category: 'Training'
    },
    {
      url: Photo4,
      title: 'Team Activities',
      category: 'Workshop'
    },
    {
      url: Photo5,
      title: 'Learning Sessions',
      category: 'Training'
    },
    {
      url: Photo6,
      title: 'Group Programs',
      category: 'Workshop'
    },
    {
      url: Photo7,
      title: 'Interactive Learning',
      category: 'Training'
    },
    {
      url: Photo8,
      title: 'Professional Programs',
      category: 'Workshop'
    },
    {
      url: Photo9,
      title: 'CDTRC Events',
      category: 'Events'
    },
    {
      url: Photo10,
      title: 'Training Excellence',
      category: 'Training'
    },
    {
      url: Photo11,
      title: 'Workshop Sessions',
      category: 'Workshop'
    },
    {
      url: Photo12,
      title: 'Professional Growth',
      category: 'Training'
    },
    {
      url: Photo13,
      title: 'CDTRC Community',
      category: 'Programs'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--sea-blue)]/10 via-white to-[var(--yellow-accent)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Photo <span className="text-[var(--sea-blue)]">Gallery</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[var(--sea-blue)] to-[var(--yellow-accent)] mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Capturing moments from our training programs, workshops, and the incredible professionals 
              we work with around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedImage(image.url)}
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-xs font-semibold text-[var(--yellow-accent)] mb-1">
                      {image.category}
                    </div>
                    <h3 className="text-white font-semibold">{image.title}</h3>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--sea-blue)] text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage} 
              alt="Gallery image"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Be Part of Our Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our training programs and become part of a global community dedicated to child development excellence.
            </p>
            <a 
              href="/contact"
              className="inline-block px-8 py-4 bg-[var(--sea-blue)] hover:bg-[var(--sea-blue-dark)] text-white rounded-xl font-semibold transition-all duration-300 glow-sea-blue"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
