import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Uma experiência absolutamente divina. A massa trufada foi a melhor que já provei.",
    author: 'Maria S.',
    rating: 5,
  },
  {
    quote: "Serviço impecável e sabores extraordinários. La Maison nunca decepciona.",
    author: 'Thiago R.',
    rating: 5,
  },
  {
    quote: "Comemoramos nosso aniversário aqui e foi mágico. Super recomendo!",
    author: 'Ana & Lucas',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white">
           O Que Nossos Clientes Dizem
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-[#D4A853]/30 mb-6" />

              {/* Quote */}
              <p className="text-white/80 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4A853] text-[#D4A853]" />
                ))}
              </div>

              {/* Author */}
              <p className="text-white font-medium">— {testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
