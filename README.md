# E-Sneakers Vue.js 3

Une application e-commerce moderne pour boutique de sneakers construite avec Vue.js 3, TypeScript et Pinia.

## 🚀 Fonctionnalités

- **Interface moderne** : Design responsive et élégant
- **Filtrage de produits** : Filtrage par marque avec animations fluides
- **Panier intelligent** : Gestion du panier avec calcul automatique
- **Favoris** : Système de favoris pour sauvegarder les produits préférés
- **Navigation** : Routing avec Vue Router 4
- **État global** : Gestion d'état avec Pinia
- **TypeScript** : Code type-safe et maintenable
- **Composants réutilisables** : Architecture modulaire

## 🛠️ Technologies

- **Vue.js 3** - Framework JavaScript progressif
- **TypeScript** - JavaScript avec typage statique
- **Pinia** - Store de gestion d'état pour Vue
- **Vue Router 4** - Router officiel pour Vue.js
- **Vite** - Build tool moderne et rapide
- **CSS3** - Styles avec variables CSS personnalisées

## 📁 Structure du projet

```
src/
├── components/          # Composants réutilisables
│   ├── AppHeader.vue   # En-tête avec navigation
│   ├── AppFooter.vue   # Pied de page
│   ├── ProductCard.vue # Carte produit
│   ├── FilterButtons.vue # Boutons de filtrage
│   └── GoToTop.vue     # Bouton retour en haut
├── views/              # Pages de l'application
│   ├── Home.vue        # Page d'accueil
│   ├── About.vue       # Page à propos
│   ├── Cart.vue        # Panier
│   ├── Favorites.vue   # Favoris
│   ├── Account.vue     # Compte utilisateur
│   └── Orders.vue      # Commandes
├── stores/             # Stores Pinia
│   ├── productStore.ts # Store des produits
│   └── appStore.ts     # Store de l'application
├── assets/             # Assets statiques
│   └── css/           # Styles CSS
├── router.ts           # Configuration du router
├── main.ts            # Point d'entrée
└── App.vue            # Composant racine
```

## 🚀 Installation et démarrage

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Build de production**
   ```bash
   npm run build
   ```

4. **Prévisualiser le build**
   ```bash
   npm run preview
   ```

## 🎯 Fonctionnalités principales

### Filtrage des produits
- Filtrage par marque (Nike, Adidas, Puma, Bata, Apex)
- Animations fluides lors du filtrage
- Bouton "Tout" pour afficher tous les produits

### Gestion du panier
- Ajout/suppression de produits
- Calcul automatique du total
- Persistance des données
- Indicateur de quantité

### Système de favoris
- Ajout/suppression de favoris
- Page dédiée aux favoris
- Indicateur visuel des produits favoris

### Navigation
- Navigation responsive
- Menu mobile avec overlay
- Scroll automatique vers le haut
- Transitions fluides entre pages

## 🎨 Personnalisation

### Variables CSS
Le projet utilise des variables CSS personnalisées dans `assets/css/style.css` :

```css
:root {
  --bittersweet: hsl(5, 100%, 69%);  /* Couleur principale */
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);
  --onyx: hsl(0, 0%, 27%);
  /* ... autres variables */
}
```

### Composants
Tous les composants sont modulaires et réutilisables. Chaque composant a son propre fichier `.vue` avec :
- Template HTML
- Script TypeScript
- Styles CSS scoped

## 📱 Responsive Design

L'application est entièrement responsive et s'adapte à tous les écrans :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation du build
- `npm run lint` - Linting du code

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche feature
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📞 Support

Pour toute question ou support, contactez-nous à : sneakerstore@gmail.com
