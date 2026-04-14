import { motion } from 'framer-motion';
import { ChefHat, Leaf, Award, Clock } from 'lucide-react';

const features = [
  {
    icon: ChefHat,
    title: 'Chefs Especialistas',
    description: 'Equipe culinária premiada com décadas de experiência',
  },
  {
    icon: Leaf,
    title: 'Ingredientes Frescos',
    description: 'Produtos orgânicos de origem local, entregues diariamente',
  },
  {
    icon: Award,
    title: 'Premiado',
    description: 'Reconhecido pela excelência em alta gastronomia',
  },
  {
    icon: Clock,
    title: 'Entrega Rápida',
    description: 'Da nossa cozinha até sua porta em 30 minutos',
  },
];

export function Features() {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4A853]/10 mb-6"
              >
                <feature.icon className="w-8 h-8 text-[#D4A853]" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
