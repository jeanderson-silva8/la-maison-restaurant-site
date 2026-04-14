import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4A853]/5 via-transparent to-[#D4A853]/5" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white mb-6">
           Junte-se a Nós Para Uma Experiência Inesquecível
          </h2>

          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
             Seja jantando conosco ou pedindo online, estamos comprometidos com a excelência
          </p>

          <motion.a
             href="tel:+5511987654321"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 btn-primary text-lg animate-pulse-glow"
          >
             <Phone className="w-5 h-5" />
             Ligue para Reservas
          </motion.a>

           <p className="mt-6 text-[#D4A853] font-mono text-lg">
             (11) 9 8765-4321
          </p>
        </motion.div>
      </div>
    </section>
  );
}
