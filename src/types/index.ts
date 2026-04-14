export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starters' | 'main' | 'pasta' | 'seafood' | 'desserts' | 'beverages';
  badges: string[];
  prepTime: number;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export type Category = 'all' | 'starters' | 'main' | 'pasta' | 'seafood' | 'desserts' | 'beverages';

export const categoryLabels: Record<Category, string> = {
  all: 'Todos',
  starters: 'Entradas',
  main: 'Principais',
  pasta: 'Massas',
  seafood: 'Frutos do Mar',
  desserts: 'Sobremesas',
  beverages: 'Bebidas',
};

export const categoryEmojis: Record<Category, string> = {
  all: '🍽️',
  starters: '🥗',
  main: '🥩',
  pasta: '🍝',
  seafood: '🦐',
  desserts: '🍰',
  beverages: '🍷',
};
