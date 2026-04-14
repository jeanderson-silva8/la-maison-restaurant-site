import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Plus } from 'lucide-react';
import { menuItems } from '@/data/menu';
import { useCartStore } from '@/store/cartStore';
import type { Category, MenuItem } from '@/types';
import { categoryLabels, categoryEmojis } from '@/types';

const categories: Category[] = ['all', 'starters', 'main', 'pasta', 'seafood', 'desserts', 'beverages'];

function getBadgeClass(badge: string): string {
  switch (badge) {
    case 'popular':
      return 'badge-popular';
    case 'vegetarian':
      return 'badge-vegetarian';
    case 'gluten-free':
      return 'badge-gluten-free';
    case 'signature':
      return 'badge-signature';
    case 'healthy':
      return 'badge-healthy';
    case 'seafood':
      return 'badge-seafood';
    case 'cocktail':
      return 'badge-cocktail';
    case 'non-alcoholic':
      return 'badge-non-alcoholic';
    default:
      return 'bg-white/10 text-white/70';
  }
}

interface MenuCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

function MenuCard({ item, onAdd }: MenuCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-[#141414] rounded-2xl overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] img-zoom">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1">
          {item.badges.slice(0, 2).map((badge) => (
            <span key={badge} className={getBadgeClass(badge)}>
              {{
                popular: 'Popular',
                vegetarian: 'Vegetariano',
                'gluten-free': 'Sem Glúten',
                signature: 'Exclusivo',
                healthy: 'Saudável',
                seafood: 'Frutos do Mar',
                cocktail: 'Coquetel',
                'non-alcoholic': 'Sem Álcool',
              }[badge] || badge}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h3 className="font-display text-lg font-semibold text-white group-hover:text-[#D4A853] transition-colors">
            {item.name}
          </h3>
          <span className="font-mono text-lg text-[#D4A853] font-medium">
            R$ {item.price.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <p className="text-white/60 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-white/50 text-sm">
            <Clock className="w-4 h-4" />
            <span>{item.prepTime} min</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onAdd(item)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#D4A853]/50 text-[#D4A853] hover:bg-[#D4A853] hover:text-[#0A0A0A] transition-all duration-300"
          >
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Adicionar</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const addItem = useCartStore((state) => state.addItem);

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-white">
            Nosso Cardápio
          </h2>
          <p className="text-white/60">
            <span className="text-[#D4A853] font-semibold">{filteredItems.length}</span> itens disponíveis
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Buscar pratos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-[#141414] border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-[#D4A853] transition-colors"
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-2 overflow-x-auto pb-4 mb-10 scrollbar-hide"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? 'gold-gradient text-[#0A0A0A] font-semibold'
                  : 'bg-[#141414] text-white/70 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              <span>{categoryEmojis[category]}</span>
              <span className="text-sm">{categoryLabels[category]}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={addItem} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-white/60 text-lg">Nenhum item encontrado</p>
            <p className="text-white/40 text-sm mt-2">Tente ajustar sua busca ou filtros</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
