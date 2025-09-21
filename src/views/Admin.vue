<!-- <template>
    <section class="home">
      <h1>Bienvenue</h1>
      <p>Ceci est la page de connexion de l'application.</p>
    </section>
  </template>
  
 

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToAdmin() {
  router.push('/admin')
}
</script>

  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 20px;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #4b5563;
  }
  </style> -->

  <template>
    <div class="admin-home">
      <div class="dashboard-container">
        <!-- Hero Section -->
        <section class="hero-section">
          <div class="hero-content">
            <div class="logo-container">
              <span class="logo-text">SK</span>
            </div>
            <h1 class="hero-title">Dashboard Admin</h1>
            <p class="hero-description">
              Bienvenue sur votre tableau de bord administrateur.<br>
              Gérez vos vendeurs, produits et paramètres en toute simplicité.
            </p>
            
            <div class="hero-actions">
              <button @click="goToAdmin" class="action-btn btn-primary">
                <span class="btn-icon">📊</span>
                Accéder au Dashboard
              </button>
              <button class="action-btn btn-secondary">
                <span class="btn-icon">📖</span>
                Documentation
              </button>
            </div>
          </div>
          
          <div class="hero-stats">
            <div class="stat-card">
              <div class="stat-icon">👥</div>
              <div class="stat-content">
                <div class="stat-value">156</div>
                <div class="stat-label">Vendeurs Actifs</div>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">📦</div>
              <div class="stat-content">
                <div class="stat-value">89</div>
                <div class="stat-label">Produits</div>
              </div>
            </div>
            
            <div class="stat-card">
              <div class="stat-icon">💰</div>
              <div class="stat-content">
                <div class="stat-value">€24.5k</div>
                <div class="stat-label">Revenus</div>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Features Section -->
        <section class="features-section">
          <div class="container">
            <h2 class="section-title">Fonctionnalités principales</h2>
            
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Gestion des Vendeurs</h3>
                <p class="feature-description">
                  Suivez et gérez tous vos vendeurs, leurs performances et leurs statuts en temps réel.
                </p>
              </div>
              
              <div class="feature-card">
                <div class="feature-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Catalogue Produits</h3>
                <p class="feature-description">
                  Ajoutez, modifiez et organisez votre catalogue de sneakers avec une interface intuitive.
                </p>
              </div>
              
              <div class="feature-card">
                <div class="feature-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Analytics & Rapports</h3>
                <p class="feature-description">
                  Analysez vos données de vente avec des graphiques détaillés et des métriques avancées.
                </p>
              </div>
              
              <div class="feature-card">
                <div class="feature-icon">
                  <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Paramètres Avancés</h3>
                <p class="feature-description">
                  Personnalisez votre expérience avec des paramètres flexibles et une configuration complète.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Quick Actions -->
        <section class="quick-actions-section">
          <div class="container">
            <h2 class="section-title">Actions rapides</h2>
            
            <div class="quick-actions-grid">
              <div class="quick-action-card" @click="goToAdmin">
                <div class="quick-action-icon">📊</div>
                <h3>Voir le Dashboard</h3>
                <p>Accédez à votre tableau de bord complet</p>
              </div>
              
              <div class="quick-action-card">
                <div class="quick-action-icon">➕</div>
                <h3>Ajouter un Vendeur</h3>
                <p>Enregistrer un nouveau vendeur</p>
              </div>
              
              <div class="quick-action-card">
                <div class="quick-action-icon">📦</div>
                <h3>Nouveau Produit</h3>
                <p>Ajouter une sneaker au catalogue</p>
              </div>
              
              <div class="quick-action-card">
                <div class="quick-action-icon">📈</div>
                <h3>Voir les Stats</h3>
                <p>Consulter les performances</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  function goToAdmin() {
    router.push('/admin')
  }
  </script>
  
  <style scoped>
  /* Variables CSS */
  :root {
    --gradient-primary: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%);
    --gradient-accent: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    --gradient-secondary: linear-gradient(135deg, #4ecdc4, #45b7d1);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.8);
    --text-muted: rgba(255, 255, 255, 0.6);
    --glass-bg: rgba(255, 255, 255, 0.05);
    --glass-border: rgba(255, 255, 255, 0.1);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .admin-home {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--gradient-primary);
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
  }
  
  .dashboard-container {
    min-height: 100vh;
  }
  
  /* Hero Section */
  .hero-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 100vh;
    padding: 80px 5%;
    position: relative;
  }
  
  .hero-content {
    flex: 1;
    max-width: 600px;
    animation: fadeInUp 0.8s ease;
  }
  
  .logo-container {
    width: 80px;
    height: 80px;
    background: var(--gradient-accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: bold;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .hero-title {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 24px;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.1;
  }
  
  .hero-description {
    font-size: 1.3rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 48px;
  }
  
  .hero-actions {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
  
  .action-btn {
    padding: 16px 32px;
    border-radius: 12px;
    border: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-size: 1.1rem;
  }
  
  .btn-primary {
    background: var(--gradient-secondary);
    color: white;
  }
  
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(78, 205, 196, 0.4);
  }
  
  .btn-secondary {
    background: var(--glass-bg);
    color: white;
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px);
  }
  
  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  .btn-icon {
    font-size: 1.2rem;
  }
  
  /* Hero Stats */
  .hero-stats {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 48px;
  }
  
  .stat-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    transition: all 0.3s ease;
    min-width: 200px;
  }
  
  .stat-card:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(-8px);
  }
  
  .stat-icon {
    font-size: 2rem;
    width: 60px;
    height: 60px;
    background: var(--gradient-accent);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .stat-content {
    flex: 1;
  }
  
  .stat-value {
    font-size: 2rem;
    font-weight: 700;
    background: var(--gradient-secondary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 4px;
  }
  
  .stat-label {
    color: var(--text-muted);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  /* Sections */
  .features-section,
  .quick-actions-section {
    padding: 80px 5%;
    border-top: 1px solid var(--glass-border);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .section-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 64px;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  /* Features Grid */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px;
  }
  
  .feature-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 40px 32px;
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .feature-card:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
  
  .feature-icon {
    width: 80px;
    height: 80px;
    background: var(--gradient-accent);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 24px;
    color: white;
  }
  
  .feature-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--text-primary);
  }
  
  .feature-description {
    color: var(--text-secondary);
    line-height: 1.6;
  }
  
  /* Quick Actions */
  .quick-actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }
  
  .quick-action-card {
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(20px);
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .quick-action-card:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-4px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
  }
  
  .quick-action-icon {
    font-size: 3rem;
    margin-bottom: 16px;
  }
  
  .quick-action-card h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary);
  }
  
  .quick-action-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
  }
  
  /* Responsive Design */
  @media (max-width: 1200px) {
    .hero-section {
      flex-direction: column;
      text-align: center;
      padding: 60px 5%;
    }
    
    .hero-stats {
      flex-direction: row;
      justify-content: center;
      padding-left: 0;
      margin-top: 48px;
      flex-wrap: wrap;
    }
    
    .hero-title {
      font-size: 3rem;
    }
  }
  
  @media (max-width: 768px) {
    .hero-title {
      font-size: 2.5rem;
    }
    
    .hero-description {
      font-size: 1.1rem;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .hero-actions {
      justify-content: center;
    }
    
    .action-btn {
      padding: 14px 24px;
      font-size: 1rem;
    }
    
    .features-section,
    .quick-actions-section {
      padding: 60px 5%;
    }
    
    .feature-card {
      padding: 32px 24px;
    }
    
    .hero-stats {
      flex-direction: column;
      align-items: center;
    }
    
    .stat-card {
      min-width: 250px;
    }
  }
  
  @media (max-width: 480px) {
    .hero-section {
      padding: 40px 5%;
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .logo-container {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
    }
    
    .action-btn {
      width: 100%;
      justify-content: center;
    }
    
    .features-grid,
    .quick-actions-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>